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
  SearchContractProductServiceInfoProjectApplList_In,
  SearchContractProductServiceInfoProjectApplList_OutApiTableOut,
  GetContractServiceInfoApplyInfoProjectByApplId_Out,
  UpdateContractProductServiceProjectInfo_In,
  GetContractServiceInfoProjectByApplId_Out,
  ContractProductServiceinfoProjectList_In,
  ContractProductServiceinfoProjectList_OutApiTableOut,
  ContractProductServiceinfoProjectList_CustomerId_In,
  Stream,
  AnalysisMailingTemplate_Out,
  BatchRegisterContractProductServiceInfoMailing_In
} from "./interface/index.ts";
import axios from "axios";

/** 根据查询条件获取合同服务信息期刊邮寄申请信息列表 */
export const searchContractProductServiceInfoProjectApplListByPost = (
  params: SearchContractProductServiceInfoProjectApplList_In
) =>
  axios.request<SearchContractProductServiceInfoProjectApplList_OutApiTableOut>({
    url: `/api/ContractServiceInfoProject/SearchContractProductServiceInfoProjectApplList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务申请信息_期刊邮寄信息 */
export const getContractServiceInfoApplyInfoProjectByApplIdByPost = (params: { Id?: string }) =>
  axios.request<GetContractServiceInfoApplyInfoProjectByApplId_Out>({
    url: `/api/ContractServiceInfoProject/GetContractServiceInfoApplyInfoProjectByApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 作废合同服务期刊邮寄申请信息 */
export const voidContractProductServiceProjectInfoByPost = (params: { Id?: string }) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoProject/VoidContractProductServiceProjectInfo`,
    method: "post",
    params: params,
    data: {}
  });

/** 删除合同服务期刊邮寄申请信息 */
export const deleteContractProductServiceProjectInfoByPost = (params: { Id?: string }) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoProject/DeleteContractProductServiceProjectInfo`,
    method: "post",
    params: params,
    data: {}
  });

/** 修改合同服务期刊邮寄申请信息 */
export const updateContractProductServiceProjectInfoByPost = (params: UpdateContractProductServiceProjectInfo_In) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoProject/UpdateContractProductServiceProjectInfo`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务信息_期刊邮寄信息 */
export const getContractServiceInfoProjectByApplIdByPost = (params: { Id?: string }) =>
  axios.request<GetContractServiceInfoProjectByApplId_Out>({
    url: `/api/ContractServiceInfoProject/GetContractServiceInfoProjectByApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id和审核日期获取发刊信息列表 */
export const getContractProductServiceinfoProjectListByContractIdByPost = (
  params: ContractProductServiceinfoProjectList_In
) =>
  axios.request<ContractProductServiceinfoProjectList_OutApiTableOut>({
    url: `/api/ContractServiceInfoProject/GetContractProductServiceinfoProjectListByContractId`,
    method: "post",
    params: {},
    data: params
  });

/** 根据客户Id和审核日期获取发刊信息列表 */
export const getContractProductServiceinfoProjectListByCustomerIdByPost = (
  params: ContractProductServiceinfoProjectList_CustomerId_In
) =>
  axios.request<ContractProductServiceinfoProjectList_OutApiTableOut>({
    url: `/api/ContractServiceInfoProject/GetContractProductServiceinfoProjectListByCustomerId`,
    method: "post",
    params: {},
    data: params
  });

/** 下载期刊邮寄批量导入模板 */
export const downloadMailingExcelTemplateByPost = () =>
  axios.request<Stream>({
    url: `/api/ContractServiceInfoProject/DownloadMailingExcelTemplate`,
    method: "post",
    params: {},
    data: {}
  });

/** 上传期刊邮寄批量导入模板 */
export const uploadMailingTemplateByPost = (params: FormData) =>
  axios.request<AnalysisMailingTemplate_Out[]>({
    url: `/api/ContractServiceInfoProject/UploadMailingTemplate`,
    method: "post",
    params: {},
    data: params
  });

/** 批量登记合同服务信息期刊邮寄的快递信息 */
export const batchRegisterContractProductServiceInfoMailingByPost = (
  params: BatchRegisterContractProductServiceInfoMailing_In[]
) =>
  axios.request<any>({
    url: `/api/ContractServiceInfoProject/BatchRegisterContractProductServiceInfoMailing`,
    method: "post",
    params: {},
    data: params
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/ContractServiceInfoProject/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
