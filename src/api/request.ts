import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Modal, message as Message } from 'antd';

interface Result<T = any> {
  code: number;
  message: string;
  data?: T;
}

type RequestConfig = AxiosRequestConfig & {
  isMock?: boolean
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer Token';

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res: AxiosResponse<Result>) => {
    if (res.data.code === 401) {
      Modal.confirm({
        title: '提示',
        content: '未登录，是否去登录',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }

    return res.data.data;
  },
  error => {
    const { response, message } = error || {};
    let errMsg = '';
    try {
      errMsg = response?.data?.message || message;
    } catch (error) {
      throw new Error(error as unknown as string);
    }

    Message.error(errMsg);
  }
);

class Http {
  url: string;
  isMock: boolean;

  constructor(url = '', isMock = false) {
    this.url = url;
    this.isMock = isMock;
  }

  request<T = any>(config: RequestConfig): Promise<T> {
    let url = '';
    const isMock = import.meta.env.DEV && (this.isMock || config.isMock);
    if (isMock) {
      url = [this.url, '/mock/', config.url].join('/').replace(/\/\/+/g, '/');
    }

    return new Promise((resolve, reject) => {
      axiosInstance.request<any, AxiosResponse<Result>>({
        ...config,
        url
      })
        .then(res => {
          resolve(res as unknown as Promise<T>);
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  get<T>(config: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'GET'
    });
  }

  post<T>(config?: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'POST'
    });
  }

  put<T>(config: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'PUT'
    });
  }

  delete<T>(confi: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'DELETE'
    });
  }
}

export default Http;