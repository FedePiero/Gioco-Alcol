<template>
  <el-row :gutter="100">
    <el-col :span="24">
      <h1 style="color: white" class="center-text">EXPERIENCE</h1>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="center-button">
        <el-button class="firstButton" round @click="$router.push('Start')"
        >Nuovo Gioco</el-button
      >
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="center-button">
      <el-button
        class="secondButton"
        round
        @click="$router.push('Game')"
        :disabled="getResumeGame()"
        >Riprendi Partita</el-button
      >
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
      return localStorage.getItem("resumeGame") == null
    }
  }
}
</script>
<style scoped>
.center-text {
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  text-align: center;
}
.center-button{
  position: fixed;
  margin-left: auto;
  margin-right: auto;
}
.firstButton {
  top: 20%;
}
.secondButton {
  top: 40%;
}
.el-button{
  height: 7%;
  width: 50%;
  position: fixed;
}
</style>
