/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger-core
 * @see https://www.npmjs.com/package/free-swagger
 * @title Crm2所有接口
 * @description 所有api
 * @fileDescription 合同管理 - 海外IP备案控制器
 * @version v1
}
**/

import axios from "axios";

/**
 * @description 根据查询条件获取海外IP备案列表。
 * @param {SearchIPKeepRecordList_In} params
 **/
export const searchIpKeepRecordListByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/SearchIPKeepRecordList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据查询条件获取海外IP备案审核列表。
 * @param {SearchIPKeepRecordList_In} params
 **/
export const searchIpKeepRecordApplyListByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/SearchIPKeepRecordApplyList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据IP备案Id获取IP备案信息。
 * @param {GetIPKeepRecordById_In} params
 **/
export const getIpKeepRecordByIdByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/GetIPKeepRecordById`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 添加IP备案申请信息。
 * @param {FormData} params
 **/
export const addIpKeepRecordApplyByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/AddIPKeepRecordApply`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 修改IP备案申请信息。
 * @param {FormData} params
 **/
export const updateIpKeepRecordApplyByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/UpdateIPKeepRecordApply`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 删除IP备案信息，当备案状态为通过、拒绝、作废时，可操作删除。验证数据权限。
 * @param {DeleteIPKeepRecord_In} params
 **/
export const deleteIpKeepRecordByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/DeleteIPKeepRecord`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 撤销IP备案申请信息，当备案状态为通过、拒绝、作废时，可操作返回到上一个状态。验证数据权限
 * @param {RevokeIPKeepRecordApply_In} params
 **/
export const revokeIpKeepRecordApplyByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/RevokeIPKeepRecordApply`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 作废IP备案信息，当备案状态为通过、已提交时，可对申请备案信息进行作废处理
 * @param {VoidIPKeepRecordApply_In} params
 **/
export const voidIpKeepRecordApplyByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/VoidIPKeepRecordApply`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 审核IP备案申请信息。
 * @param {AuditIPKeepRecordApply_In} params
 **/
export const auditIpKeepRecordApplyByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/AuditIPKeepRecordApply`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @deprecated
 * @description 根据查询条件获取海外IP备案申请列表。
 * @param {SearchIPKeepRecordApplyList_In} params
 **/
export const searchIpKeepRecordApplyListOldByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/SearchIPKeepRecordApplyListOld`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据账号类别获取Gtis用户列表
 * @param {GetGtisUserByAccountCategory_In} params
 **/
export const getGtisUserByAccountCategoryByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/GetGtisUserByAccountCategory`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据国家Id获取地址信息（省级别）
 * @param {Province_In} params
 **/
export const getAddressProvinceByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/GetAddress_Province`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据省Id获取地址信息(市级别)
 * @param {City_In} params
 **/
export const getAddressCityByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/GetAddress_City`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据查询条件查询合同列表
 * @param {SearchSelectContractList_In} params
 **/
export const searchSelectContractListByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/SearchSelectContractList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据合同Id获取合同基本信息
 * @param {GetContractInfoById_In} params
 **/
export const getContractInfoByIdByPost = (params) =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/GetContractInfoById`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/ContractOverseasIPRecord/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });