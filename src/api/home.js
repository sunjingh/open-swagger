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
 * @description 获取用户待办信息
 **/
export const getWorkflowPendingByPost = () =>
  axios.request({
    url: `/api/Home/GetWorkflowPending`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 变更用户待办信息未查看为已查看
 * @param {Object} params
 * @param {string} params.id
 **/
export const updateWorkflowPendingStateToViewedByPost = (params) =>
  axios.request({
    url: `/api/Home/UpdateWorkflowPendingStateToViewed`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 获取用户已处理信息
 * @param {Object} params
 * @param {string} params.dataId
 * @param {string} params.workFlowName
 **/
export const getWorkflowHandleInfoByPost = (params) =>
  axios.request({
    url: `/api/Home/GetWorkflowHandleInfo`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 获取用户已处理信息以及业务信息
 * @param {Object} params
 * @param {string} params.dataId
 * @param {string} params.workFlowName
 **/
export const getWorkflowBusinessInfoByPost = (params) =>
  axios.request({
    url: `/api/Home/GetWorkflowBusinessInfo`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 查询合同已处理信息
 * @param {SearchWorkflowHandleInfo_In} params
 **/
export const searchContractWorkflowHandleInfoByPost = (params) =>
  axios.request({
    url: `/api/Home/SearchContractWorkflowHandleInfo`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 获取业务消息种类表
 **/
export const getBusinessMessageTypeByPost = () =>
  axios.request({
    url: `/api/Home/GetBusinessMessageType`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 添加用户业务消息种类
 * @param {string[]} params
 **/
export const addUserBusinessMessagetypeByPost = (params) =>
  axios.request({
    url: `/api/Home/AddUserBusinessMessagetype`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 修改用户业务消息种类
 * @param {string[]} params
 **/
export const updateUserBusinessMessagetypeByPost = (params) =>
  axios.request({
    url: `/api/Home/UpdateUserBusinessMessagetype`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 获取用户业务消息种类
 **/
export const getUserBusinessMessageTypeByPost = () =>
  axios.request({
    url: `/api/Home/GetUserBusinessMessageType`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 获取用户业务消息信息
 **/
export const getBusinessMessageAndInfoTypeByPost = () =>
  axios.request({
    url: `/api/Home/GetBusinessMessageAndInfoType`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 获取用户消息信息
 **/
export const getMessagesListByPost = () =>
  axios.request({
    url: `/api/Home/GetMessagesList`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 根据查询条件获取用户消息信息列表
 * @param {SearchMessagesList_In} params
 **/
export const searchMessagesListByPost = (params) =>
  axios.request({
    url: `/api/Home/SearchMessagesList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Home/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });