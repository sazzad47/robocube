import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

// Dashboard Ecommerce
// Revenue
export const getAllRevenueData = () => api.get(url.GET_ALLREVENUE_DATA);
export const getMonthRevenueData = () => api.get(url.GET_MONTHREVENUE_DATA);
export const getHalfYearRevenueData = () =>
  api.get(url.GET_HALFYEARREVENUE_DATA);
export const getYearRevenueData = () => api.get(url.GET_YEARREVENUE_DATA);
//API Key
export const getAPIKey = () => api.get(url.GET_API_KEY);
