import { ParsedInterface } from '..'

const genInterface = ({
  formatName,
  props,
  code,
  description,
}: ParsedInterface, forceRequired: boolean, forceReplace: Record<string,string>): string =>
  code
    ? code
    // 将 MyTable 类型强制替换为 any[]
    : `${
        description ? `/** ${description} */\n` : ''
      }export interface ${formatName} {
        ${
          props &&
          Object.entries(props).map(
            ([propName, prop]) =>
              `${prop.description ? `\n/** ${prop.description} */` : ''}
            '${propName}' ${prop.required || forceRequired ? '' : '?'}: ${forceReplace?.[prop.formatType] || prop.formatType}
            `
          )
        }
      }
`

export { genInterface }
