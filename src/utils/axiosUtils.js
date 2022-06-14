import axios from "axios";
import { message } from 'antd';
const newAxios = axios.create({
    baseURL: "http://127.0.0.1:8002",
    timeout: 3000
})

// 添加请求拦截器
newAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token = localStorage.token
    if (token) {
        config.headers.token = token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
newAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    const response = error.response
    if (response) {
        switch (response.status) {
            case 500:
                message.error("服务器太累了，请稍后访问")
                break;
            case 401:
                message.error("身份已过期，请重新登录")
                localStorage.removeItem("token")
                localStorage.removeItem("userInfo")
                window.location.href = "/login";
                break;
            case 404:
                message.error("你访问的地址不存在")
                break;

            default:
                break;
        }
    }
    return Promise.reject(error);
});



export default newAxios
