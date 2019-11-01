<template>
  <div class="menu-container">
    <el-table :data="tableData" border fit>
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        :hide-on-single-page="isHide"
        :total="totalCount"
        layout="prev, pager, next">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'commonMenu',
  beforeCreate () {
  },
  created () {
    console.log('menuType:', this.type)
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  },
  data () {
    return {
      // 列表内容
      tableData: [],
      // 总条数
      totalCount: 100
    }
  },
  props: ['type'],
  computed: {
    // 单页是否隐藏
    isHide () {
      // return !this.tableData
      return false
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.menu-container {
  .page {
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
