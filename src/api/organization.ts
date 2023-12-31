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

import {
  AddOrganization_In,
  UpdateOrganization_In,
  UpdateOrganizationStatus_In,
  CheckOrgEnableUser_Out,
  MergeOrganization_In,
  InsertOrganization_In,
  GetOrganizationById_Out,
  SearchOrganizationList_In,
  SearchOrganizationList_OutApiTableOut,
  GetSubOrganizationById_In,
  GetSubOrganizationById_OutApiTableOut,
  GetOrganizationByOrgType_In,
  GetOrganizationByOrgType_Out,
  GetOrganizationUserById_In,
  GetOrganizationUserById_OutApiTableOut,
  GetOrganizationTree_Out,
  GetOrganizationWithUserTree_Out,
  SysOrganizationTree,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 添加组织信息 */
export const addOrganizationByPost = (params: AddOrganization_In) =>
  axios.request<any>({
    url: `/api/Organization/AddOrganization`,
    method: "post",
    params: {},
    data: params
  });

/** 修改组织信息 */
export const updateOrganizationByPost = (params: UpdateOrganization_In) =>
  axios.request<any>({
    url: `/api/Organization/UpdateOrganization`,
    method: "post",
    params: {},
    data: params
  });

/** 删除组织信息 */
export const deleteOrganizationByPost = (params: { Ids?: string }) =>
  axios.request<any>({
    url: `/api/Organization/DeleteOrganization`,
    method: "post",
    params: params,
    data: {}
  });

/** 修改组织状态信息 */
export const updateOrganizationStatusByPost = (params: UpdateOrganizationStatus_In) =>
  axios.request<any>({
    url: `/api/Organization/UpdateOrganizationStatus`,
    method: "post",
    params: {},
    data: params
  });

/** 检查组织下是否存在启用状态的员工信息 */
export const checkOrganizationEnableUserByPost = (params: { Ids?: string }) =>
  axios.request<CheckOrgEnableUser_Out[]>({
    url: `/api/Organization/CheckOrganizationEnableUser`,
    method: "post",
    params: params,
    data: {}
  });

/** 组织合并 */
export const mergeOrganizationByPost = (params: MergeOrganization_In) =>
  axios.request<any>({
    url: `/api/Organization/MergeOrganization`,
    method: "post",
    params: {},
    data: params
  });

/** 组织插入 */
export const insertOrganizationByPost = (params: InsertOrganization_In) =>
  axios.request<any>({
    url: `/api/Organization/InsertOrganization`,
    method: "post",
    params: {},
    data: params
  });

/** 根据组织Id获取组织信息 */
export const getOrganizationByIdByPost = (params: { Id?: string }) =>
  axios.request<GetOrganizationById_Out>({
    url: `/api/Organization/GetOrganizationById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据查询条件获取组织信息列表 */
export const searchOrganizationListByPost = (params: SearchOrganizationList_In) =>
  axios.request<SearchOrganizationList_OutApiTableOut>({
    url: `/api/Organization/SearchOrganizationList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据组织Id获取下级组织信息列表 */
export const getSubOrganizationByIdByPost = (params: GetSubOrganizationById_In) =>
  axios.request<GetSubOrganizationById_OutApiTableOut>({
    url: `/api/Organization/GetSubOrganizationById`,
    method: "post",
    params: {},
    data: params
  });

/** 根据团队类型获取组织信息列表 */
export const getOrganizationByOrgTypeByPost = (params: GetOrganizationByOrgType_In) =>
  axios.request<GetOrganizationByOrgType_Out[]>({
    url: `/api/Organization/GetOrganizationByOrgType`,
    method: "post",
    params: {},
    data: params
  });

/** 根据组织Id获取当前组织下员工信息列表 */
export const getOrganizationUserByIdByPost = (params: GetOrganizationUserById_In) =>
  axios.request<GetOrganizationUserById_OutApiTableOut>({
    url: `/api/Organization/GetOrganizationUserById`,
    method: "post",
    params: {},
    data: params
  });

/** 获取系统中的组织机构树 */
export const getOrganizationTreeByPost = () =>
  axios.request<GetOrganizationTree_Out[]>({
    url: `/api/Organization/GetOrganizationTree`,
    method: "post",
    params: {},
    data: {}
  });

/** 获取系统中的组织机构[携带用户]树 */
export const getOrganizationWithUserTreeByPost = () =>
  axios.request<GetOrganizationWithUserTree_Out[]>({
    url: `/api/Organization/GetOrganizationWithUserTree`,
    method: "post",
    params: {},
    data: {}
  });

/** 获取传入组织Id所在分支的树结构 */
export const getChildOrgListByPost = (params: { Id?: string }) =>
  axios.request<SysOrganizationTree[]>({
    url: `/api/Organization/GetChildOrgList`,
    method: "post",
    params: params,
    data: {}
  });

/** 获取登录人的当前组织及下级组织树结构 */
export const getSelfAndChildOrgListByPost = () =>
  axios.request<SysOrganizationTree[]>({
    url: `/api/Organization/GetSelfAndChildOrgList`,
    method: "post",
    params: {},
    data: {}
  });

/** 获取录人的当前组织及下级组织[携带用户]树 */
export const getSelfAndChildOrgWithUserTreeByPost = () =>
  axios.request<GetOrganizationWithUserTree_Out[]>({
    url: `/api/Organization/GetSelfAndChildOrgWithUserTree`,
    method: "post",
    params: {},
    data: {}
  });

/** 员工管理页面用 获取系统中的组织机构[携带用户(含组织名称及可保留客户数)]树 */
export const getOrgTreeWithUserMaxSaveCustomerByPost = () =>
  axios.request<GetOrganizationWithUserTree_Out[]>({
    url: `/api/Organization/GetOrgTreeWithUserMaxSaveCustomer`,
    method: "post",
    params: {},
    data: {}
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/Organization/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
