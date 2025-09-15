// 不要缩写，否则会找不到 map/genericInterfaceMap/recursiveMap
import {
  ParsedInterface,
  parseInterface,
  uniqInterfaceNameImports,
} from '../parse/interface'
import { formatCode, traverseTree, TYPE_MAP } from '../utils'
import { genInterface } from '../gen/interface'
import {
  createDefaultHeadCode,
  normalizeDefinitionName,
  normalizeSource,
  transformSource,
} from '../default'
import { genJsDocTypeDef } from '..'
import { OpenAPIV2 } from 'openapi-types'
import chalk from 'chalk'

const isNode = typeof window === 'undefined'

export type Type = 'jsDoc' | 'interface'
export type CompileTypesParams = {
  source: OpenAPIV2.Document
  contextMap?: Map<string, ParsedInterface>
  interfaceName?: string
  type?: Type
  recursive?: boolean
  url?: string
  forceRequired?: boolean
}
export type CompileTypeParams = Required<
  Required<Pick<CompileTypesParams, 'source' | 'contextMap' | 'interfaceName' | 'forceRequired'>>
> &
  Pick<CompileTypesParams, 'recursive' | 'type'> & { imports: string[] }

export type CompileTypes = (
  params: CompileTypesParams
) => Promise<{ code: string; imports: string[] }>
export type CompileType = (
  params: CompileTypeParams
) => { code: string; imports: string[] }

// 生成单个 interface/typedef 代码
const compileType: CompileType = ({
  source,
  interfaceName, // origin interface name
  contextMap,
  type = 'interface',
  recursive,
  imports,
  forceRequired,
}) => {
  if (!source.definitions![interfaceName]) {
    return { code: '', imports }
  }
  const res = parseInterface(source.definitions!, interfaceName, type)
  let code = ''
  try {
    traverseTree(res, (node) => {
      if (contextMap.has(node.name)) {
        return
      } else {
        contextMap.set(node.name, node)
      }
      if (node.code) {
        code +=
          type === 'interface'
            ? `${formatCode('ts')(genInterface(node, forceRequired))}\n`
            : `${genJsDocTypeDef(node)}\n`
        return
      }
      if (TYPE_MAP[node.name] || !node.props) {
        return
      }
      // 复制代码块的 interface 时，递归生成依赖的所有 interface
      if (recursive) {
        code += Object.values(node.props)
          .filter((prop) => prop.ref)
          .reduce((acc, prop) => {
            const { code } = compileType({
              source,
              interfaceName: prop.ref,
              contextMap,
              type,
              recursive,
              imports,
              forceRequired,
            })
            if (code) {
              return `${acc + code}\n`
            } else {
              return acc
            }
          }, '')
      }
      code +=
        type === 'interface'
          ? `${formatCode('ts')(genInterface(node, forceRequired))}\n`
          : `${genJsDocTypeDef(node)}\n`
    })
    return {
      code: code ? `${code.trim()}\n` : code,
      imports: uniqInterfaceNameImports(imports),
    }
  } catch (e) {
    const error = `${
      type === 'interface' ? 'interfaceName' : 'jsDoc'
    }: ${interfaceName} 生成失败，检查是否符合 swagger 规范`
    if (isNode) {
      console.log(chalk.yellow(error))
    } else {
      console.warn(error)
      console.warn(e)
    }
    return {
      code: `// ${
        type === 'interface' ? 'interfaceName' : 'jsDoc'
      }: ${interfaceName} 生成失败，检查是否符合 swagger 规范
    
`,
      imports: uniqInterfaceNameImports(imports),
    }
  }
}

// 生成单个/全量 interface/jsDoc 代码
const compileTypes: CompileTypes = async ({
  source,
  interfaceName,
  type = 'interface',
  contextMap,
  recursive,
  url,
  forceRequired = false,
}) => {
  const normalizedSource = normalizeSource(await transformSource(source))
  // 收集依赖
  const imports: string[] = []
  if (!normalizedSource.definitions) return { code: '', imports }

  // 单个 type
  if (interfaceName) {
    const map = contextMap ?? new Map<string, ParsedInterface>()
    const normalizedInterfaceName = normalizeDefinitionName(interfaceName)
    imports.push(normalizedInterfaceName)
    return compileType({
      recursive,
      source: normalizedSource,
      interfaceName: normalizedInterfaceName,
      imports,
      type,
      contextMap: map,
      forceRequired,
    })
  } else {
    // 全量 type
    const contextMap = new Map<string, ParsedInterface>()
    const interfaceCode = Object.keys(normalizedSource.definitions).reduce(
      (acc, cur) => {
        imports.push(cur)
        const { code } = compileType({
          recursive,
          source: normalizedSource,
          interfaceName: cur,
          contextMap,
          imports,
          type,
          forceRequired,
        })
        if (code) {
          return `${acc + code}\n`
        } else {
          return acc
        }
      },
      ''
    )
    const originCode = `${createDefaultHeadCode({
      url,
      description: source.info.description,
      title: source.info.title,
      version: source.info.version,
    })}

${interfaceCode}`

    const formattedCode =
      type === 'interface' ? formatCode('ts')(originCode) : originCode

    return {
      code: formattedCode.trim(),
      imports: uniqInterfaceNameImports(imports),
    }
  }
}

export { compileTypes }
