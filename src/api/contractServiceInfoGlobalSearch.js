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
 * @description 根据查询条件获取合同服务信息环球搜申请信息列表
 * @param {SearchContractProductServiceInfoGlobalSearchApplList_In} params
 **/
export const searchContractProductServiceInfoGlobalSearchApplListByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/SearchContractProductServiceInfoGlobalSearchApplList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据申请id获取合同服务申请信息_环球搜信息
 * @param {Object} params
 * @param {string} params.Id
 **/
export const getContractServiceInfoApplyInfoGlobalSearchByApplIdByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/GetContractServiceInfoApplyInfoGlobalSearchByApplId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 撤销合同服务信息环球搜申请审核信息
 * @param {OperateContractProductServiceInfoGlobalSearchAudit_In} params
 **/
export const revokeContractProductServiceInfoGlobalSearchAuditByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/RevokeContractProductServiceInfoGlobalSearchAudit`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 作废合同服务信息环球搜申请审核信息
 * @param {OperateContractProductServiceInfoGlobalSearchAudit_In} params
 **/
export const voidContractProductServiceInfoGlobalSearchAuditByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/VoidContractProductServiceInfoGlobalSearchAudit`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 删除合同服务信息环球搜申请信息
 * @param {OperateContractProductServiceInfoGlobalSearchAudit_In} params
 **/
export const deleteContractProductServiceInfoGlobalSearchAuditByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/DeleteContractProductServiceInfoGlobalSearchAudit`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 设置环球搜用户状态信息
 * @param {SetContractServiceInfoGlobalSearchUser_In[]} params
 **/
export const setContractServiceInfoGlobalSearchUserByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/SetContractServiceInfoGlobalSearchUser`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据申请Id批量修改服务用户状态
 * @param {SetContractServiceInfoGlobalSearchUserByApplyIds_In} params
 **/
export const setContractServiceInfoGlobalSearchUserByApplyIdsByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/SetContractServiceInfoGlobalSearchUserByApplyIds`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据申请id获取合同服务信息_环球搜信息
 * @param {Object} params
 * @param {string} params.Id
 **/
export const getContractServiceInfoGlobalSearchByApplIdByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/GetContractServiceInfoGlobalSearchByApplId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据合同产品信息表id获取合同服务信息_环球搜信息
 * @param {Object} params
 * @param {string} params.Id
 **/
export const getContractServiceInfoGlobalSearchByContractProductInfoIdByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/GetContractServiceInfoGlobalSearchByContractProductInfoId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 验证当前申请的合同款是否到账
 * @param {Object} params
 * @param {string} params.contractId
 **/
export const checkGlobalSearchApplAchievementByPost = (params) =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/CheckGlobalSearchApplAchievement`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/ContractServiceInfoGlobalSearch/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
