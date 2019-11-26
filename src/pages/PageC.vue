<template>
  <div>
    <div>我是订阅者C, 使用BroadcastChannel, 订阅的主题是ChangeTest</div>
    <button @click="CreateListener">创建订阅</button>
    <button @click="OffListener">移除订阅</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        listener: ''
      }
    },
    methods: {
      // 注册订阅
      CreateListener () {
        this.listener = this.$Broadcast.$on('ChangeTest', (name, sex) => {
          console.log('我是订阅者C，我订阅的主题是ChangeTest')
          console.log('我收到的信息是', name, sex)
        })
      },
      OffListener () {
        this.listener.off()
      }
    },
    mounted () {
      this.CreateListener()
    }
  }
</script>
