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

import {
  TemperatureSummary,
  ForecastResponse,
  TemperatueZoneStatus,
  HeaterState,
  ApiResponse
} from "./interface/index.ts";
import { AxiosResponse } from "axios";
import http from "http";

export const temperatureSummary = () =>
  axios.request<TemperatureSummary>({
    url: `/yeyan1996/IOT/1.0.0/temperature`,
    method: "get",
    params: {},
    data: {}
  });

export const getForecast = (
  _NOOP: Record<string, never>,
  {
    days
  }: {
    days: number;
  }
) =>
  axios.request<ForecastResponse>({
    url: `/yeyan1996/IOT/1.0.0/temperature/forecast/${days}`,
    method: "get",
    params: {},
    data: {}
  });

export const getZoneTemperature = (
  _NOOP: Record<string, never>,
  {
    zoneId
  }: {
    zoneId: string;
  }
) =>
  axios.request<TemperatueZoneStatus>({
    url: `/yeyan1996/IOT/1.0.0/temperature/${zoneId}`,
    method: "get",
    params: {},
    data: {}
  });

export const getHeaterState = (
  _NOOP: Record<string, never>,
  {
    zoneId
  }: {
    zoneId: string;
  }
) =>
  axios.request<HeaterState>({
    url: `/yeyan1996/IOT/1.0.0/temperature/${zoneId}/heater`,
    method: "get",
    params: {},
    data: {}
  });

export const setHeaterState = (
  _NOOP: Record<string, never>,
  {
    zoneId,
    state
  }: {
    zoneId: string;
    state: string;
  }
) =>
  axios.request<ApiResponse>({
    url: `/yeyan1996/IOT/1.0.0/temperature/${zoneId}/heater/${state}`,
    method: "post",
    params: {},
    data: {}
  });
