/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger-core
 * @see https://www.npmjs.com/package/free-swagger
 * @title Crm2所有接口
 * @description 所有api
 * @version v1
}
**/

import { ApiDictionary, Stream } from "./interface/index.ts";
import axios from "axios";

/** 获取收款公司信息表 */
export const getCollectingcompanyListByPost = () =>
  axios.request<ApiDictionary[]>({
    url: `/api/Collectingcompany/GetCollectingcompanyList`,
    method: "post",
    params: {},
    data: {}
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/Collectingcompany/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
