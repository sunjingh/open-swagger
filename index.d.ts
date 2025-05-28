import { OpenAPIV2 } from 'openapi-types'
import { ApiConfig, MockConfig } from './src/utils'
import { ParsedPathsObject } from './src/parse/path'

declare function freeSwagger(
  config: ApiConfig | string,
  events?: {
    onChooseApi?: (params: {
      paths: ParsedPathsObject
    }) => Promise<ParsedPathsObject>
  }
): Promise<OpenAPIV2.Document>

declare function mock(config: MockConfig | string): Promise<void>

declare global {
  var __DEV__: boolean
  var __PATH__: string
}

export default freeSwagger
export type { ApiConfig, MockConfig } from './src/utils'
export * from './src/utils'
export * from './src/default'
export { ParsedPathsObject } from './src/parse/path'
export { mock }
