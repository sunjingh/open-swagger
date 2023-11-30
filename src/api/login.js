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
 * @description 通过手机号码/邮箱地址和验证码进行登录
 * @param {LoginByVerificationCode_In} params
 **/
export const loginByVerificationCodeByPost = (params) =>
  axios.request({
    url: `/api/Login/LoginByVerificationCode`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 获取手机号/邮箱号验证码
 * @param {GetVerificationCode_In} params
 **/
export const getVerificationCodeByPost = (params) =>
  axios.request({
    url: `/api/Login/GetVerificationCode`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 通过账号/手机号/Email和密码进行登录
 * @param {LoginByPwd_In} params
 **/
export const loginByPwdByPost = (params) =>
  axios.request({
    url: `/api/Login/LoginByPwd`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 通过微信扫码进行登录
 * @param {Object} params
 * @param {string} params.code
 **/
export const loginByWeChartCodeByPost = (params) =>
  axios.request({
    url: `/api/Login/LoginByWeChartCode`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 通过微信扫码绑定微信
 * @param {Object} params
 * @param {string} params.code
 **/
export const bindWeChatByPost = (params) =>
  axios.request({
    url: `/api/Login/BindWeChat`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description 解除绑定微信
 **/
export const unBindWeChatByPost = () =>
  axios.request({
    url: `/api/Login/UnBindWeChat`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 密码找回--发送验证码
 * @param {GetRetrievePwdVerificationCode_In} params
 **/
export const getRetrievePwdVerificationCodeByPost = (params) =>
  axios.request({
    url: `/api/Login/GetRetrievePwdVerificationCode`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 找回密码--校验验证码
 * @param {CheckRetrievePwdVerifyCode_In} params
 **/
export const checkRetrievePwdVerifyCodeByPost = (params) =>
  axios.request({
    url: `/api/Login/CheckRetrievePwdVerifyCode`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 找回密码--重置密码
 * @param {RetrievePwdByVerifyCode_In} params
 **/
export const retrievePwdByVerifyCodeByPost = (params) =>
  axios.request({
    url: `/api/Login/RetrievePwdByVerifyCode`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 通过token获取用户基本信息(用户公钥)
 **/
export const getLoginBasicInfoByPost = () =>
  axios.request({
    url: `/api/Login/GetLoginBasicInfo`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 登录后根据token获取用户可操作的菜单
 **/
export const getFormMenusByUserIdByPost = () =>
  axios.request({
    url: `/api/Login/GetFormMenusByUserId`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 根据菜单Id获取可查看列表的集合
 * @param {Object} params
 * @param {string} params.formTableId
 **/
export const getFormTablesByMenuIdByPost = (params) =>
  axios.request({
    url: `/api/Login/GetFormTablesByMenuId`,
    method: "post",
    params: params,
    data: {}
  });

/**
 * @description
 **/
export const checkGit2ByPost = () =>
  axios.request({
    url: `/api/Login/CheckGit_2`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Login/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });