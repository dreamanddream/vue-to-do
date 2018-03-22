<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- 渲染数据title -->
    <h1 v-text="title"></h1>
    <!-- v-model的使用,同时绑定一个敲入enter回车键-->
    <input type="text" v-model="newText" v-on:keyup.enter="addNew">
    <!-- v-for的使用 -->
    <!-- 渲染类使用v-bind,如果是对象就表示直接控制类的渲染取决于true或者false，如果是数组就表示直接显示类-->
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <!-- 在模板中要是用中划线的形式，小写中划线，不能使用驼峰法 -->
    <p>childtom:{{ childWords }}</p>
    <component-a msgfromfather="I am a father" v-on:child-tell-me-something="listenToMyBoy"></component-a>
  </div>
</template>

<script>
// 引入store.js
import Store from './store'
// 引入componentA组件,自动根据路径查找以.vue或者以.js为结尾的文件
import ComponentA from './components/componentA'
// 打印查看Store
console.log(Store)
// export也是es6语法，相当于导出
export default {
  name: 'App',
  // 注册组件
  components: {
    ComponentA
  },
  // es6写法
  data:function () {
    return {
      title: 'this is a todo list',
      // 每次一进入这个页面就要读取存储的内容，调用Store.fetch方法
      items: Store.fetch(),
      // items: [],
      liClass: 'thisisLiClass',
      // v-model也是在data中定义
      newText: '',
      childWords: ''
    }
  },
  // watch的使用
  // watch的作用，每当数组item改变时，就执行handle方法，打印出val和oldVal
  watch:{
    items:{
      handler: function (items) {
        // console.log(val, oldVal)
       // 调用store方法，将新添加的存储起来
       Store.save(items)
      },
      // 深度 watcher，做到状态更改也及时更新
      deep: true
    }
  },
  // 在methods中定义方法
  methods: {
    toggleFinish: function (item) {
      // 这种写法错误，无法识别isFinished=!isFinished;
      // 实现点击按钮切换类，改变true或者false的值
      item.isFinished=!item.isFinished;
    },
    addNew: function () {
      // 向数组中添加内容
      this.items.push({
        label:this.newText ,
        isFinished: false
      })
      this.newText=''
    },
    listenToMyBoy: function (msg) {
      this.childWords = msg;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished{
  text-decoration: underline;
}
</style>
