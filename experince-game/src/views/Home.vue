<template>
  <el-row :gutter="100">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <el-button round @click="$router.push('Start')">Nuovo Gioco</el-button>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <el-button round :disabled="getResumeGame()">Riprendi Partita</el-button>
    </el-col>
  </el-row>
</template>

<script lang="js">
export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    getResumeGame(){
      console.log(app.config.globalProperties.$resumeGame)
        return app.config.globalProperties.$resumeGame == null
    }
  }
}
</script>
<style scoped>
.el-button {
  margin: 20px;
}
</style>
