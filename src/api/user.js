/*
 * @LastEditors: xw
 * @Author: xw
 * @Description: 关于用户的接口
 * @Date: 2019-04-12 10:35:11
 * @LastEditTime: 2019-04-12 10:38:33
 */

import request from '@/libs/http'

export function login (data) {
    return request({
        url: '',
        method: 'post',
        data
    })
}

export function getInfo (token) {
    return request({
        url: '',
        method: 'get',
        data: { token }
    })
}

export function logout () {
    return request({
        url: '',
        method: 'post'
    })
}