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
  AddOriginalInvoice_In,
  UpdateOriginalInvoice_In,
  SearchOriginalInvoiceList_In,
  SearchOriginalInvoiceList_OutApiTableOut,
  GetOriginalInvoiceById_Out,
  GetContractAndInvoiceByOriginalInvoiceId_In,
  GetContractAndInvoiceByOriginalInvoiceId_OutApiTableOut,
  GetOriginalInvoiceList_In,
  GetOriginalInvoiceList_Out,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 添加发票原件信息 */
export const addOriginalInvoiceByPost = (params: AddOriginalInvoice_In) =>
  axios.request<any>({
    url: `/api/OriginalInvoice/AddOriginalInvoice`,
    method: "post",
    params: {},
    data: params
  });

/** 修改发票原件信息 */
export const updateOriginalInvoiceByPost = (params: UpdateOriginalInvoice_In) =>
  axios.request<any>({
    url: `/api/OriginalInvoice/UpdateOriginalInvoice`,
    method: "post",
    params: {},
    data: params
  });

/** 删除发票原件信息 */
export const deleteOriginalInvoiceByPost = (params: { Ids?: string }) =>
  axios.request<any>({
    url: `/api/OriginalInvoice/DeleteOriginalInvoice`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据查询条件获取发票原件信息列表 */
export const searchOriginalInvoiceListByPost = (params: SearchOriginalInvoiceList_In) =>
  axios.request<SearchOriginalInvoiceList_OutApiTableOut>({
    url: `/api/OriginalInvoice/SearchOriginalInvoiceList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据id获取发票原件信息列表 */
export const getOriginalInvoiceByIdByPost = (params: { Id?: string }) =>
  axios.request<GetOriginalInvoiceById_Out>({
    url: `/api/OriginalInvoice/GetOriginalInvoiceById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据发票原件信息id获取合同和发票信息列表 */
export const getContractAndInvoiceByOriginalInvoiceIdByPost = (params: GetContractAndInvoiceByOriginalInvoiceId_In) =>
  axios.request<GetContractAndInvoiceByOriginalInvoiceId_OutApiTableOut>({
    url: `/api/OriginalInvoice/GetContractAndInvoiceByOriginalInvoiceId`,
    method: "post",
    params: {},
    data: params
  });

/** 根据开票公司、发票类型、发票形式获取未使用的发票实体，无分页 */
export const getOriginalInvoiceListByPost = (params: GetOriginalInvoiceList_In) =>
  axios.request<GetOriginalInvoiceList_Out[]>({
    url: `/api/OriginalInvoice/GetOriginalInvoiceList`,
    method: "post",
    params: {},
    data: params
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/OriginalInvoice/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
