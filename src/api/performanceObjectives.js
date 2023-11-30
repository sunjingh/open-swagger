/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger-core
 * @see https://www.npmjs.com/package/free-swagger
 * @title Crm2所有接口
 * @description 所有api
 * @fileDescription 业绩目标控制器
 * @version v1
}
**/

import axios from "axios";

/**
 * @description 修改业绩目标信息，主键为空，新建；主键不存在，删除；主键存在，修改；
 * @param {UpdatePerformanceObjectives_In[]} params
 **/
export const updatePerformanceObjectivesByPost = (params) =>
  axios.request({
    url: `/api/PerformanceObjectives/UpdatePerformanceObjectives`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据年份获取业绩目标信息
 * @param {GetPerformanceObjectivesList_In} params
 **/
export const getPerformanceObjectivesListByPost = (params) =>
  axios.request({
    url: `/api/PerformanceObjectives/GetPerformanceObjectivesList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @deprecated
 * @description 统一配置业绩目标信息
 * @param {UnifiedConfigPerformanceObjectives_In[]} params
 **/
export const unifiedConfigPerformanceObjectivesByPost = (params) =>
  axios.request({
    url: `/api/PerformanceObjectives/UnifiedConfigPerformanceObjectives`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/PerformanceObjectives/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });