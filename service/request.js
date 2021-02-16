/**
 * 请求
 */

import { host ,mobileHost} from './config'

export default (url, data = {}, method = "GET") => {
    // 返回promise
    return new Promise((resolve, reject) => {
        // 请求
        wx.request({
            url: mobileHost + url,
            data,
            method,
            // 成功的回调函数
            success: (res) => {
                resolve(res.data)
            },
            // 失败的回调函数
            fail:(err)=>{
                reject(err)
            }
        })
    })
}