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
  AddCollectionInfo_In,
  UpdateCollectionInfo_In,
  CollectionInfo_Out,
  SearchCollectionInfoList_In,
  SearchCollectionInfoList_OutApiTableOut,
  IdentifyCollectionInfo_Out,
  SearchUnRegisteredCollectionInfoList_In,
  SearchUnRegisteredCollectionInfoList_OutApiTableOut,
  Stream
} from "./interface/index.ts";
import axios from "axios";

/** 添加回款信息 */
export const addCollectionInfoByPost = (params: AddCollectionInfo_In[]) =>
  axios.request<any>({
    url: `/api/Collectioninfo/AddCollectionInfo`,
    method: "post",
    params: {},
    data: params
  });

/** 修改回款信息 */
export const updateCollectionInfoByPost = (params: UpdateCollectionInfo_In) =>
  axios.request<any>({
    url: `/api/Collectioninfo/UpdateCollectionInfo`,
    method: "post",
    params: {},
    data: params
  });

/** 删除回款信息 */
export const deleteCollectionInfoByPost = (params: string[]) =>
  axios.request<any>({
    url: `/api/Collectioninfo/DeleteCollectionInfo`,
    method: "post",
    params: {},
    data: params
  });

/** 根据回款信息Id获取回款信息 */
export const getCollectionInfoByIdByPost = (params: { id?: string }) =>
  axios.request<CollectionInfo_Out>({
    url: `/api/Collectioninfo/GetCollectionInfoById`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据查询条件获取回款信息列表 */
export const searchCollectionInfoListByPost = (params: SearchCollectionInfoList_In) =>
  axios.request<SearchCollectionInfoList_OutApiTableOut>({
    url: `/api/Collectioninfo/SearchCollectionInfoList`,
    method: "post",
    params: {},
    data: params
  });

/** 识别回款信息 */
export const identifyCollectionInfoByPost = (params: { transactionReceipt?: string }) =>
  axios.request<IdentifyCollectionInfo_Out>({
    url: `/api/Collectioninfo/IdentifyCollectionInfo`,
    method: "post",
    params: params,
    data: {}
  });

/** 根据查询条件获取匹配状态为待登记的回款信息列表 */
export const searchUnRegisteredCollectionInfoListByPost = (params: SearchUnRegisteredCollectionInfoList_In) =>
  axios.request<SearchUnRegisteredCollectionInfoList_OutApiTableOut>({
    url: `/api/Collectioninfo/SearchUnRegisteredCollectionInfoList`,
    method: "post",
    params: {},
    data: params
  });

/** 生成当前controller所有TypeScript模型 */
export const generateThisControllerModelToTsByPut = () =>
  axios.request<Stream>({
    url: `/api/Collectioninfo/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
