/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger-core
 * @see https://www.npmjs.com/package/free-swagger
 * @title Crm2所有接口
 * @description 所有api
 * @fileDescription 业绩管理控制器
 * @version v1
}
**/

import axios from "axios";

/**
 * @description 根据查询条件获取合同到账登记列表
 * @param {QueryContractAchievement_IN} params
 **/
export const searchContractReceiptRegisterConfirmListByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SearchContractReceiptRegisterConfirmList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 确认合同到账登记业绩审核信息
 * @param {AuditContractReceiptRegisterAchievement_IN} params
 **/
export const auditContractReceiptRegisterAchievementByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/AuditContractReceiptRegisterAchievement`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 批量确认合同到账登记业绩审核信息
 * @param {BatchAuditContractReceiptRegisterAchievement_IN} params
 **/
export const batchAuditContractReceiptRegisterAchievementByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/BatchAuditContractReceiptRegisterAchievement`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 撤销合同到账登记业绩审核信息(状态为确认、有疑问才可以)
 * @param {RevokeAuditContractReceiptRegisterAchievement_IN} params
 **/
export const revokeContractReceiptRegisterAchievementByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/RevokeContractReceiptRegisterAchievement`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据合同Id获取到账登记的合同信息
 * @param {Object} params
 * @param {string} params.contractId
 **/
export const getContractInfoByContractIdByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/GetContractInfoByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据到账登记表Id获取合同到账登记的合同信息和合同到账登记信息
 * @param {Object} params
 * @param {string} params.contractReceiptRegisterId
 **/
export const getContractInfoByContractReceiptRegisterIdByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/GetContractInfoByContractReceiptRegisterId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据到账登记审核表id获取合同到账登记业绩审核确认信息
 * @param {Object} params
 * @param {string} params.contractReceiptRegisterAuditId
 **/
export const getContractReceiptRegisterAchievementAuditByIdByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/GetContractReceiptRegisterAchievementAuditById`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据到账登记表Id获取业绩确认详情信息（销售用）
 * @param {Object} params
 * @param {string} params.contractReceiptRegisterId
 **/
export const getInfoByContractReceiptRegisterIdByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/GetInfoByContractReceiptRegisterId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description （组织）客户数据-销售目标统计
 * @param {SalesDataStatistics_IN} params
 **/
export const salesTargetStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesTargetStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description （个人-组织）客户数据-销售业绩 (包含同比环比)
 * @param {SalesDataStatistics_IN} params
 **/
export const salesDataStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesDataStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description （组织）客户数据-业绩排行
 * @param {SalesDataStatistics_IN} params
 **/
export const salesOrgRankStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesOrgRankStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description （个人）客户数据-业绩排行
 * @param {SalesDataStatistics_IN} params
 **/
export const salesUserRankStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesUserRankStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 客户数据-产品业绩
 * @param {SalesDataStatistics_IN} params
 **/
export const salesProductStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesProductStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 客户数据-合同统计
 * @param {SalesDataStatistics_IN} params
 **/
export const salesContractStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesContractStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 客户数据-客户统计
 * @param {SalesDataStatistics_IN} params
 **/
export const customerStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/CustomerStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 客户数据-跟踪统计
 * @param {SalesDataStatistics_IN} params
 **/
export const trackRecordStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/TrackRecordStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 客户数据-跟踪排行
 * @param {SalesDataStatistics_IN} params
 **/
export const trackingRecordRankStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/TrackingRecordRankStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 销售分析-客户（按合同计算：新增合同和续约合同都各自算一个新客户）地域分布
 * @param {SalesAnalyseStatistics_IN} params
 **/
export const salesCitysStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesCitysStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 销售分析-客户（签过合同且未作废的算签约客户）地域分布-国家详情
 * @param {SalesCountryAnalyseStatistics_IN} params
 **/
export const salesCountryDetailAnalyseStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesCountryDetailAnalyseStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 销售分析-客户（签过合同且未作废的算签约客户）地域分布-国家排行
 * @param {SalesCountryAnalyseStatistics_IN} params
 **/
export const salesCountryRankAnalyseStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesCountryRankAnalyseStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 销售分析-到账客户（）来源
 * @param {SalesAnalyseStatistics_IN} params
 **/
export const salesReciveCustomerSourceStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesReciveCustomerSourceStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 销售分析-到账客户（）合同转化率
 * @param {SalesAnalyseStatistics_IN} params
 **/
export const salesReciveContractTypeTransStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesReciveContractTypeTransStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 销售分析-到账客户（）来源转化率
 * @param {SalesAnalyseStatistics_IN} params
 **/
export const salesReciveCustomerSourceTransStatisticsByPost = (params) =>
  axios.request({
    url: `/api/ContractAchievement/SalesReciveCustomerSourceTransStatistics`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/ContractAchievement/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
