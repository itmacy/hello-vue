<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>{{menu1}}</el-breadcrumb-item>
      <el-breadcrumb-item><a href="#">{{menu2}}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: ['menu1', 'menu2']
}
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  .el-breadcrumb {
    font-size: 16px;
    margin-bottom: 20px;
  }
}
</style>
