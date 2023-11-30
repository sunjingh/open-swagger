/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger-core
 * @see https://www.npmjs.com/package/free-swagger
 * @title Crm2所有接口
 * @description 所有api
 * @fileDescription 组织控制器
 * @version v1
}
**/

import axios from "axios";

/**
 * @description 添加组织信息
 * @param {AddOrganization_In} params
 **/
export const addOrganizationByPost = (params) =>
  axios.request({
    url: `/api/Organization/AddOrganization`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 修改组织信息
 * @param {UpdateOrganization_In} params
 **/
export const updateOrganizationByPost = (params) =>
  axios.request({
    url: `/api/Organization/UpdateOrganization`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 删除组织信息
 * @param {Object} params
 * @param {string} params.Ids
 **/
export const deleteOrganizationByPost = (params) =>
  axios.request({
    url: `/api/Organization/DeleteOrganization`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 修改组织状态信息
 * @param {UpdateOrganizationStatus_In} params
 **/
export const updateOrganizationStatusByPost = (params) =>
  axios.request({
    url: `/api/Organization/UpdateOrganizationStatus`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 检查组织下是否存在启用状态的员工信息
 * @param {Object} params
 * @param {string} params.Ids
 **/
export const checkOrganizationEnableUserByPost = (params) =>
  axios.request({
    url: `/api/Organization/CheckOrganizationEnableUser`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 组织合并
 * @param {MergeOrganization_In} params
 **/
export const mergeOrganizationByPost = (params) =>
  axios.request({
    url: `/api/Organization/MergeOrganization`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 组织插入
 * @param {InsertOrganization_In} params
 **/
export const insertOrganizationByPost = (params) =>
  axios.request({
    url: `/api/Organization/InsertOrganization`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据组织Id获取组织信息
 * @param {Object} params
 * @param {string} params.Id
 **/
export const getOrganizationByIdByPost = (params) =>
  axios.request({
    url: `/api/Organization/GetOrganizationById`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据查询条件获取组织信息列表
 * @param {SearchOrganizationList_In} params
 **/
export const searchOrganizationListByPost = (params) =>
  axios.request({
    url: `/api/Organization/SearchOrganizationList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据组织Id获取下级组织信息列表
 * @param {GetSubOrganizationById_In} params
 **/
export const getSubOrganizationByIdByPost = (params) =>
  axios.request({
    url: `/api/Organization/GetSubOrganizationById`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据团队类型获取组织信息列表
 * @param {GetOrganizationByOrgType_In} params
 **/
export const getOrganizationByOrgTypeByPost = (params) =>
  axios.request({
    url: `/api/Organization/GetOrganizationByOrgType`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据组织Id获取当前组织下员工信息列表
 * @param {GetOrganizationUserById_In} params
 **/
export const getOrganizationUserByIdByPost = (params) =>
  axios.request({
    url: `/api/Organization/GetOrganizationUserById`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 获取系统中的组织机构树
 **/
export const getOrganizationTreeByPost = () =>
  axios.request({
    url: `/api/Organization/GetOrganizationTree`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 获取系统中的组织机构[携带用户]树
 **/
export const getOrganizationWithUserTreeByPost = () =>
  axios.request({
    url: `/api/Organization/GetOrganizationWithUserTree`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 获取传入组织Id所在分支的树结构
 * @param {Object} params
 * @param {string} params.Id
 **/
export const getChildOrgListByPost = (params) =>
  axios.request({
    url: `/api/Organization/GetChildOrgList`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 获取登录人的当前组织及下级组织树结构
 **/
export const getSelfAndChildOrgListByPost = () =>
  axios.request({
    url: `/api/Organization/GetSelfAndChildOrgList`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 获取录人的当前组织及下级组织[携带用户]树
 **/
export const getSelfAndChildOrgWithUserTreeByPost = () =>
  axios.request({
    url: `/api/Organization/GetSelfAndChildOrgWithUserTree`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 员工管理页面用 获取系统中的组织机构[携带用户(含组织名称及可保留客户数)]树
 **/
export const getOrgTreeWithUserMaxSaveCustomerByPost = () =>
  axios.request({
    url: `/api/Organization/GetOrgTreeWithUserMaxSaveCustomer`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Organization/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
