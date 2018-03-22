
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 直接取父组件传递的信息 -->
    <h1>{{ msgfromfather }}</h1>
    <button v-on:click="onClickMe">click!</button>
  </div>
</template>
<script>
// componentA是子组件，谁引入谁是父组件
export default {
  data: function () {
    return {
      msg: 'I am child , I have some words'
    }
  },
  props: ['msgfromfather'],
  methods: {
    onClickMe: function () {
      console.log(this.msgfromfather)
      // this.$emit('child-tell-me-something',this.msg)
      this.$dispatch
    }
  }
}
</script>
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
