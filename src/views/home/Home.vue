<template>
  <div class="home-container">
    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-header style="text-align: right; font-size: 14px">
        <div>
          <span style="font-size: 18px">MacyManage</span>
        </div>
        <div>
          <el-dropdown>
            <i class="el-icon-setting" style="font-size: 18px;margin-right: 15px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><div @click="logout">退出</div></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{username}}</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>权限管理</template>
              <el-menu-item-group>
                <router-link to = "/home/providermenu" tag="span"><el-menu-item index="1-1">超管菜单管理</el-menu-item></router-link>
                <router-link to = "/home/companymenu" tag="span"><el-menu-item index="1-2">商户菜单管理</el-menu-item></router-link>
                <router-link to = "/home/action" tag = "span"><el-menu-item index="1-3">接口管理</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonUtil from '../../utils/CommonUtil'
import FetchUtil from '../../utils/FetchUtil'
import ServerAPI from '../../utils/ServerAPI'

export default {
  name: 'home',
  created () {
    this.username = CommonUtil.getUserInfo().username
    // 获取用户权限
    this.getPermission()
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    logout () {
      // 清除用户信息
      CommonUtil.removeUserInfo()
      // 跳转到登录页
      this.$router.push('/login')
    },
    getPermission () {
      FetchUtil.requestGet(ServerAPI.getPermssion, this, (data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  .el-header {
    // background-color: #ECF5FF;
    // color: #666;
    background-color: #53A8FF;
    color: #fff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .el-aside {
    color: #333;
  }
}
</style>
