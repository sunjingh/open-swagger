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
 * @description 添加合同发票开票明细信息
 * @param {AddInvoicingDetails_In[]} params
 **/
export const addInvoicingDetailsByPost = (params) =>
  axios.request({
    url: `/api/ContractInvoicingDetails/AddInvoicingDetails`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 获取合同发票开票明细信息
 **/
export const getInvoicingDetailsByPost = () =>
  axios.request({
    url: `/api/ContractInvoicingDetails/GetInvoicingDetails`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 获取合同发票开票明细信息全部包含删除
 **/
export const getInvoicingDetailsAllByPost = () =>
  axios.request({
    url: `/api/ContractInvoicingDetails/GetInvoicingDetailsAll`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 删除合同发票开票明细信息
 * @param {Object} params
 * @param {string} params.id
 **/
export const deleteInvoicingDetailsByPost = (params) =>
  axios.request({
    url: `/api/ContractInvoicingDetails/DeleteInvoicingDetails`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/ContractInvoicingDetails/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
