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
    <el-col :span="24" class="center" v-if="enableDice">
      <Dice @diceResult="(i) => diceResult.push(i)" />
    </el-col>
  </el-row>
</template>

<script lang="js">
import Dice from '../components/Dice.vue';

export default {
    data() {
        return {
            diceResult: [],
            numberOfShot: 3,
        };
    },
    computed: {
        enableDice(){
            if(this.diceResult.length == this.numberOfShot){
                return false;
            }else{
                return true;
            }
        }
    },
    created() {
    },
    methods: {

    },
    components: { Dice }
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
