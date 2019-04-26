/**
 * @Desc http文件主要处理axios请求全局带参数，解决sign签名问题
 */
import axios from "axios";
import Vue from "vue";
import qs from "qs";
import { Toast } from 'mint-ui';
let http = axios.create({
  baseURL: "/api"
});
// axios 请求拦截器
http.interceptors.request.use(
  config => {
    // 每个请求需要带的字段 比如token sign等等
    let _parames = {};
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    if (config.method === "post") {
      let data = qs.parse(config.data);
      let parames = Object.assign(_parames, data);
      config.data = qs.stringify(parames);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// axios 响应拦截器
http.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data;
    } else {
      Toast({
        message: `${response.data.msg}`,
        position: 'bottom',
        duration: 3000
      })
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export default http;
