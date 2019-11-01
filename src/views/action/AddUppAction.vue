<template>
  <div class="add-action-container">
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.visible"
      width="30%"
      :before-close="handleClose"
      :close-on-click-modal = "false">
        <el-form label-position="right" label-width="80px" :model="formLabelAlign">
        <el-form-item label="接口名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="url地址">
          <el-input v-model="formLabelAlign.url"></el-input>
        </el-form-item>
        <el-form-item label="接口类型">
          <el-select v-model="formLabelAlign.actionType" placeholder="请选择">
            <el-option
              v-for="item in actionTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FetchUtil from '../../utils/FetchUtil'
import ServerAPI from '../../utils/ServerAPI'

export default {
  name: 'addAction',
  created () {
    console.log('----------初始化addAction------------')
    if (this.isAdd) {
      this.openDialog('添加接口')
      return
    }
    this.openDialog('修改接口')
    this.formLabelAlign = this.action
  },
  props: ['isAdd', 'action'], // 接收父组件传递的参数
  data () {
    return {
      formLabelAlign: {},
      actionTypes: [{
        value: 'Developer',
        label: '开发商'
      },
      {
        value: 'Provider',
        label: '提供商'
      },
      {
        value: 'Company',
        label: '商户'
      },
      {
        value: 'Common',
        label: '公共'
      }],
      dialog: {
        visible: false,
        title: ''
      }
    }
  },
  methods: {
    // ----------------事件处理
    handleClose () {
      console.log('关闭')
      this.closeDialog()
    },
    handleCancel () {
      console.log('取消')
      this.closeDialog()
    },
    handleConfirm () {
      console.log('确认')
      if (this.isAdd) {
        return this.addAction()
      }
      this.updateAction()
    },
    // ----------------封装方法
    // 开启对话框
    openDialog (title) {
      this.dialog = {
        visible: true,
        title
      }
    },
    // 关闭对话框
    closeDialog () {
      // 清空数据
      this.formLabelAlign = {
        name: '',
        url: '',
        actionType: ''
      }
      // 关闭dialog
      this.dialog = {
        visible: false,
        title: ''
      }
      // 发送事件给父组件
      this.$emit('cancel')
    },
    // ----------------服务端请求
    addAction () {
      this.baseOperation(ServerAPI.addAction)
    },
    updateAction () {
      this.baseOperation(ServerAPI.updateAction)
    },
    baseOperation (url) {
      let param = this.formLabelAlign
      FetchUtil.requestPost(url, param, this, (data) => {
        // 关闭对话框
        this.closeDialog()
        // 发送事件给父组件
        this.$emit('confirm', this.formLabelAlign)
      }, true)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
