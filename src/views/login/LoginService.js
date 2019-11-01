/**
 * 登录服务
 */
// 引入axios
import axios from 'axios'
// 引入服务端api
import ServerAPI from '../../utils/ServerAPI'
// 引入md5
import md5 from 'md5'
// 引入公共类
import CommonUtil from '../../utils/CommonUtil'

let LoginService = {
  login (username, password, vue) {
    // loading
    vue.loading = true
    // 发送请求
    axios({
      method: 'post',
      url: ServerAPI.login,
      headers: { 'Content-Type': 'application/json' },
      data: {
        username,
        password: md5(password),
        md5Password: md5(md5(password) + ServerAPI.salt)
      }
    })
      .then(function (resp) {
        console.log(resp)
        if (resp.data.code === 0) {
          // 登录成功：
          // 存储用户信息
          CommonUtil.setUserInfo(resp.data.data)
          // 跳转到主页
          return vue.$router.push('/home/providermenu')
        }
        // 登录失败：弹出提示
        vue.alertTip = true
        vue.alertTipTitle = resp.data.message
      })
      .catch(function (err) {
        console.log(err)
        // 统一处理为登录异常
        vue.alertTip = true
        vue.alertTipTitle = '登录异常'
      })
      .finally(function () {
        // 无论是否成功，停止loading
        vue.loading = !vue.loading
      })
  }
}

export default LoginService
