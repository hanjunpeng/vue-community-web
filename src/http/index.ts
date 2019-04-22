/**
 * @Desc http文件主要处理axios请求全局带参数，解决sign签名问题
 */
import axios from "axios";
import Vue from "vue";

axios.create({
  baseURL: "/api",
  timeout: 1000
});
// axios 请求拦截器
axios.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// axios 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data;
    } else {
      console.log(response.data);
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
