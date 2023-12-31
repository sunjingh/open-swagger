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
 * @description 添加回款信息
 * @param {AddCollectionInfo_In[]} params
 **/
export const addCollectionInfoByPost = (params) =>
  axios.request({
    url: `/api/Collectioninfo/AddCollectionInfo`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 修改回款信息
 * @param {UpdateCollectionInfo_In} params
 **/
export const updateCollectionInfoByPost = (params) =>
  axios.request({
    url: `/api/Collectioninfo/UpdateCollectionInfo`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 删除回款信息
 * @param {string[]} params
 **/
export const deleteCollectionInfoByPost = (params) =>
  axios.request({
    url: `/api/Collectioninfo/DeleteCollectionInfo`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据回款信息Id获取回款信息
 * @param {Object} params
 * @param {string} params.id
 **/
export const getCollectionInfoByIdByPost = (params) =>
  axios.request({
    url: `/api/Collectioninfo/GetCollectionInfoById`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据查询条件获取回款信息列表
 * @param {SearchCollectionInfoList_In} params
 **/
export const searchCollectionInfoListByPost = (params) =>
  axios.request({
    url: `/api/Collectioninfo/SearchCollectionInfoList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 识别回款信息
 * @param {Object} params
 * @param {string} params.transactionReceipt
 **/
export const identifyCollectionInfoByPost = (params) =>
  axios.request({
    url: `/api/Collectioninfo/IdentifyCollectionInfo`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据查询条件获取匹配状态为待登记的回款信息列表
 * @param {SearchUnRegisteredCollectionInfoList_In} params
 **/
export const searchUnRegisteredCollectionInfoListByPost = (params) =>
  axios.request({
    url: `/api/Collectioninfo/SearchUnRegisteredCollectionInfoList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Collectioninfo/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
