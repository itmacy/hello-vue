/**
 * 消息提示
 * 说明：假如通过导入import Vue from 'vue'的方式调用，则相当于重新创建vue实例
 */
let MsgAlert = {
  success (vue, msg) {
    vue.$message({
      message: msg,
      type: 'success'
    })
  },
  error (vue, msg) {
    vue.$message.error(msg)
  }
}
/**
 * 删除确认
 * 说明：由于点击确认后需要执行后续的操作，而后续的操作时不确定的，因此通过传入回调函数的方式，来做后续操作
 */
let deleteConfirm = (vue, callback) => {
  vue.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    callback()
  }).catch(() => {
    console.log('取消')
  })
}

export { MsgAlert, deleteConfirm }
