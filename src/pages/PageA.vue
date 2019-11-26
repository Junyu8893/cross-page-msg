<template>
  <div>
    <div>我是订阅者A, 使用localStorage, 订阅的主题是GetStudent</div>
    <button @click="CreateListener">创建订阅</button>
    <button @click="OffListener">移除订阅</button>
    <button @click="listener.close()">关闭订阅</button>
    <button @click="listener.open()">开启订阅</button>
    <button @click="ChangeEvent">开启订阅</button>
    <div v-for="(item, index) in stu_list" :key="index">{{item.name}}, {{item.age}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        listener: '',
        stu_list: []
      }
    },
    methods: {
      // 注册订阅
      CreateListener () {
        this.listener = this.$Cross.$on('GetStudent', (name, age) => {
          console.log('我是订阅者A，我订阅的主题是GetStudent')
          console.log('我收到的信息是', name, age)
          this.stu_list.push({ name, age })
        })
      },
      // 移除订阅
      OffListener () {
        // 调用listener自身off方法移除订阅
        this.listener.off()
        // 调用$Cross.$off，传入listener移除订阅
        // this.$Cross.$off(this.listener)
      },
      // 修改listener回调
      ChangeEvent () {
        this.listener.change((name, age) => {
          console.log(`你好 ${name}`)
        })
      }
    },
    mounted () {
      this.CreateListener()
    }
  }
</script>
