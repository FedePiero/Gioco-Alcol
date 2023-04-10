<template>
  <el-row>
    <el-col :span="6" class="center">
      <el-button circle @click="$router.push('/')">
        <el-icon style="vertical-align: middle">
          <ArrowLeftBold />
        </el-icon>
      </el-button>
    </el-col>
    <el-col :span="12">
      <div style="text-align: center">
        <h2>SET UP</h2>
        <hr />
      </div>
    </el-col>
    <el-col :span="6" class="center">
      <el-button circle @click="$router.push('Game')">
        <el-icon style="vertical-align: middle">
          <ArrowRightBold />
        </el-icon>
      </el-button>
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
    console.log(localStorage.getItem("resumeGame") )
  },
  methods: {
  }
}
</script>
<style scoped>
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}
</style>
