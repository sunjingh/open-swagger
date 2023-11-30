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
  AddContractTemplateApply_In,
  UpdateContractTemplateApply_In,
  SearchContractTemplateList_In,
  SearchContractTemplateList_OutApiTableOut,
  GetContractTemplateById_Out,
  GetContractByContractTemplateId_In,
  GetContractByContractTemplateId_OutApiTableOut,
  SearchContractTemplateApplyList_In,
  SearchContractTemplateApplyList_OutApiTableOut,
  GetContractTemplateApplyById_Out,
  AuditContractTemplateApply_In,
  GetUnlimitedContractTemplateList_In,
  GetUnlimitedContractTemplateList_Out,
  GetProductListByServiceCycle_Out,
  GetServiceCycleByProductList_In,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 添加合同说明模板申请信息 */
export const addContractTemplateApplyByPost = (params: AddContractTemplateApply_In) =>
  axios.request<any>({
    url: `/api/ContractTemplate/AddContractTemplateApply`,
    method: "post",
    params: {},
    data: params
  });

/** 修改合同说明模板申请信息 */
export const updateContractTemplateApplyByPost = (params: UpdateContractTemplateApply_In) =>
  axios.request<any>({
    url: `/api/ContractTemplate/UpdateContractTemplateApply`,
    method: "post",
    params: {},
    data: params
  });

/** 删除合同说明模板信息 */
export const deleteContractTemplateByPost = (params: { Ids?: string }) =>
  axios.request<any>({
    url: `/api/ContractTemplate/DeleteContractTemplate`,
    method: "post",
    params: params,
    data: {}
  });

/** 撤销合同说明模板申请信息 */
export const revokeContractTemplateApplyByPost = (params: { Ids?: string }) =>
  axios.request<any>({
    url: `/api/ContractTemplate/RevokeContractTemplateApply`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据查询条件获取合同说明模板信息列表 */
export const searchContractTemplateListByPost = (params: SearchContractTemplateList_In) =>
  axios.request<SearchContractTemplateList_OutApiTableOut>({
    url: `/api/ContractTemplate/SearchContractTemplateList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据合同说明模板信息Id获取合同说明模板信息 */
export const getContractTemplateByIdByPost = (params: { Id?: string }) =>
  axios.request<GetContractTemplateById_Out>({
    url: `/api/ContractTemplate/GetContractTemplateById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同说明模板id获取合同信息列表 */
export const getContractByContractTemplateIdByPost = (params: GetContractByContractTemplateId_In) =>
  axios.request<GetContractByContractTemplateId_OutApiTableOut>({
    url: `/api/ContractTemplate/GetContractByContractTemplateId`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取合同说明模板申请信息列表 */
export const searchContractTemplateApplyListByPost = (params: SearchContractTemplateApplyList_In) =>
  axios.request<SearchContractTemplateApplyList_OutApiTableOut>({
    url: `/api/ContractTemplate/SearchContractTemplateApplyList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据合同说明模板申请信息Id获取合同说明模板申请信息 */
export const getContractTemplateApplyByIdByPost = (params: { Id?: string }) =>
  axios.request<GetContractTemplateApplyById_Out>({
    url: `/api/ContractTemplate/GetContractTemplateApplyById`,
    method: "post",
    params: params,
    data: {}
  });

/** 审核合同说明模板申请信息 */
export const auditContractTemplateApplyByPost = (params: AuditContractTemplateApply_In) =>
  axios.request<any>({
    url: `/api/ContractTemplate/AuditContractTemplateApply`,
    method: "post",
    params: {},
    data: params
  });

/** 撤销合同说明模板申请审核信息 */
export const revokeContractTemplateAuditByPost = (params: { Ids?: string }) =>
  axios.request<any>({
    url: `/api/ContractTemplate/RevokeContractTemplateAudit`,
    method: "post",
    params: params,
    data: {}
  });

/** 作废合同说明模板申请信息 */
export const voidContractTemplateAuditByPost = (params: { Ids?: string }) =>
  axios.request<any>({
    url: `/api/ContractTemplate/VoidContractTemplateAudit`,
    method: "post",
    params: params,
    data: {}
  });

/** 获取合同说明模板主键+描述，无分页 */
export const getUnlimitedContractTemplateListByPost = (params: GetUnlimitedContractTemplateList_In) =>
  axios.request<GetUnlimitedContractTemplateList_Out[]>({
    url: `/api/ContractTemplate/GetUnlimitedContractTemplateList`,
    method: "post",
    params: {},
    data: params
  });

/** 获取用户当前可申请的最大模板数 */
export const getApplyCountUpLimitByPost = () =>
  axios.request<number>({
    url: `/api/ContractTemplate/GetApplyCountUpLimit`,
    method: "post",
    params: {},
    data: {}
  });

/** 根据服务年限筛选产品列表 */
export const getProductListByServiceCycleByPost = (params: { Cycle?: number }) =>
  axios.request<GetProductListByServiceCycle_Out[]>({
    url: `/api/ContractTemplate/GetProductListByServiceCycle`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据产品IdList获取服务年限，如果存在不同的服务年限，返回null */
export const getServiceCycleByProductListByPost = (params: GetServiceCycleByProductList_In) =>
  axios.request<number>({
    url: `/api/ContractTemplate/GetServiceCycleByProductList`,
    method: "post",
    params: {},
    data: params
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/ContractTemplate/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
