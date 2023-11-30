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
  ContractInfoAndInvoiceAppl_Out,
  SearchContractInvoiceAuditList_In,
  SearchContractInvoiceAuditList_OutApiTableOut,
  ContractInfoAndReceipt_Out,
  ContractInvoiceAndAudit_Out,
  ContractInfoAndInvoiceInfo_Out,
  ContractRefundInvoice_In,
  AuditContractRefundInvoice_In,
  SearchContractInvoiceApplList_In,
  SearchContractInvoiceApplList_OutApiTableOut,
  GetContractInvoiceAppl_OUT,
  ContractRefundInvoice_Out,
  ContractInfoAndInvoiceInfoAndRefundInvoiceInfo_Out,
  ContractInvoiceApplAndInvoiceInfo_Out,
  ReminderContractInvoiceAppl_IN,
  ContractInvoiceInfoAndRefundInvoiceInfo_Out,
  GetOriginalInvoiceList_Out,
  InvoiceInfo_Out,
  ContractInvoiceList_In,
  ContractInvoiceList_OutApiTableOut,
  ContractInvoiceList_CustomerId_In,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 添加合同发票申请 */
export const addContractInvoiceApplByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/ContractInvoice/AddContractInvoiceAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 修改合同发票申请 */
export const updateContractInvoiceApplByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/ContractInvoice/UpdateContractInvoiceAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 审核合同发票申请 */
export const auditContractInvoiceApplByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/ContractInvoice/AuditContractInvoiceAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据发票申请Id获取合同基本信息和发票申请信息 */
export const getContractInfoAndInvoiceApplByInvoiceApplIdByPost = (params: { id?: string }) =>
  axios.request<ContractInfoAndInvoiceAppl_Out>({
    url: `/api/ContractInvoice/GetContractInfoAndInvoiceApplByInvoiceApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据查询条件获取合同发票申请列表 */
export const searchContractInvoiceAuditListByPost = (params: SearchContractInvoiceAuditList_In) =>
  axios.request<SearchContractInvoiceAuditList_OutApiTableOut>({
    url: `/api/ContractInvoice/SearchContractInvoiceAuditList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据合同Id获取合同信息和到账信息 */
export const getContractAndReceiptByContractIdByPost = (params: { id?: string }) =>
  axios.request<ContractInfoAndReceipt_Out>({
    url: `/api/ContractInvoice/GetContractAndReceiptByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同发票申请Id获取合同发票信息和审核信息 */
export const getContractInvoiceAndAuditByContractInvoiceApplIdByPost = (params: { id?: string }) =>
  axios.request<ContractInvoiceAndAudit_Out>({
    url: `/api/ContractInvoice/GetContractInvoiceAndAuditByContractInvoiceApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同发票申请Id获取合同信息和发票信息、发票申请信息 */
export const getContractInfoAndInvoiceInfoByInvoiceApplIdByPost = (params: { id?: string }) =>
  axios.request<ContractInfoAndInvoiceInfo_Out>({
    url: `/api/ContractInvoice/GetContractInfoAndInvoiceInfoByInvoiceApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 发起退票 */
export const initiateContractRefundInvoiceByPost = (params: ContractRefundInvoice_In) =>
  axios.request<any>({
    url: `/api/ContractInvoice/InitiateContractRefundInvoice`,
    method: "post",
    params: {},
    data: params
  });

/** 审核退票信息 */
export const auditContractRefundInvoiceByPost = (params: AuditContractRefundInvoice_In) =>
  axios.request<any>({
    url: `/api/ContractInvoice/AuditContractRefundInvoice`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取合同发票申请列表 */
export const searchContractInvoiceApplListByPost = (params: SearchContractInvoiceApplList_In) =>
  axios.request<SearchContractInvoiceApplList_OutApiTableOut>({
    url: `/api/ContractInvoice/SearchContractInvoiceApplList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据合同发票申请Id获取合同发票申请信息 */
export const getContractInvoiceApplByIdByPost = (params: { id?: string }) =>
  axios.request<GetContractInvoiceAppl_OUT>({
    url: `/api/ContractInvoice/GetContractInvoiceApplById`,
    method: "post",
    params: params,
    data: {}
  });

/** 操作退票 (红冲)上传退票信息 */
export const operateContractRefundInvoiceByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/ContractInvoice/OperateContractRefundInvoice`,
    method: "post",
    params: {},
    data: params
  });

/** 根据退票id获取退票信息 */
export const getContractRefundInvoiceByIdByPost = (params: { id?: string }) =>
  axios.request<ContractRefundInvoice_Out>({
    url: `/api/ContractInvoice/GetContractRefundInvoiceById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同发票申请Id获取合同信息和发票信息、发票申请信息、退票信息 */
export const getContractInfoAndInvoiceInfoAndRefundInvoiceInfoByInvoiceApplIdByPost = (params: { id?: string }) =>
  axios.request<ContractInfoAndInvoiceInfoAndRefundInvoiceInfo_Out>({
    url: `/api/ContractInvoice/GetContractInfoAndInvoiceInfoAndRefundInvoiceInfoByInvoiceApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同发票申请Id获取发票信息、发票申请信息 */
export const getContractInvoiceApplAndInvoiceInfoByInvoiceApplIdByPost = (params: { id?: string }) =>
  axios.request<ContractInvoiceApplAndInvoiceInfo_Out>({
    url: `/api/ContractInvoice/GetContractInvoiceApplAndInvoiceInfoByInvoiceApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据发票申请id获取退票信息列表 */
export const getContractRefundInvoiceListByInvoiceApplIdByPost = (params: { id?: string }) =>
  axios.request<ContractRefundInvoice_Out[]>({
    url: `/api/ContractInvoice/GetContractRefundInvoiceListByInvoiceApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 作废合同发票申请信息，当开票状态为全部开票、部分开票时，可操作。 */
export const voidContractInvoiceApplByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/ContractInvoice/VoidContractInvoiceAppl`,
    method: "post",
    params: params,
    data: {}
  });

/** 撤销合同发票申请信息 */
export const revokeContractInvoiceApplByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/ContractInvoice/RevokeContractInvoiceAppl`,
    method: "post",
    params: params,
    data: {}
  });

/** 撤销合同发票提交申请信息 */
export const revokeContractInvoiceApplSubmitByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/ContractInvoice/RevokeContractInvoiceApplSubmit`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同id获取已开票金额 */
export const getInvoicedAmountByContractIdByPost = (params: { id?: string }) =>
  axios.request<number>({
    url: `/api/ContractInvoice/GetInvoicedAmountByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 删除合同发票申请信息，当开票状态为草稿、作废、拒绝时，可删除。 */
export const deleteContractInvoiceApplByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/ContractInvoice/DeleteContractInvoiceAppl`,
    method: "post",
    params: params,
    data: {}
  });

/** 催票，当开票状态为申请时，可操作。 */
export const reminderContractInvoiceApplByPost = (params: ReminderContractInvoiceAppl_IN) =>
  axios.request<any>({
    url: `/api/ContractInvoice/ReminderContractInvoiceAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 确认签收，当开票状态为全部开票、部分开票时，可操作 */
export const signReceivingContractInvoiceApplByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/ContractInvoice/SignReceivingContractInvoiceAppl`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同发票申请Id获取发票信息、发票申请信息、退票信息 */
export const getContractInvoiceInfoAndRefundInvoiceInfoByInvoiceApplIdByPost = (params: { id?: string }) =>
  axios.request<ContractInvoiceInfoAndRefundInvoiceInfo_Out>({
    url: `/api/ContractInvoice/GetContractInvoiceInfoAndRefundInvoiceInfoByInvoiceApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同发票申请Id获取发票的发票编号信息 */
export const getInvoiceInfoByInvoiceApplIdByPost = (params: { invoiceApplId?: string }) =>
  axios.request<GetOriginalInvoiceList_Out[]>({
    url: `/api/ContractInvoice/GetInvoiceInfoByInvoiceApplId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id获取发票信息 */
export const getInvoiceInfoByContractIdByPost = (params: { contractId?: string }) =>
  axios.request<InvoiceInfo_Out[]>({
    url: `/api/ContractInvoice/GetInvoiceInfoByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id和开票时间获取发票信息列表 */
export const getContractInvoiceListByContractIdByPost = (params: ContractInvoiceList_In) =>
  axios.request<ContractInvoiceList_OutApiTableOut>({
    url: `/api/ContractInvoice/GetContractInvoiceListByContractId`,
    method: "post",
    params: {},
    data: params
  });

/** 根据客户Id和开票时间获取发票信息列表 */
export const getContractInvoiceListByCustomerIdByPost = (params: ContractInvoiceList_CustomerId_In) =>
  axios.request<ContractInvoiceList_OutApiTableOut>({
    url: `/api/ContractInvoice/GetContractInvoiceListByCustomerId`,
    method: "post",
    params: {},
    data: params
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/ContractInvoice/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });