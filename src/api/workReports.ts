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
  SearchWorkReportList_In,
  SearchDailyWorkReportList_OutApiTableOut,
  WorkReportParameter_In,
  DailyWorkReport,
  WorkReportSubmitStateByUserId,
  WorkReportActionResult,
  SearchWeekWorkReportList_OutApiTableOut,
  WeekWorkReport,
  SearchMonthWorkReportList_OutApiTableOut,
  MonthWorkReport,
  SearchManagerDailyWorkReportList_OutApiTableOut,
  ManagerDailyWorkReport,
  SearchBriefReportList_OutApiTableOut,
  BriefReport,
  WorkReportTypeParameter_In,
  CustomerTraceRecord_Out,
  GetParentManagerUser,
  GetOrganizationWithUserTree_Out,
  Stream
} from "./interface/index.ts";
import axios from "axios";

export const reportTestByPost = () =>
  axios.request<any>({
    url: `/api/WorkReports/ReportTest`,
    method: "post",
    params: {},
    data: {}
  });

/** 根据查询条件获取工作日报列表。 */
export const searchDailyWorkReportListByPost = (params: SearchWorkReportList_In) =>
  axios.request<SearchDailyWorkReportList_OutApiTableOut>({
    url: `/api/WorkReports/SearchDailyWorkReportList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据工作日报Id获取工作日报信息。 */
export const getDailyWorkReportByIdByPost = (params: WorkReportParameter_In) =>
  axios.request<DailyWorkReport>({
    url: `/api/WorkReports/GetDailyWorkReportById`,
    method: "post",
    params: {},
    data: params
  });

/** 根据用户Id获取工作日报信息提交列表。获取该用户组织下用户已提交报告和未提交报告的信息。 */
export const getDailyWorkReportSubmitStateByUserIdByPost = () =>
  axios.request<WorkReportSubmitStateByUserId[]>({
    url: `/api/WorkReports/GetDailyWorkReportSubmitStateByUserId`,
    method: "post",
    params: {},
    data: {}
  });

/** 添加工作日报信息。 */
export const addDailyWorkReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/AddDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 修改工作日报信息。 */
export const updateDailyWorkReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/UpdateDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 删除工作日报信息，当发布状态为草稿、已发送、已查阅时，可操作删除。 */
export const deleteDailyWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/DeleteDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 撤销工作日报信息，当发布状态为已发送时，可撤销，支持多选操作。验证数据权限 */
export const revokeDailyWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/RevokeDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 设置已读工作日报信息。验证数据权限。 */
export const setIsReadDailyWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/SetIsReadDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取工作周报列表。 */
export const searchWeekWorkReportListByPost = (params: SearchWorkReportList_In) =>
  axios.request<SearchWeekWorkReportList_OutApiTableOut>({
    url: `/api/WorkReports/SearchWeekWorkReportList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据工作周报Id获取工作周报信息。 */
export const getWeekWorkReportByIdByPost = (params: WorkReportParameter_In) =>
  axios.request<WeekWorkReport>({
    url: `/api/WorkReports/GetWeekWorkReportById`,
    method: "post",
    params: {},
    data: params
  });

/** 根据用户Id获取工作周报信息提交列表。获取该用户组织下用户已提交报告和未提交报告的信息。 */
export const getWeekWorkReportSubmitStateByUserIdByPost = () =>
  axios.request<WorkReportSubmitStateByUserId[]>({
    url: `/api/WorkReports/GetWeekWorkReportSubmitStateByUserId`,
    method: "post",
    params: {},
    data: {}
  });

/** 添加工作周报信息。 */
export const addWeekWorkReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/AddWeekWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 修改工作周报信息。 */
export const updateWeekWorkReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/UpdateWeekWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 删除工作周报信息，当发布状态为草稿、已发送、已查阅时，可操作删除 */
export const deleteWeekWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/DeleteWeekWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 撤销工作周报信息，当发布状态为已发送时，可撤销，支持多选操作。验证数据权限 */
export const revokeWeekWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/RevokeWeekWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 设置已读工作周报信息。验证数据权限。 */
export const setIsReadWeekWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/SetIsReadWeekWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取工作月报列表。 */
export const searchMonthWorkReportListByPost = (params: SearchWorkReportList_In) =>
  axios.request<SearchMonthWorkReportList_OutApiTableOut>({
    url: `/api/WorkReports/SearchMonthWorkReportList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据工作月报Id获取工作月报信息。 */
export const getMonthWorkReportByIdByPost = (params: WorkReportParameter_In) =>
  axios.request<MonthWorkReport>({
    url: `/api/WorkReports/GetMonthWorkReportById`,
    method: "post",
    params: {},
    data: params
  });

/** 根据用户Id获取工作月报信息提交列表。获取该用户组织下用户已提交报告和未提交报告的信息。 */
export const getMonthWorkReportSubmitStateByUserIdByPost = () =>
  axios.request<WorkReportSubmitStateByUserId[]>({
    url: `/api/WorkReports/GetMonthWorkReportSubmitStateByUserId`,
    method: "post",
    params: {},
    data: {}
  });

/** 添加工作月报信息。 */
export const addMonthWorkReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/AddMonthWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 修改工作月报信息。保存草稿：添加工作月报信息，状态为草稿。新建：添加工作月报信息，状态为已发布。 */
export const updateMonthWorkReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/UpdateMonthWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 删除工作月报信息，当发布状态为草稿、已发送、已查阅时，可操作删除。 */
export const deleteMonthWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/DeleteMonthWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 撤销工作月报信息，当发布状态为已发送时，可撤销，支持多选操作。验证数据权限 */
export const revokeMonthWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/RevokeMonthWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 设置已读工作月报信息。验证数据权限。 */
export const setIsReadMonthWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/SetIsReadMonthWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取管理日报列表。 */
export const searchManagerDailyWorkReportListByPost = (params: SearchWorkReportList_In) =>
  axios.request<SearchManagerDailyWorkReportList_OutApiTableOut>({
    url: `/api/WorkReports/SearchManagerDailyWorkReportList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据管理日报Id获取管理日报信息。 */
export const getManagerDailyWorkReportByIdByPost = (params: WorkReportParameter_In) =>
  axios.request<ManagerDailyWorkReport>({
    url: `/api/WorkReports/GetManagerDailyWorkReportById`,
    method: "post",
    params: {},
    data: params
  });

/** 根据用户Id获取管理日报信息提交列表。获取该用户组织下用户已提交报告和未提交报告的信息。 */
export const getManagerDailyWorkReportSubmitStateByUserIdByPost = () =>
  axios.request<WorkReportSubmitStateByUserId[]>({
    url: `/api/WorkReports/GetManagerDailyWorkReportSubmitStateByUserId`,
    method: "post",
    params: {},
    data: {}
  });

/** 添加工作管理日报信息。 */
export const addManagerDailyWorkReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/AddManagerDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 修改工作管理日报信息。 */
export const updateManagerDailyWorkReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/UpdateManagerDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 删除管理工作日报信息，当发布状态为草稿、已发送、已查阅时，可操作删除。 */
export const deleteManagerDailyWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/DeleteManagerDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 撤销管理工作日报信息，当发布状态为已发送时，可撤销，支持多选操作。验证数据权限 */
export const revokeManagerManagerDailyWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/RevokeManagerManagerDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 设置已读管理工作日报信息。验证数据权限。 */
export const setIsReadManagerDailyWorkReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/SetIsReadManagerDailyWorkReport`,
    method: "post",
    params: {},
    data: params
  });

/** 根据查询条件获取工作简报列表。 */
export const searchBriefReportListByPost = (params: SearchWorkReportList_In) =>
  axios.request<SearchBriefReportList_OutApiTableOut>({
    url: `/api/WorkReports/SearchBriefReportList`,
    method: "post",
    params: {},
    data: params
  });

/** 根据工作简报Id获取工作简报信息。 */
export const getBriefReportByIdByPost = (params: WorkReportParameter_In) =>
  axios.request<BriefReport>({
    url: `/api/WorkReports/GetBriefReportById`,
    method: "post",
    params: {},
    data: params
  });

/** 根据用户Id获取工作简报信息提交列表。获取该用户组织下用户已提交报告和未提交报告的信息。 */
export const getBriefReportSubmitStateByUserIdByPost = () =>
  axios.request<WorkReportSubmitStateByUserId[]>({
    url: `/api/WorkReports/GetBriefReportSubmitStateByUserId`,
    method: "post",
    params: {},
    data: {}
  });

/** 添加工作简报信息。 */
export const addBriefReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/AddBriefReport`,
    method: "post",
    params: {},
    data: params
  });

/** 修改工作简报信息。 */
export const updateBriefReportByPost = (params: FormData) =>
  axios.request<WorkReportActionResult>({
    url: `/api/WorkReports/UpdateBriefReport`,
    method: "post",
    params: {},
    data: params
  });

/** 删除工作简报信息 */
export const deleteBriefReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/DeleteBriefReport`,
    method: "post",
    params: {},
    data: params
  });

/** 撤销工作简报信息，当发布状态为已发送时，可撤销，支持多选操作。验证数据权限 */
export const revokeBriefReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/RevokeBriefReport`,
    method: "post",
    params: {},
    data: params
  });

/** 设置已读工作简报信息。验证数据权限。 */
export const setIsReadBriefReportByPost = (params: WorkReportParameter_In) =>
  axios.request<any>({
    url: `/api/WorkReports/SetIsReadBriefReport`,
    method: "post",
    params: {},
    data: params
  });

/** 获取工作报告最新追踪信息 */
export const getCustomerTraceRecordByPost = (params: WorkReportTypeParameter_In) =>
  axios.request<CustomerTraceRecord_Out[]>({
    url: `/api/WorkReports/GetCustomerTraceRecord`,
    method: "post",
    params: {},
    data: params
  });

/** 获取周报统计数据 */
export const weekWorkReportStatisticsByPost = () =>
  axios.request<WeekWorkReport>({
    url: `/api/WorkReports/WeekWorkReportStatistics`,
    method: "post",
    params: {},
    data: {}
  });

/** 获取月报统计数据 */
export const monthWorkReportStatisticsByPost = () =>
  axios.request<MonthWorkReport>({
    url: `/api/WorkReports/MonthWorkReportStatistics`,
    method: "post",
    params: {},
    data: {}
  });

/** 获取管理日报统计数据 */
export const managerReportStatisticsByPost = () =>
  axios.request<ManagerDailyWorkReport>({
    url: `/api/WorkReports/ManagerReportStatistics`,
    method: "post",
    params: {},
    data: {}
  });

/** 根据当前登陆人员获取上级管理者ID及名字 */
export const getParentManagerUsersByPost = () =>
  axios.request<GetParentManagerUser[]>({
    url: `/api/WorkReports/GetParentManagerUsers`,
    method: "post",
    params: {},
    data: {}
  });

/** 获取工作报告接收人(树形结构) */
export const getReportReciverUsersByGet = (params: { workReportsType?: number }) =>
  axios.request<GetOrganizationWithUserTree_Out[]>({
    url: `/api/WorkReports/GetReportReciverUsers`,
    method: "get",
    params: params,
    data: {}
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/WorkReports/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
