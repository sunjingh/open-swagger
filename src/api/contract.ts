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
  AuditContract_In,
  ContractBasicInfo_Out,
  ContractAuditInfo_Out,
  SearchContractList_In,
  SearchContractList_OutApiTableOut,
  RecoveryContract_In,
  ConfirmContract_In,
  AddContractProductServiceInfoGtisAppl_In,
  ContractProductServiceInfoGtisAppl_Out,
  AddContractProductServiceInfoDBAppl_In,
  ContractProductServiceInfoDBAppl_Out,
  AddContractProductServiceInfoCollegeAppl_In,
  ContractProductServiceInfoCollegeAppl_Out,
  AddContractProductServiceInfoGlobalSearchAppl_In,
  ContractProductServiceInfoGlobalSearchAppl_Out,
  AddContractProductServiceInfoOtherDataAppl_In,
  ContractProductServiceInfoOtherDataAppl_Out,
  AddContractProductServiceInfoProjectAppl_In,
  ContractProductServiceInfoProjectAppl_Out,
  ContractPaymentInfo_Out,
  ProductInfo_Out,
  ContractProjectInfo_Out,
  AddContractProductServiceInfoAppl_In,
  UpdateContractProductServiceInfoGtisAppl_In,
  UpdateContractProductServiceInfoGlobalSearchAppl_In,
  UpdateContractProductServiceInfoProjectAppl_In,
  UpdateContractProductServiceInfoOtherDataAppl_In,
  UpdateContractProductServiceInfoCollegeAppl_In,
  UpdateContractProductServiceInfoDBAppl_In,
  ProductInfoAudit_Out,
  SearchContractBasicInfoList_In,
  SearchContractBasicInfoList_OutApiTableOut,
  SearchRegisterContractBasicInfoList_In,
  SearchContractChangeAppl_IN,
  SearchContractChangeAppl_OUTApiTableOut,
  ContractChangeAppl_OUT,
  AuditContractChangeAppl_IN,
  RevokeContractChangeAudit_IN,
  GetContractChangeColumns_OUT,
  CheckUploadContract_Out,
  GetContractByCustomerId_In,
  GetContractByCustomerId_OutApiTableOut,
  GetContractInfoRecords_In,
  GetContractInfoRecords_Out,
  GetContractAuditByContractIdIn,
  GetContractAuditByContractId_OutApiTableOut,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 复制合同信息 */
export const copyContractByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/Contract/CopyContract`,
    method: "post",
    params: {},
    data: params
  });

/** 添加合同信息 */
export const addContractByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/Contract/AddContract`,
    method: "post",
    params: {},
    data: params
  });

/** 审核合同信息 */
export const auditContractByPost = (params: AuditContract_In) =>
  axios.request<any>({
    url: `/api/Contract/AuditContract`,
    method: "post",
    params: {},
    data: params
  });

/** 修改合同信息 */
export const updateContractByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/Contract/UpdateContract`,
    method: "post",
    params: {},
    data: params
  });

/** 删除合同信息，在合同状态为草稿、拒绝、作废时，合同可删除。 */
export const deleteContractByPost = (params: { ids?: string }) =>
  axios.request<any>({
    url: `/api/Contract/DeleteContract`,
    method: "post",
    params: params,
    data: {}
  });

/** 作废合同信息，在合同状态为已提交、通过时，可作废。 */
export const voidContractByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/Contract/VoidContract`,
    method: "post",
    params: params,
    data: {}
  });

/** 撤销合同信息，在合同状态为已提交、通过时，才可撤销。 */
export const revokeContractByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/Contract/RevokeContract`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id获取合同基本信息 */
export const getContractBasicInfoByIdByPost = (params: { id?: string }) =>
  axios.request<ContractBasicInfo_Out>({
    url: `/api/Contract/GetContractBasicInfoById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id获取合同审核信息 */
