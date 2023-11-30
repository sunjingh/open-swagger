/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger-core
 * @see https://www.npmjs.com/package/free-swagger
 * @title Crm2所有接口
 * @description 所有api
 * @fileDescription 知识库控制器
 * @version v1
}
**/

import axios from "axios";

/**
 * @description 根据查询条件获取文章列表。
 * @param {SearchArticleList_In} params
 **/
export const searchArticleListByPost = (params) =>
  axios.request({
    url: `/api/Article/SearchArticleList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据文章Id获取文章信息。
 * @param {GetArticleById_In} params
 **/
export const getArticleByIdByPost = (params) =>
  axios.request({
    url: `/api/Article/GetArticleById`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 添加文章信息
 * @param {FormData} params
 **/
export const addArticleByPost = (params) =>
  axios.request({
    url: `/api/Article/AddArticle`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 修改文章信息
 * @param {FormData} params
 **/
export const updateArticleByPost = (params) =>
  axios.request({
    url: `/api/Article/UpdateArticle`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 删除文章信息
 * @param {DeleteArticle_In} params
 **/
export const deleteArticleByPost = (params) =>
  axios.request({
    url: `/api/Article/DeleteArticle`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 下架文章信息
 * @param {RevokeArticle_In} params
 **/
export const revokeArticleByPost = (params) =>
  axios.request({
    url: `/api/Article/RevokeArticle`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据用户id查询该用户发布的知识库文章列表
 * @param {GetArticleListByUserId_In} params
 **/
export const getArticleListByUserIdByPost = (params) =>
  axios.request({
    url: `/api/Article/GetArticleListByUserId`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据用户Id获取用户的晋升历史记录
 * @param {GetUserPromotionListByUserId_In} params
 **/
export const getUserPromotionListByUserIdByPost = (params) =>
  axios.request({
    url: `/api/Article/GetUserPromotionListByUserId`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 获取文件[方案1]
 * @param {Object} params
 * @param {string} params.attId
 **/
export const downLoadByGet = (params) =>
  axios.request({
    url: `/api/Article/DownLoad`,
    method: "get",
    params: params,
    data: {}
  });

/**
 * @description 富文本上传图片[方案1]
 * @param {FormData} params
 **/
export const uploadImageByPost = (params) =>
  axios.request({
    url: `/api/Article/UploadImage`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 获取文件【方案2】
 * @param {Object} params
 * @param {string} params.attId
 * @param {string} params.articleId
 **/
export const downLoadNewByGet = (params) =>
  axios.request({
    url: `/api/Article/DownLoadNew`,
    method: "get",
    params: params,
    data: {}
  });

/**
 * @description 富文本上传图片[方案2]
 * @param {FormData} params
 **/
export const uploadImageNewByPost = (params) =>
  axios.request({
    url: `/api/Article/UploadImageNew`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 富文本心跳数据保持
 * @param {Object} params
 * @param {string} params.articleId
 **/
export const articleTextHeartbeatByGet = (params) =>
  axios.request({
    url: `/api/Article/ArticleTextHeartbeat`,
    method: "get",
    params: params,
    data: {}
  });

/**
 * @description 获取拥有知识库文章的用户列表
 **/
export const getHaveArticleUserListByPost = () =>
  axios.request({
    url: `/api/Article/GetHaveArticleUserList`,
    method: "post",
    params: {},
    data: {}
  });

/**
 * @description 添加文章评论信息
 * @param {FormData} params
 **/
export const addArticleCommentByPost = (params) =>
  axios.request({
    url: `/api/Article/AddArticleComment`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 修改文章评论信息
 * @param {FormData} params
 **/
export const updateArticleCommentByPost = (params) =>
  axios.request({
    url: `/api/Article/UpdateArticleComment`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 删除文章评论信息
 * @param {DeleteArticleComment_In} params
 **/
export const deleteArticleCommentByPost = (params) =>
  axios.request({
    url: `/api/Article/DeleteArticleComment`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据文章Id获取文章评论信息
 * @param {GetArticleCommentList_In} params
 **/
export const getArticleCommentListByPost = (params) =>
  axios.request({
    url: `/api/Article/GetArticleCommentList`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 添加文章评论点赞信息
 * @param {AddArticleCommentPraise_In} params
 **/
export const addArticleCommentPraiseByPost = (params) =>
  axios.request({
    url: `/api/Article/AddArticleCommentPraise`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 撤销文章评论点赞信息。
 * @param {DeleteArticleCommentPraise_In} params
 **/
export const deleteArticleCommentPraiseByPost = (params) =>
  axios.request({
    url: `/api/Article/DeleteArticleCommentPraise`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 添加文章点赞信息
 * @param {AddArticlePraise_In} params
 **/
export const addArticlePraiseByPost = (params) =>
  axios.request({
    url: `/api/Article/AddArticlePraise`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 撤销文章点赞信息
 * @param {DeleteArticlePraise_In} params
 **/
export const deleteArticlePraiseByPost = (params) =>
  axios.request({
    url: `/api/Article/DeleteArticlePraise`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 添加文章浏览信息。
 * @param {AddArticleBrowse_In} params
 **/
export const addArticleBrowseByPost = (params) =>
  axios.request({
    url: `/api/Article/AddArticleBrowse`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 根据知识库id获取对应的浏览记录列表
 * @param {GetBrowseRecordByArticleId_In} params
 **/
export const getBrowseRecordByArticleIdByPost = (params) =>
  axios.request({
    url: `/api/Article/GetBrowseRecordByArticleId`,
    method: "post",
    params: {},
    data: params
  });

/**
 * @description 生成当前controller所有TypeScript模型
 **/
export const generateThisControllerModelToTsByPut = () =>
  axios.request({
    url: `/api/Article/GenerateThisControllerModelToTs`,
    method: "put",
    params: {},
    data: {}
  });
