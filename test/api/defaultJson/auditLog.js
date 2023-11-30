/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger
 * @see https://www.npmjs.com/package/free-swagger
 * @title Uber API
 * @description Move your app forward with the Uber API
 * @version 1.0.0
}
**/

import axios from "axios";

/**
 * @description
 * @param {Object} params
 * @param {string} params.StartDate
 **/
export const GetAuditLogs = (params) =>
  axios.request({
    url: `/v1/api/services/app/AuditLog/GetAuditLogs`,
    method: "get",
    params: params,
    data: {}
  });
