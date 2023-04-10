<template>
  <el-row :gutter="100">
    <el-col
      :xs="24"
      :sm="24"
      :md="24"
      :lg="24"
      :xl="24"
      style="position: absolute; top: 2%; text-align: center"
    >
      <div>
        <h2>Giocatori</h2>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <h4>Numero di giocatori: {{ players.length }}</h4>
      <el-button circle @click="setLessNPlayers()"> - </el-button>
      <el-button circle @click="setMoreNPlayers()"> + </el-button>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div v-for="item in players">
        <el-row>
          <el-col :span="20">
            <el-input v-model="item.name" placeholder="Nome" clearable />
          </el-col>
          <el-col :span="4">
            <div class="imageDiv">
                <el-image :src="item.icon" fit="fill"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="js">
import { fill } from 'lodash'

export default {
  data() {
    return {
      players: [],
      listIcon: [
        '../../public/drinks/drink1.jpeg',
        '../../public/drinks/drink2.jpeg',
        '../../public/drinks/drink3.jpeg',
        '../../public/drinks/drink4.jpeg',
        '../../public/drinks/drink5.jpeg',
        '../../public/drinks/drink6.jpeg',
        '../../public/drinks/drink7.jpeg',
        '../../public/drinks/drink8.jpeg',
        '../../public/drinks/drink9.jpeg',
        '../../public/drinks/drink10.jpeg',
        '../../public/drinks/drink11.jpeg',
        '../../public/drinks/drink12.jpeg',
      ],
    }
  },
  computed:{
    getTemp(){
        return {
            name: '',
            icon: this.listIcon[this.players.length]
        }
    }
  },
  created() {
    this.players.push(this.getTemp)
  },
  methods: {
      setLessNPlayers(){
          if(this.players.length!=1){
            this.players.pop(this.getTemp)
          }
      },
      setMoreNPlayers(){
          if(this.players.length!=12){
            this.players.push(this.getTemp)
          }
      },
  }
}
</script>
<style scoped>
.imageDiv{
    width: 10px; 
    height: 10px;
    border: 2px black solid;
}
</style>
