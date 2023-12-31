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
  WorkflowPending_Out,
  WorkflowInfo_Out,
  WorkflowBusinessInfo_Out,
  SearchWorkflowHandleInfo_In,
  WorkflowInfo_OutApiTableOut,
  BusinessMessageType,
  BusinessMessageTypeAndInfo,
  MessagesList_Out,
  SearchMessagesList_In,
  SearchMessagesList_OutApiTableOut,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 获取用户待办信息 */
export const getWorkflowPendingByPost = () =>
  axios.request<WorkflowPending_Out[]>({
    url: `/api/Home/GetWorkflowPending`,
    method: "post",
    params: {},
    data: {}
  });

/** 变更用户待办信息未查看为已查看 */
export const updateWorkflowPendingStateToViewedByPost = (params: { id?: string }) =>
  axios.request<any>({
    url: `/api/Home/UpdateWorkflowPendingStateToViewed`,
    method: "post",
    params: params,
    data: {}
  });

/** 获取用户已处理信息 */
export const getWorkflowHandleInfoByPost = (params: { dataId?: string; workFlowName?: string }) =>
  axios.request<WorkflowInfo_Out[]>({
    url: `/api/Home/GetWorkflowHandleInfo`,
    method: "post",
    params: params,
    data: {}
  });

/** 获取用户已处理信息以及业务信息 */
export const getWorkflowBusinessInfoByPost = (params: { dataId?: string; workFlowName?: string }) =>
  axios.request<WorkflowBusinessInfo_Out[]>({
    url: `/api/Home/GetWorkflowBusinessInfo`,
    method: "post",
    params: params,
    data: {}
  });

/** 查询合同已处理信息 */
export const searchContractWorkflowHandleInfoByPost = (params: SearchWorkflowHandleInfo_In) =>
  axios.request<WorkflowInfo_OutApiTableOut>({
    url: `/api/Home/SearchContractWorkflowHandleInfo`,
    method: "post",
    params: {},
    data: params
  });

/** 获取业务消息种类表 */
export const getBusinessMessageTypeByPost = () =>
  axios.request<BusinessMessageType[]>({
    url: `/api/Home/GetBusinessMessageType`,
    method: "post",
    params: {},
    data: {}
  });

/** 添加用户业务消息种类 */
export const addUserBusinessMessagetypeByPost = (params: string[]) =>
  axios.request<any>({
    url: `/api/Home/AddUserBusinessMessagetype`,
    method: "post",
    params: {},
    data: params
  });

/** 修改用户业务消息种类 */
export const updateUserBusinessMessagetypeByPost = (params: string[]) =>
  axios.request<any>({
    url: `/api/Home/UpdateUserBusinessMessagetype`,
    method: "post",
    params: {},
    data: params
  });

/** 获取用户业务消息种类 */
export const getUserBusinessMessageTypeByPost = () =>
  axios.request<BusinessMessageTypeAndInfo[]>({
    url: `/api/Home/GetUserBusinessMessageType`,
    method: "post",
    params: {},
    data: {}
  });

/** 获取用户业务消息信息 */
export const getBusinessMessageAndInfoTypeByPost = () =>
  axios.request<BusinessMessageTypeAndInfo[]>({
    url: `/api/Home/GetBusinessMessageAndInfoType`,
    method: "post",
    params: {},
    data: {}
  });

/** 获取用户消息信息 */
export const getMessagesListByPost = () =>
  axios.request<MessagesList_Out[]>({
    url: `/api/Home/GetMessagesList`,
    method: "post",
    params: {},
    data: {}
  });

/** 根据查询条件获取用户消息信息列表 */
export const searchMessagesListByPost = (params: SearchMessagesList_In) =>
  axios.request<SearchMessagesList_OutApiTableOut>({
    url: `/api/Home/SearchMessagesList`,
    method: "post",
    params: {},
    data: params
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/Home/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