export const getContractAuditInfoByContractIdByPost = (params: { contractId?: string }) =>
  axios.request<ContractAuditInfo_Out>({
    url: `/api/Contract/GetContractAuditInfoByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id获取合同审核历史信息 */
export const getContractAuditHistoryInfoByContractIdByPost = (params: { contractId?: string }) =>
  axios.request<ContractAuditInfo_Out>({
    url: `/api/Contract/GetContractAuditHistoryInfoByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据查询条件获取销售合同列表。 */
export const searchContractListByPost = (params: SearchContractList_In) =>
  axios.request<SearchContractList_OutApiTableOut>({
    url: `/api/Contract/SearchContractList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取销售合同审核列表。 */
export const searchContractAuditListByPost = (params: SearchContractList_In) =>
  axios.request<SearchContractList_OutApiTableOut>({
    url: `/api/Contract/SearchContractAuditList`,
    method: "post",
    params: {},
    data: params
  });

/** 回收合同信息，在合同状态为（跟踪状态）签约、作废、退款时，才可回收合同。验证数据权限（合同创建者处理）。合同类型为纸质合同才存在回收，电子合同不需要回收。 */
export const recoveryContractByPost = (params: RecoveryContract_In) =>
  axios.request<any>({
    url: `/api/Contract/RecoveryContract`,
    method: "post",
    params: {},
    data: params
  });

/** 确认合同信息 */
export const confirmContractByPost = (params: ConfirmContract_In) =>
  axios.request<any>({
    url: `/api/Contract/ConfirmContract`,
    method: "post",
    params: {},
    data: params
  });

/** 添加合同服务信息环球慧思申请信息 */
export const addContractProductServiceInfoGtisApplByPost = (params: AddContractProductServiceInfoGtisAppl_In) =>
  axios.request<any>({
    url: `/api/Contract/AddContractProductServiceInfoGtisAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务信息环球慧思申请信息 */
export const getContractProductServiceInfoGtisApplByIdByPost = (params: { id?: string }) =>
  axios.request<ContractProductServiceInfoGtisAppl_Out>({
    url: `/api/Contract/GetContractProductServiceInfoGtisApplById`,
    method: "post",
    params: params,
    data: {}
  });

/** 添加合同服务信息邓白氏申请信息 */
export const addContractProductServiceInfoDbApplByPost = (params: AddContractProductServiceInfoDBAppl_In) =>
  axios.request<any>({
    url: `/api/Contract/AddContractProductServiceInfoDBAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务信息邓白氏申请信息 */
export const getContractProductServiceInfoDbApplByIdByPost = (params: { id?: string }) =>
  axios.request<ContractProductServiceInfoDBAppl_Out>({
    url: `/api/Contract/GetContractProductServiceInfoDBApplById`,
    method: "post",
    params: params,
    data: {}
  });

/** 添加合同服务信息慧思学院申请信息 */
export const addContractProductServiceInfoCollegeApplByPost = (params: AddContractProductServiceInfoCollegeAppl_In) =>
  axios.request<any>({
    url: `/api/Contract/AddContractProductServiceInfoCollegeAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务信息慧思学院申请信息 */
export const getContractProductServiceInfoCollegeApplByIdByPost = (params: { id?: string }) =>
  axios.request<ContractProductServiceInfoCollegeAppl_Out>({
    url: `/api/Contract/GetContractProductServiceInfoCollegeApplById`,
    method: "post",
    params: params,
    data: {}
  });

/** 添加合同服务信息环球搜申请信息 */
export const addContractProductServiceInfoGlobalSearchApplByPost = (
  params: AddContractProductServiceInfoGlobalSearchAppl_In
) =>
  axios.request<any>({
    url: `/api/Contract/AddContractProductServiceInfoGlobalSearchAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务信息环球搜申请信息 */
export const getContractProductServiceInfoGlobalSearchApplByIdByPost = (params: { id?: string }) =>
  axios.request<ContractProductServiceInfoGlobalSearchAppl_Out>({
    url: `/api/Contract/GetContractProductServiceInfoGlobalSearchApplById`,
    method: "post",
    params: params,
    data: {}
  });

/** 添加合同服务信息其他数据申请信息 */
export const addContractProductServiceInfoOtherDataApplByPost = (
  params: AddContractProductServiceInfoOtherDataAppl_In
) =>
  axios.request<any>({
    url: `/api/Contract/AddContractProductServiceInfoOtherDataAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务信息其他数据申请信息 */
export const getContractProductServiceInfoOtherDataApplByIdByPost = (params: { id?: string }) =>
  axios.request<ContractProductServiceInfoOtherDataAppl_Out>({
    url: `/api/Contract/GetContractProductServiceInfoOtherDataApplById`,
    method: "post",
    params: params,
    data: {}
  });

/** 添加合同服务信息项目信息申请信息 */
export const addContractProductServiceInfoProjectApplByPost = (params: AddContractProductServiceInfoProjectAppl_In) =>
  axios.request<any>({
    url: `/api/Contract/AddContractProductServiceInfoProjectAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据申请id获取合同服务信息项目信息申请信息 */
export const getContractProductServiceInfoProjectApplByIdByPost = (params: { id?: string }) =>
  axios.request<ContractProductServiceInfoProjectAppl_Out>({
    url: `/api/Contract/GetContractProductServiceInfoProjectApplById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id获取合同支付信息 */
export const getContractPaymentInfoByContractIdByPost = (params: { contractId?: string }) =>
  axios.request<ContractPaymentInfo_Out>({
    url: `/api/Contract/GetContractPaymentInfoByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id获取合同产品信息 */
export const getContractProductInfoByContractIdByPost = (params: { contractId?: string }) =>
  axios.request<ProductInfo_Out[]>({
    url: `/api/Contract/GetContractProductInfoByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据合同Id获取合同项目信息 */
export const getContractProjectInfoByContractIdByPost = (params: { contractId?: string }) =>
  axios.request<ContractProjectInfo_Out[]>({
    url: `/api/Contract/GetContractProjectInfoByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 添加合同服务信息 */
export const addContractProductServiceInfoApplByPost = (params: AddContractProductServiceInfoAppl_In) =>
  axios.request<any>({
    url: `/api/Contract/AddContractProductServiceInfoAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据合同Id获取合同已开通服务信息 */
export const getContractServiceInfoByPost = (params: { contractId?: string }) =>
  axios.request<ProductInfo_Out[]>({
    url: `/api/Contract/GetContractServiceInfo`,
    method: "post",
    params: params,
    data: {}
  });

/** 变更合同服务信息环球慧思申请信息 */
export const updateContractProductServiceInfoGtisApplByPost = (params: UpdateContractProductServiceInfoGtisAppl_In) =>
  axios.request<any>({
    url: `/api/Contract/UpdateContractProductServiceInfoGtisAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 变更合同服务信息环球搜申请信息 */
export const updateContractProductServiceInfoGlobalSearchApplByPost = (
  params: UpdateContractProductServiceInfoGlobalSearchAppl_In
) =>
  axios.request<any>({
    url: `/api/Contract/UpdateContractProductServiceInfoGlobalSearchAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 变更合同服务信息项目信息申请信息 */
export const updateContractProductServiceInfoProjectApplByPost = (
  params: UpdateContractProductServiceInfoProjectAppl_In
) =>
  axios.request<any>({
    url: `/api/Contract/UpdateContractProductServiceInfoProjectAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 变更合同服务信息其他数据申请信息 */
export const updateContractProductServiceInfoOtherDataApplByPost = (
  params: UpdateContractProductServiceInfoOtherDataAppl_In
) =>
  axios.request<any>({
    url: `/api/Contract/UpdateContractProductServiceInfoOtherDataAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 变更合同服务信息慧思学院申请信息 */
export const updateContractProductServiceInfoCollegeApplByPost = (
  params: UpdateContractProductServiceInfoCollegeAppl_In
) =>
  axios.request<any>({
    url: `/api/Contract/UpdateContractProductServiceInfoCollegeAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 变更合同服务信息邓白氏申请信息 */
export const updateContractProductServiceInfoDbApplByPost = (params: UpdateContractProductServiceInfoDBAppl_In) =>
  axios.request<any>({
    url: `/api/Contract/UpdateContractProductServiceInfoDBAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据合同Id获取合同产品审核信息 */
export const getContractProductInfoAuditByContractIdByPost = (params: { contractId?: string }) =>
  axios.request<ProductInfoAudit_Out[]>({
    url: `/api/Contract/GetContractProductInfoAuditByContractId`,
    method: "post",
    params: params,
    data: {}
  });

/** 添加合同信息变更申请信息 */
export const addContractChangeApplByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/Contract/AddContractChangeAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取销售合同基本信息列表。 */
export const searchContractBasicInfoListByPost = (params: SearchContractBasicInfoList_In) =>
  axios.request<SearchContractBasicInfoList_OutApiTableOut>({
    url: `/api/Contract/SearchContractBasicInfoList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取到账登记销售合同基本信息列表 */
export const searchRegisterContractBasicInfoListByPost = (params: SearchRegisterContractBasicInfoList_In) =>
  axios.request<SearchContractBasicInfoList_OutApiTableOut>({
    url: `/api/Contract/SearchRegisterContractBasicInfoList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取合同变更申请信息列表 */
export const searchContractChangeApplListByPost = (params: SearchContractChangeAppl_IN) =>
  axios.request<SearchContractChangeAppl_OUTApiTableOut>({
    url: `/api/Contract/SearchContractChangeApplList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据合同变更Id获取合同变更信息 */
export const getContractChangeApplByIdByPost = (params: { auditId?: string }) =>
  axios.request<ContractChangeAppl_OUT>({
    url: `/api/Contract/GetContractChangeApplById`,
    method: "post",
    params: params,
    data: {}
  });

/** 审核合同变更申请信息 */
export const auditContractChangeApplByPost = (params: AuditContractChangeAppl_IN) =>
  axios.request<any>({
    url: `/api/Contract/AuditContractChangeAppl`,
    method: "post",
    params: {},
    data: params
  });

/** 撤销合同变更申请审核信息 */
export const revokeContractChangeAuditByPost = (params: RevokeContractChangeAudit_IN) =>
  axios.request<any>({
    url: `/api/Contract/RevokeContractChangeAudit`,
    method: "post",
    params: {},
    data: params
  });

/** 获取合同可变更字段列表 */
export const getContractChangeColumnsByPost = () =>
  axios.request<GetContractChangeColumns_OUT[]>({
    url: `/api/Contract/GetContractChangeColumns`,
    method: "post",
    params: {},
    data: {}
  });

/** 验证合同状态为通过 */
export const checkContractStateByPost = (params: { contractId?: string }) =>
  axios.request<any>({
    url: `/api/Contract/CheckContractState`,
    method: "post",
    params: params,
    data: {}
  });

/** 设置合同催单 */
export const addUrgeRegistrationByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/Contract/AddUrgeRegistration`,
    method: "post",
    params: {},
    data: params
  });

/** 检测上传已盖章合同 */
export const checkUploadContractByPost = (params: { contractId?: string }) =>
  axios.request<CheckUploadContract_Out>({
    url: `/api/Contract/CheckUploadContract`,
    method: "post",
    params: params,
    data: {}
  });

/** 上传已盖章合同 */
export const uploadContractByPost = (params: FormData) =>
  axios.request<any>({
    url: `/api/Contract/UploadContract`,
    method: "post",
    params: {},
    data: params
  });

/** 获取合同开通服务数量 */
export const contractProductServiceInfoOpenedNumByPost = (params: { contractId?: string }) =>
  axios.request<number>({
    url: `/api/Contract/ContractProductServiceInfoOpenedNum`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据客户id和签约日期获取合同信息 */
export const getContractByCustomerIdByPost = (params: GetContractByCustomerId_In) =>
  axios.request<GetContractByCustomerId_OutApiTableOut>({
    url: `/api/Contract/GetContractByCustomerId`,
    method: "post",
    params: {},
    data: params
  });

/** 下载合同 */
export const downloadContractByPost = (params: { contractId?: string; type?: number }) =>
  axios.request<any>({
    url: `/api/Contract/DownloadContract`,
    method: "post",
    params: params,
    data: {}
  });

/** 合同详情 - 相关记录 */
export const getContractInfoRecordsByPost = (params: GetContractInfoRecords_In) =>
  axios.request<GetContractInfoRecords_Out[]>({
    url: `/api/Contract/GetContractInfoRecords`,
    method: "post",
    params: {},
    data: params
  });

/** 根据合同id获取合同审核信息 */
export const getContractAuditByContractIdByPost = (params: GetContractAuditByContractIdIn) =>
  axios.request<GetContractAuditByContractId_OutApiTableOut>({
    url: `/api/Contract/GetContractAuditByContractId`,
    method: "post",
    params: {},
    data: params
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/Contract/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });