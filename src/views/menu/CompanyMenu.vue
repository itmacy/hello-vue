<template>
  <div class="company-menu-container">
    <Breadcrumb menu1 = '权限管理' menu2 = '商户菜单管理'></Breadcrumb>
    <Menu type = "Company"></Menu>
  </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb'
import Menu from './Menu'

export default {
  name: 'companyMenu',
  components: {
    Breadcrumb,
    Menu
  }
}
</script>

<style lang="scss" scoped>
</style>
