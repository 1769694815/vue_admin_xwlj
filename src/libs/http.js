/*
 * @LastEditors: xw
 * @Author: xw
 * @Description: axios 二次封装
 * @Date: 2019-04-12 10:07:48
 * @LastEditTime: 2019-04-12 10:34:32
 */

import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE.BASE.API, // api 的 base_url
    timeout: 5000 // request timeout

})

// http request 拦截器
service.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        }
        return config
    },
    error => Promise.reject(error)
)

// http response 拦截器
service.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
)

export default service