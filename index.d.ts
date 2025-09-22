import { OpenAPIV2 } from 'openapi-types'

// 单一来源：转发到声明产物（开发态通过 paths 映射到 src）
export type ApiConfig<T = string | OpenAPIV2.Document> = import('./dist/src/utils').ApiConfig<T>
export type MockConfig<T = string | OpenAPIV2.Document> = import('./dist/src/utils').MockConfig<T>
export type ParsedPathsObject = import('./dist/src/parse/path').ParsedPathsObject

declare function freeSwagger(
  config: ApiConfig | string,
  events?: {
    onChooseApi?: (params: {
      paths: ParsedPathsObject
    }) => Promise<ParsedPathsObject>
  }
): Promise<OpenAPIV2.Document>

declare namespace freeSwagger {
  function mock(config: MockConfig | string): Promise<void>
}

declare global {
  var __DEV__: boolean
  var __PATH__: string
}

export default freeSwagger
export * from './dist/src/utils'
export * from './dist/src/default'
