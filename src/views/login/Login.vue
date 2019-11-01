<template>
  <div class="login-container">
    <div class="form-data">
      <div class="login-tip" v-if="alertTip">
        <el-alert
          :title="alertTipTitle"
          type="error"
          center
          show-icon
          @close="handleClose">
        </el-alert>
      </div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" v-loading="loading">
            <el-form-item label="用户名">
                <el-input v-model="formLabelAlign.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formLabelAlign.password"></el-input>
            </el-form-item>
            <div class="bth-group">
                <el-button type="primary" size="small" class="login-btn" @click="login">登录</el-button>
                <el-button type="primary" size="small" class="login-btn" @click="reset">重置</el-button>
            </div>
        </el-form>
    </div>
  </div>
</template>

<script>
import LoginService from './LoginService'

export default {
  name: 'login',
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        username: 'super_admin',
        password: 'super_admin'
      },
      alertTip: false,
      alertTipTitle: '',
      loading: false
    }
  },
  methods: {
    // ----------------------事件处理
    handleClose () {
      this.alertTip = !this.alertTip
    },
    // ----------------------操作
    login () {
      // 校验参数
      if (!this.validated()) {
        return
      }
      // 发送请求
      LoginService.login(this.formLabelAlign.username, this.formLabelAlign.password, this)
    },
    reset () {
      this.formLabelAlign.username = this.formLabelAlign.password = ''
    },
    // ----------------------封装的方法
    validated () {
      if (this.formLabelAlign.username === '') {
        this.alertTipTitle = '用户名不为空'
        this.alertTip = true
        return false
      }
      if (this.formLabelAlign.password === '') {
        this.alertTipTitle = '密码不为空'
        this.alertTip = true
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-data {
    .login-tip {
      margin-bottom: 10px;
    }
    border: 1px solid #eee;
    background-color: #fff;
    padding: 20px;
    width: 25%;
    // 让按钮组居中
    .bth-group {
        display: flex;
        justify-content: center;
    }
  }
}

</style>
