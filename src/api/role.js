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
 * @description 添加角色信息
 * @param {AddRole_In} params
 **/
export const addRoleByPost = (params) =>
  axios.request({
    url: `/api/Role/AddRole`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 修改角色信息
 * @param {UpdateRole_In} params
 **/
export const updateRoleByPost = (params) =>
  axios.request({
    url: `/api/Role/UpdateRole`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 删除角色信息
 * @param {Object} params
 * @param {string} params.Ids
 **/
export const deleteRoleByPost = (params) =>
  axios.request({
    url: `/api/Role/DeleteRole`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 修改角色状态信息
 * @param {UpdateRoleStatusIn} params
 **/
export const updateRoleStatusByPost = (params) =>
  axios.request({
    url: `/api/Role/UpdateRoleStatus`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据角色Id获取角色信息
 * @param {Object} params
 * @param {string} params.Id
 **/
export const getRoleByIdByPost = (params) =>
  axios.request({
    url: `/api/Role/GetRoleById`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据角色获取绑定人员列表--分页
 * @param {GetRoleBindingUsers_In} params
 **/
export const getRoleBindingUsersByPost = (params) =>
  axios.request({
    url: `/api/Role/GetRoleBindingUsers`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据查询条件获取角色信息列表
 * @param {SearchRoleList_In} params
 **/
export const searchRoleListByPost = (params) =>
  axios.request({
    url: `/api/Role/SearchRoleList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 获取当前所有可用角色
 **/
export const getRoleListByPost = () =>
  axios.request({
    url: `/api/Role/GetRoleList`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 返回当前系统功能信息，只返回类型为菜单(模块、表单)、列表、列、按钮的数据。
 **/
export const getFormListByPost = () =>
  axios.request({
    url: `/api/Role/GetFormList`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 根据用户Id获取用户拥有的功能信息，只返回类型为菜单(模块、表单)、列表、列、按钮的数据,全部获取然后前台判断。
 * @param {Object} params
 * @param {string} params.UserId
 **/
export const getFormByUserIdByPost = (params) =>
  axios.request({
    url: `/api/Role/GetFormByUserId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 根据用户Id和父级节点和类型获取用户拥有的功能信息，只返回类型为菜单(模块、表单)、列表、列、按钮的数据，前台一页一判断和GetFormByUserId类似。
 * @param {GetFormByUserIdAndParentId_In} params
 **/
export const getFormByUserIdAndParentIdByPost = (params) =>
  axios.request({
    url: `/api/Role/GetFormByUserIdAndParentId`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Role/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
