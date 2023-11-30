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

import axios from "axios";

/**
 * @description 根据查询条件获取海关编码列表
 * @param {SearchHsCodeList_In} params
 **/
export const searchHsCodeListByPost = (params) =>
  axios.request({
    url: `/api/HsCode/SearchHsCodeList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/HsCode/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });