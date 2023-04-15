import { getRefreshToken } from "@/utils/auth.utils";
import { apiUrl } from "@/utils/config.utils";
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import qs from 'qs';

export const httpNoInterceptors: AxiosInstance = axios.create({
  paramsSerializer: params => qs.stringify(params),
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const fetcherNoInterceptors = async (url: string) => {
  return httpNoInterceptors.get(url).then((res) => res.data);
}


export const http: AxiosInstance = axios.create({
  paramsSerializer: params => qs.stringify(params),
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    const currentFamily = localStorage.getItem('currentFamily');

    if (config?.headers) {
      token && (config.headers.Authorization = `Bearer ${ token }`);
      currentFamily && (config.headers[ 'X-Family-ID' ] = currentFamily);
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401 ) {
      const rToken = getRefreshToken();
      if (rToken) {
        //TODO: Refresh token if not then error
      } else {
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  },
);

export const fetcher = async (url: string) => {
  return http.get(url).then((res) => res.data);
}
