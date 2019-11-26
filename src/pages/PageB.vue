<template>
  <div>
    <div>我是订阅者B, 使用localStorage, 订阅的主题是GetGrade</div>
    <button @click="CreateListener">创建订阅</button>
    <button @click="OffListener">移除订阅</button>
    <div v-for="(item, index) in grade_list" :key="index">{{item}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        listener: '',
        grade_list: []
      }
    },
    methods: {
      // 注册订阅
      CreateListener () {
        this.listener = this.$Cross.$on('GetGrade', (grade) => {
          console.log('我是订阅者B，我订阅的主题是GetGrade')
          console.log('我收到的信息是', grade)
          this.grade_list.push(grade)
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
