<template>
  <div class="provider-menu-container">
    <Breadcrumb menu1 = '权限管理' menu2 = '提供商菜单管理'></Breadcrumb>
    <Menu type = 'Provider'></Menu>
  </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb'
import Menu from './Menu'

export default {
  name: 'providerMenu',
  components: {
    Breadcrumb,
    Menu
  }
}
</script>

<style lang="scss" scoped>

</style>
