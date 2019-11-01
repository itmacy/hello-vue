/**
 * 服务端api
 */
const BASE_URL = 'http://192.168.1.40:9006/infopublish'
const SALT = 'homieisaigu65534fanereye55877kafka'
let ServerAPI = {
  /**
   * 登录
   */
  salt: SALT,
  login: BASE_URL + '/auth/adminLogin.json',
  getPermssion: BASE_URL + '/user/getPermissionMenuViaCommon.json',
  /**
   * 接口
   */
  getActionList: BASE_URL + '/action/getActionByPageViaDeveloper.json',
  addAction: BASE_URL + '/action/addActionViaDeveloper.json',
  updateAction: BASE_URL + '/action/updateActionViaDeveloper.json',
  isOpenAction: BASE_URL + '/action/openOrCloseActionViaDeveloper.json',
  deleteAction: BASE_URL + '/action/deleteActionViaDeveloper.json/{id}'
}

export default ServerAPI
