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
 * @description 根据查询条件获取产品列表。
 * @param {SearchProductList_In} params
 **/
export const searchProductListByPost = (params) =>
  axios.request({
    url: `/api/Product/SearchProductList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据产品Id获取产品信息。
 * @param {ProductParameter_In} params
 **/
export const getProductByIdByPost = (params) =>
  axios.request({
    url: `/api/Product/GetProductById`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据查询条件获取产品信息，状态为启用的产品信息。
 * @param {GetProductList_In} params
 **/
export const getProductListByPost = (params) =>
  axios.request({
    url: `/api/Product/GetProductList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 修改产品状态信息，变更产品状态为启用、停用，多条记录全部执行成功则返回成功，否则返回失败
 * @param {ProductParameter_In} params
 **/
export const updateProductStateByPost = (params) =>
  axios.request({
    url: `/api/Product/UpdateProductState`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 删除产品信息，当产品状态为停用、草稿时，可删除。验证数据权限。只做逻辑删除，修改Deleted字段为1。
 * @param {ProductParameter_In} params
 **/
export const deleteProductByPost = (params) =>
  axios.request({
    url: `/api/Product/DeleteProduct`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 添加产品信息。保存草稿：添加产品信息，状态为草稿。新建：添加产品信息，状态为启用。
 * @param {AddProduct_In} params
 **/
export const addProductByPost = (params) =>
  axios.request({
    url: `/api/Product/AddProduct`,
    method: "post",
    params: {},
    data: params
  });

/** 
 * @description 修改产品信息。保存草稿：修改产品信息，状态为草稿。新建：修改产品信息，状态为启用。
表名:Crm_Product 产品表。表名:Crm_Product_Price 产品价格表。表名:Crm_Product_Combination 产品组合表。
（修改应不改变产品状态，所以应该只有一个提交按钮。）只可在产品状态为草稿、停用时修改产品信息。 
 * @param {UpdateProduct_In} params    
**/
export const updateProductByPost = (params) =>
  axios.request({
    url: `/api/Product/UpdateProduct`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据ProductType获取计费参数详情
 * @param {Object} params
 * @param {number} params.ProductType
 **/
export const getProductChargingParametersByProductTypeByPost = (params) =>
  axios.request({
    url: `/api/Product/GetProductChargingParametersByProductType`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 获取产品列表用于下拉菜单，无筛选条件
 **/
export const getProductNameListNoConditionByPost = () =>
  axios.request({
    url: `/api/Product/GetProductNameListNoCondition`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 返回推荐产品剩余数量，最大为3
 **/
export const getIsRecommendCountByGet = () =>
  axios.request({
    url: `/api/Product/GetIsRecommendCount`,
    method: "get",
    params: {},
    data: {}
  });

/**
 * @description
 **/
export const testObjectByPost = () =>
  axios.request({
    url: `/api/Product/TestObject`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Product/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
