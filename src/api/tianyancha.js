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
 * @description
 * @param {Object} params
 * @param {string} params.companyname
 **/
export const queryTianyanchaByPost = (params) =>
  axios.request({
    url: `/api/Tianyancha/QueryTianyancha`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description
 * @param {Object} params
 * @param {string} params.companyname
 **/
export const queryTianyanchaListByPost = (params) =>
  axios.request({
    url: `/api/Tianyancha/QueryTianyanchaList`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Tianyancha/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
