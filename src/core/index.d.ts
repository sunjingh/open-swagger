import { CoreConfig } from './utils'
import { Method } from './parse/path'

declare function freeSwaggerCore(
  config: CoreConfig,
  url?: string,
  method?: Method
): Promise<string>

export default freeSwaggerCore

export * from './default/template'
export * from './default/index'
export * from './utils'
export * from './gen/path'
export * from './gen/jsDoc'
export * from './parse/path'
export * from './parse/interface'
export * from './compile/interface'
export * from './compile/jsDoc'
export * from './compile/path'
