/* eslint-disable */
// @ts-nocheck

/**
 * generated by free-swagger
 * @see https://www.npmjs.com/package/free-swagger
 * @title home-iot-api
 * @description The API for the EatBacon IOT project
 * @version 1.0.0
}
**/

import { ApiResponse, DeviceState, LightingSummary } from "./interface/index.ts";
import { AxiosResponse } from "axios";
import http from "http";

export const setDimmer = (
  _NOOP: Record<string, never>,
  {
    deviceId,
    value
  }: {
    deviceId: string;
    value: number;
  }
) =>
  axios.request<ApiResponse>({
    url: `/yeyan1996/IOT/1.0.0/lighting/dimmers/${deviceId}/${value}`,
    method: "post",
    params: {},
    data: {}
  });

export const setDimmerTimer = (
  params: {
    units?: string;
  },
  {
    deviceId,
    value,
    timeunit
  }: {
    deviceId: string;
    value: number;
    timeunit: number;
  }
) =>
  axios.request<ApiResponse>({
    url: `/yeyan1996/IOT/1.0.0/lighting/dimmers/${deviceId}/${value}/timer/${timeunit}`,
    method: "post",
    params: params,
    data: {}
  });

export const getSwitchState = (
  _NOOP: Record<string, never>,
  {
    deviceId
  }: {
    deviceId: string;
  }
) =>
  axios.request<DeviceState>({
    url: `/yeyan1996/IOT/1.0.0/lighting/switches/${deviceId}`,
    method: "get",
    params: {},
    data: {}
  });

export const setSwitch = (
  _NOOP: Record<string, never>,
  {
    deviceId,
    value
  }: {
    deviceId: string;
    value: string;
  }
) =>
  axios.request<ApiResponse>({
    url: `/yeyan1996/IOT/1.0.0/lighting/switches/${deviceId}/${value}`,
    method: "post",
    params: {},
    data: {}
  });

export const setSwitchTimer = (
  _NOOP: Record<string, never>,
  {
    deviceId,
    value,
    minutes
  }: {
    deviceId: string;
    value: string;
    minutes: number;
  }
) =>
  axios.request<ApiResponse>({
    url: `/yeyan1996/IOT/1.0.0/lighting/switches/${deviceId}/${value}/timer/${minutes}`,
    method: "post",
    params: {},
    data: {}
  });

export const getLightingSummary = () =>
  axios.request<LightingSummary>({
    url: `/yeyan1996/IOT/1.0.0/lightingSummary`,
    method: "get",
    params: {},
    data: {}
  });
