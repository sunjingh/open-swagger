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

import { Profile, Activities } from "./interface/index.ts";
import axios from "axios";

/** User Profile */
export const meByGet = () =>
  axios.request<Profile>({
    url: `/v1/me`,
    method: "get",
    params: {},
    data: {}
  });

/** User Activity */
export const historyByGet = (params: { offset?: number; limit?: number }) =>
  axios.request<Activities>({
    url: `/v1/history`,
    method: "get",
    params: params,
    data: {}
  });