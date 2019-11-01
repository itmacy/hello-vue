<template>
  <div class="action-container">
    <!-- breadcrumb -->
    <Breadcrumb menu1 = "权限管理" menu2 = "接口管理"></Breadcrumb>
    <div class="btn-group">
       <el-button type="primary" icon = "el-icon-plus"  @click="addRow">新增</el-button>
    </div>
    <!-- addAction -->
    <AddAction v-if = "dialog.open" :isAdd = "dialog.isAdd" :action = "dialog.formData" @confirm = "compConfirm" @cancel = "compCancel"></AddAction>
    <!-- 获取表格行中scope.row，获取指定列：scope.row.xx -->
    <el-table :data="data.content" border>
      <el-table-column type="index" :index="indexMethod" label="序号" align = "center">
      </el-table-column>
      <el-table-column prop="name" label="接口名" align = "center">
      </el-table-column>
      <el-table-column prop="url" label="url地址" align = "center">
      </el-table-column>
      <el-table-column prop="actionType" label="接口类型" :formatter="formatterTye" align = "center">
      </el-table-column>
      <el-table-column prop="open" label="是否开启" :formatter="formatterOpen" align = "center">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120"
        align = "center">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="updateRow(scope.row)"
            type="text"
            size="middle">
            编辑
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.row.id)"
            type="text"
            size="middle">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        :hide-on-single-page="isHide"
        :total="data.totalElements"
        :current-page= "data.number"
        @current-change="handleCurrentChange"
        layout="prev, pager, next">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../../components/Breadcrumb'
import ServerAPI from '../../utils/ServerAPI'
import { deleteConfirm } from '../../utils/Alert'
import FetchUtil from '../../utils/FetchUtil'
import AddAction from './AddUppAction'

export default {
  name: 'action',
  created () {
    // 调用获取接口列表
    this.getActionList()
  },
  data () {
    return {
      // 对话框
      dialog: {
        open: false, // 是否开启
        isAdd: true, // 是否为添加
        formData: {} // 表单数据
      },
      // 列表内容
      data: {
        number: 1, // 当前页数
        numberOfElements: 0, // 每页条数
        totalPages: 0, // 总页数
        content: [],
        totalElements: 0 // 总条数
      }
    }
  },
  computed: {
    // 单页是否隐藏
    isHide () {
      return this.data.totalElements <= 1
    }
  },
  components: {
    Breadcrumb,
    AddAction
  },
  methods: {
    // 序号
    indexMethod (index) {
      return index + 1
    },
    // 格式化接口
    formatterTye (row, column) {
      return this.getActonTypeStr(row.actionType)
    },
    // 格式化是否开启
    formatterOpen (row, column) {
      return row.open ? '开启' : '关闭'
    },
    // ----------------------事件处理
    handleCurrentChange (val) {
      // console.log('当前页：', val)
      this.getActionList(val)
    },
    // ----------------------操作
    addRow () {
      // 对话框可见
      this.dialog = {
        open: true,
        isAdd: true
      }
    },
    updateRow (row) {
      // // 对话框可见
      this.dialog = {
        open: true,
        isAdd: false,
        formData: row
      }
    },
    deleteRow (id) {
      deleteConfirm(this, () => {
        this.deleteAction(id)
      })
    },
    // ----------------------接收子组件发送的事件
    compConfirm (val) {
      this.closeDialog()
      // 刷新数据
      this.getActionList()
    },
    compCancel () {
      this.closeDialog()
    },
    closeDialog () {
      this.dialog = {
        open: false,
        isAdd: false,
        formData: {}
      }
    },
    // ---------------------封装方法
    // 获取接口类型
    getActonTypeStr (actionType) {
      switch (actionType) {
        case 'Developer' :
          return '开发商'
        case 'Provider' :
          return '提供商'
        case 'Company' :
          return '商户'
        case 'Common' :
          return '公共'
      }
    },
    // ----------------------服务端请求
    getActionList (page = 1, size = 10) {
      let param = {
        page,
        size
      }
      FetchUtil.requestPost(ServerAPI.getActionList, param, this, (data) => {
        this.data = data
      })
    },
    deleteAction (id) {
      FetchUtil.requestGet(ServerAPI.deleteAction.replace('{id}', id), this, (data) => {
        // 刷新数据
        this.getActionList()
      }, true)
    }
  }
}
</script>
<style lang="scss" scoped>
.action-container {
  .btn-group {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 10px;
  }
  .page {
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
