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
  ContractServiceInfoTemporaryAccount_IN,
  DelayContractServiceInfoTemporaryAccountList_Out,
  SearchContractServiceInfoTemporaryAccountList_In,
  SearchContractServiceInfoTemporaryAccountList_OutApiTableOut,
  ContractServiceInfoTemporaryAccount_Out,
  PrivateCustomerInfo,
  TemporaryAccountUser,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** GTIS临时账号创建 */
export const addContractServiceInfoTemporaryAccountByPost = (params: ContractServiceInfoTemporaryAccount_IN) =>
  axios.request<any>({
    url: `/api/ContractServiceInfo/AddContractServiceInfoTemporaryAccount`,
    method: "post",
    params: {},
    data: params
  });

/** 删除临时账号信息 */
export const deleteContractServiceInfoTemporaryAccountByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/ContractServiceInfo/DeleteContractServiceInfoTemporaryAccount`,
    method: "post",
    params: params,
    data: {}
  });

/** 变更合同服务信息临时账号状态信息 */
export const updateContractServiceInfoTemporaryAccountStateByPost = (params: { id?: string; state?: number }) =>
  axios.request<any>({
    url: `/api/ContractServiceInfo/UpdateContractServiceInfoTemporaryAccountState`,
    method: "post",
    params: params,
    data: {}
  });

/** 延期合同服务信息临时账号信息 */
export const delayContractServiceInfoTemporaryAccountByPost = (params: { id?: string; duration?: number }) =>
  axios.request<any>({
    url: `/api/ContractServiceInfo/DelayContractServiceInfoTemporaryAccount`,
    method: "post",
    params: params,
    data: {}
  });

/** 获取延期合同服务信息临时账号信息 */
export const getDelayContractServiceInfoTemporaryAccountListByIdByPost = (params: { id?: string }) =>
  axios.request<DelayContractServiceInfoTemporaryAccountList_Out[]>({
    url: `/api/ContractServiceInfo/GetDelayContractServiceInfoTemporaryAccountListById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据查询条件获取合同服务信息临时账号信息列表 */
export const searchContractServiceInfoTemporaryAccountListByPost = (
  params: SearchContractServiceInfoTemporaryAccountList_In
) =>
  axios.request<SearchContractServiceInfoTemporaryAccountList_OutApiTableOut>({
    url: `/api/ContractServiceInfo/SearchContractServiceInfoTemporaryAccountList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据Id获取合同服务信息临时账号信息 */
export const getContractServiceInfoTemporaryAccountByIdByPost = (params: { id?: string }) =>
  axios.request<ContractServiceInfoTemporaryAccount_Out>({
    url: `/api/ContractServiceInfo/GetContractServiceInfoTemporaryAccountById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据客户名称获取用户私有池客户信息 */
export const getPrivateCustomerInfoByPost = (params: { customerName?: string }) =>
  axios.request<PrivateCustomerInfo[]>({
    url: `/api/ContractServiceInfo/GetPrivateCustomerInfo`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据临时账号Id获取合同服务信息临时账号用户信息 */
export const getTemporaryAccountUserByTemporaryAccountIdByPost = (params: { serviceInfoTemporaryAccountID?: string }) =>
  axios.request<TemporaryAccountUser[]>({
    url: `/api/ContractServiceInfo/GetTemporaryAccountUserByTemporaryAccountID`,
    method: "post",
    params: params,
    data: {}
  });

/** 获取当天开通演示账号剩余个数 */
export const getContractServiceInfoTemporaryAccountLeftOpenTimesByPost = () =>
  axios.request<number>({
    url: `/api/ContractServiceInfo/GetContractServiceInfoTemporaryAccountLeftOpenTimes`,
    method: "post",
    params: {},
    data: {}
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/ContractServiceInfo/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
