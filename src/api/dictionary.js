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
 * @description 根据数据字典Id获取数据字典信息
 * @param {Object} params
 * @param {string} params.Id
 **/
export const getDictionaryByIdByPost = (params) =>
  axios.request({
    url: `/api/Dictionary/GetDictionaryById`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据查询条件获取数据字典信息列表
 * @param {SearchDictionaryList_In} params
 **/
export const searchDictionaryListByPost = (params) =>
  axios.request({
    url: `/api/Dictionary/SearchDictionaryList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据数据字典ParentId获取数据字典信息
 * @param {Object} params
 * @param {string} params.Id
 **/
export const getDictionaryByParentIdByPost = (params) =>
  axios.request({
    url: `/api/Dictionary/GetDictionaryByParentId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据数据字典ParentName获取数据字典信息
 * @param {Object} params
 * @param {string} params.Name
 **/
export const getDictionaryByParentNameByPost = (params) =>
  axios.request({
    url: `/api/Dictionary/GetDictionaryByParentName`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据数据字典ParentValue获取数据字典信息
 * @param {Object} params
 * @param {string} params.Value
 **/
export const getDictionaryByParentValueByPost = (params) =>
  axios.request({
    url: `/api/Dictionary/GetDictionaryByParentValue`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Dictionary/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
