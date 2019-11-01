/**
 * 公共类
 */
let CommontUtil = {
  /**
   * 获取用户信息
   */
  getUserInfo () {
    return JSON.parse(localStorage.getItem('userInfo'))
  },
  /**
   * 存入用户信息
   */
  setUserInfo (userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
  /**
   * 清除用户信息
   */
  removeUserInfo () {
    localStorage.removeItem('userInfo')
  }
}

export default CommontUtil
