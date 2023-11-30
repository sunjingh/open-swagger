import { OpenAPIV2 } from 'openapi-types'
import { getResponseType, Response } from './response'
import { getRequestType, Request } from './request'

export interface ParsedApi extends Request, Response {
  deprecated: boolean
  summary: string
  url: string
  method: Method
  name: string
}
export type Method =
  | 'get'
  | 'post'
  | 'put'
  | 'del'
  | 'head'
  | 'options'
  | 'patch'
  | 'delete'
  | string

const parsePath = (
  name: string,
  url: string,
  method: Method,
  {
    parameters,
    summary = '',
    responses,
    deprecated = false,
  }: OpenAPIV2.OperationObject
): ParsedApi => {
  // 获取到接口的参数
  const {
    bodyParamsInterface,
    queryParamsInterface,
    pathParamsInterface,
  } = getRequestType(parameters, url)

  const { responseInterface } = getResponseType(responses)

  return {
    summary,
    deprecated,
    url,
    name,
    method,
    bodyParamsInterface,
    queryParamsInterface,
    pathParamsInterface,
    responseInterface,
  }
}

export { parsePath }
