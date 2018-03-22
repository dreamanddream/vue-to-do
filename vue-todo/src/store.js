// es6语法 const定义常量
const STORAGE_KEY = 'todos-vuejs'
export default{
  // 读取存储的对象
  // 这种写法也是es6的语法
  // JSON.parse转换为json数据
  // 如果定义的常量STORAGE_KEY存在，那么就读取STORAGE_KEY下的value，也就是items整个数组的值
  fetch () {
    return JSON.parse(window.localStorage.getItem(
      STORAGE_KEY) || '[]')
      // console.log("STORAGE_KEY"+STORAGE_KEY)
  },
  // 存储数据
  // 将items整个数组对象作为value
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    console.log("STORAGE_KEY"+STORAGE_KEY)
  }
}
