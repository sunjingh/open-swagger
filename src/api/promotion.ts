/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger-core
 * @see https://www.npmjs.com/package/free-swagger
 * @title Crm2所有接口
 * @description 所有api
 * @fileDescription 晋升设置控制器
 * @version v1
}
**/

import {
  UpdatePromotion_In,
  UpdatePromotion_Out,
  GetPromotionList_In,
  GetPromotionList_Out,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 修改晋升信息，主键为空，新建；主键不存在，删除；主键存在，修改； */
export const updatePromotionByPost = (params: UpdatePromotion_In) =>
  axios.request<UpdatePromotion_Out>({
    url: `/api/Promotion/UpdatePromotion`,
    method: "post",
    params: {},
    data: params
  });

/** 根据类别获取晋升信息 */
export const getPromotionListByPost = (params: GetPromotionList_In) =>
  axios.request<GetPromotionList_Out>({
    url: `/api/Promotion/GetPromotionList`,
    method: "post",
    params: {},
    data: params
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/Promotion/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
