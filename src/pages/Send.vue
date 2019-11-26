<template>
  <div>
    <div>使用localStorage</div>
    <div>发送 [GetStudent] 主题，信息：小明，16岁</div>
    <button @click="Send1">发送</button>
    <div>发送 [GetStudent] 主题，信息：小张，18岁</div>
    <button @click="Send2">发送</button>
    <div>发送 [GetGrade] 主题，信息：一年级</div>
    <button @click="Send3">发送</button>
    <br /><br /><br />
    <div>使用BroadcastChannel</div>
    <div>发送 [ChangeTest] 主题，信息：小红，女孩子</div>
    <button @click="Send4">发送</button>
  </div>
</template>

<script>
  export default {
    methods: {
      Send1 () {
        this.$Cross.$emit('GetStudent', '小明', '16岁')
      },
      Send2 () {
        this.$Cross.$emit('GetStudent', '小张', '18岁')
      },
      Send3 () {
        this.$Cross.$emit('GetGrade', '一年级')
      },
      Send4 () {
        this.$Broadcast.$emit('ChangeTest', '小红', '女孩子')
      }
    }
  }
</script>
