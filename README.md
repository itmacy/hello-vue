# hello-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 说明
创建项目
- 安装vue-cli v3：npm install -g @vue/cli
- 启动GUI页面：vue ui
- 在GUI页面创建项目
- 创建完成后，在GUI页面添加vue-cli-plugin-element插件，把element ui作为插件引入使用，项目自动引入该插件，直接使用
- 在GUI页面添加依赖，安装axios，需要手动引入使用
- 安装md5依赖，手动引入使用

开发知识点
- 引入组件的方式
	同步引入（页面启动时，加载组件）：import Home from '../views/Home.vue'
	异步引入（用到该组件时才加载）：const Home = () => import('../views/Home.vue')
- 路由跳转 
	链接导航：`<route-link to="xxx">`	,使用tag属性可以指定渲染成什么标签，默认时a标签
	编码导航：this.$route.push(xxx) 当xxx是字符串时，为path, 当xxx为对象时，则{path:'/'}
- tableData: Array(10).fill(item)	 把item添加到10个到tableData数组中，如
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(10).fill(item)
    }
  }
- h5本地存储
	保存数据：localStorage.setItem(key,value);
	读取数据：localStorage.getItem(key);
	删除单个数据：localStorage.removeItem(key);
	删除所有数据：localStorage.clear();
	得到某个索引的key：localStorage.key(index);
- 路由传参
	path:/xx/:参数名
	`<router-link to="/xx/aa">`
	获取参数：this.$route.params.参数名
- 父组件给子组件传参
	在子组件与data同级定义：props:['xxx']
	引入子组件时：<组件名 xxx='aaa'>
- 子组件给父组件传参
	在组件发送事件：$emit('事件名',传到父组件的值)
	在父组件定义一个方法 xxx(val) 接收子组件发送的事件，val接收子组件传递的值
	引入子组件时：<组件名 @事件名 = "xxx" >
	
	
注意事项
- 在vue组件中`<style lang="scss" scoped></style>`中 lang="scss"而不是 lang="sass",否则会报
	SassError: Invalid CSS after ".login-container {": expected "}", was "{"
- 由于单页面的关系，跳转到同一个页面时，该页面时不会重新加载，比如提供商菜单和商户菜单通过路由传参，跳转到同一个页面时，不会重新加载，解决方法是分别定义两个页面，再定义一个作为子组件引入
	
	
	
- eslint
	语句结束后不需要分号
	语句结束后不能有空格
	每两个空格缩进
	方法名与()需要空格，()与{}需要空格，如function xxx () {}
	字符串使用单引号
	冒号/逗号前不用空格，后要空格，如 username: xxx
	单行注释后面加空格，如// hello
	引入模块时花括号前后加空格，如 import { xx } from 'xxx'
	
- 异常收集
	Do not use built-in or reserved HTML elements as component id: menu	，===》由于Menu在HTML5里面是个DOM对象，不能使用menu作为组件中的name，换个名字即可
	
问题：
	不能直接引入js文件使用
	如何关闭eslint
	使用自定义插件，使用插件
	
	
感悟：
	从基础的开发开始，再慢慢抽取共同部分，基础的开发能遇到更多知识点，比如axios执行then函数时，this的执行会发生改变，因此需要在请求外层更改this指向：let _this = this，
		而抽取公共部分时，会发现某些处理是要根据具体情况来实现，因此可以传入一个回调函数，通过回调函数来代替具体情况的实现，当抽取公共代码要用到vue实例时，
		不能再重新引入Vue：import Vue from 'vue'，因为会创建一个新的实例，因此可以通过传入vue实例
	抽取代码的好处是：代码解耦，方便维护；代码复用，提高开发效率。坏处是代码抽象，比较难看懂，而且维护的状态会更多，因此一步步抽取可以更好去理解抽象的代码

