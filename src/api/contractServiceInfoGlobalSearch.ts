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

import {
  SearchContractProductServiceInfoGlobalSearchApplList_In,
  SearchContractProductServiceInfoGlobalSearchApplList_OutApiTableOut,
  GetContractServiceInfoApplyInfoGlobalSearchByApplId_Out,
  OperateContractProductServiceInfoGlobalSearchAudit_In,
  SetContractServiceInfoGlobalSearchUser_In,
  SetContractServiceInfoGlobalSearchUserByApplyIds_In,
  GetContractServiceInfoGlobalSearchByApplId_Out,
  GetContractServiceInfoGlobalSearchByContractProductInfoId_Out,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 根据查询条件获取合同服务信息环球搜申请信息列表 */
export const searchContractProductServiceInfoGlobalSearchApplListByPost = (
  params: SearchContractProductServiceInfoGlobalSearchApplList_In
) =>
  axios.request<SearchContractProductServiceInfoGlobalSearchApplList_OutApiTableOut>({
    url: `/api/ContractServiceInfoGlobalSearch/SearchContractProductServiceInfoGlobalSearchApplList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务申请信息_环球搜信息 */
export const getContractServiceInfoApplyInfoGlobalSearchByApplIdByPost = (params: { Id?: string }) =>
  axios.request<GetContractServiceInfoApplyInfoGlobalSearchByApplId_Out>({
    url: `/api/ContractServiceInfoGlobalSearch/GetContractServiceInfoApplyInfoGlobalSearchByApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 撤销合同服务信息环球搜申请审核信息 */
export const revokeContractProductServiceInfoGlobalSearchAuditByPost = (
  params: OperateContractProductServiceInfoGlobalSearchAudit_In
) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoGlobalSearch/RevokeContractProductServiceInfoGlobalSearchAudit`,
    method: "post",
    params: {},
    data: params
  });

/** 作废合同服务信息环球搜申请审核信息 */
export const voidContractProductServiceInfoGlobalSearchAuditByPost = (
  params: OperateContractProductServiceInfoGlobalSearchAudit_In
) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoGlobalSearch/VoidContractProductServiceInfoGlobalSearchAudit`,
    method: "post",
    params: {},
    data: params
  });

/** 删除合同服务信息环球搜申请信息 */
export const deleteContractProductServiceInfoGlobalSearchAuditByPost = (
  params: OperateContractProductServiceInfoGlobalSearchAudit_In
) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoGlobalSearch/DeleteContractProductServiceInfoGlobalSearchAudit`,
    method: "post",
    params: {},
    data: params
  });

/** 设置环球搜用户状态信息 */
export const setContractServiceInfoGlobalSearchUserByPost = (params: SetContractServiceInfoGlobalSearchUser_In[]) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoGlobalSearch/SetContractServiceInfoGlobalSearchUser`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请Id批量修改服务用户状态 */
export const setContractServiceInfoGlobalSearchUserByApplyIdsByPost = (
  params: SetContractServiceInfoGlobalSearchUserByApplyIds_In
) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoGlobalSearch/SetContractServiceInfoGlobalSearchUserByApplyIds`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务信息_环球搜信息 */
export const getContractServiceInfoGlobalSearchByApplIdByPost = (params: { Id?: string }) =>
  axios.request<GetContractServiceInfoGlobalSearchByApplId_Out>({
    url: `/api/ContractServiceInfoGlobalSearch/GetContractServiceInfoGlobalSearchByApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同产品信息表id获取合同服务信息_环球搜信息 */
export const getContractServiceInfoGlobalSearchByContractProductInfoIdByPost = (params: { Id?: string }) =>
  axios.request<GetContractServiceInfoGlobalSearchByContractProductInfoId_Out>({
    url: `/api/ContractServiceInfoGlobalSearch/GetContractServiceInfoGlobalSearchByContractProductInfoId`,
    method: "post",
    params: params,
    data: {}
  });

/** 验证当前申请的合同款是否到账 */
export const checkGlobalSearchApplAchievementByPost = (params: { contractId?: string }) =>
  axios.request<boolean>({
    url: `/api/ContractServiceInfoGlobalSearch/CheckGlobalSearchApplAchievement`,
    method: "post",
    params: params,
    data: {}
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/ContractServiceInfoGlobalSearch/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
