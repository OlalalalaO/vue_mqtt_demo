<template>
  <div class="demo-progress">
    <el-progress type="circle" :percentage=percent></el-progress>

  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    percent() {
      return this.$store.state.percent
    }
  }
}
</script>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
