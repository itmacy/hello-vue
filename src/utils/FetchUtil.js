/**
 * 请求工具
 * 说明：执行成功后，后续的操作通过传入回调函数的方式执行
 */
import axios from 'axios'
import { MsgAlert } from './Alert'
import CommontUtil from './CommonUtil'

let FetchUtil = {
  /**
   * 基本请求
   * @param {*} url 请求url
   * @param {*} method 请求方式
   * @param {*} param 请求参数
   * @param {*} vue vue实例
   * @param {*} callback 成功回调函数
   * @param {*} isAlertSuccess 成功后是否提示
   */
  baseRequst (url, method, param, vue, callback, isAlertSuccess) {
    const userInfo = CommontUtil.getUserInfo()
    axios({
      url,
      method,
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + userInfo.token },
      data: param
    })
      .then(function (resp) {
        // console.log(resp.data)
        if (resp.data.code === 0) {
          // 执行回调函数，并返回结果
          callback(resp.data.data)
          if (isAlertSuccess) {
            // 成功提示
            MsgAlert.success(vue, resp.data.message)
          }
          return
        }
        // 错误提示
        MsgAlert.error(vue, resp.data.message)
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  requestPost (url, param, vue, callback, isAlertSuccess) {
    this.baseRequst(url, 'post', param, vue, callback, isAlertSuccess)
  },
  requestGet (url, vue, callback, isAlertSuccess) {
    this.baseRequst(url, 'get', null, vue, callback, isAlertSuccess)
  }
}

export default FetchUtil
