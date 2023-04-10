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
      <div v-for="(item, index) in players">
        <el-row>
          <el-col :span="4">
            <h4>{{ index }} -</h4>
          </el-col>
          <el-col :span="15">
            <el-input v-model="item.name" placeholder="Nome" clearable />
          </el-col>
          <el-col :span="5">
            <el-image style="width: 100px; height: 100px" :src="item.icon"/>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="js">
export default {
  data() {
    return {
      players: [],
      listIcon: [
        "../assets/drinks/drink1.jpeg",
        "../assets/drinks/drink2.jpeg",
        "../assets/drinks/drink3.jpeg",
        "../assets/drinks/drink4.jpeg",
        "../assets/drinks/drink5.jpeg",
        "../assets/drinks/drink6.jpeg",
        "../assets/drinks/drink7.jpeg",
        "../assets/drinks/drink8.jpeg",
        "../assets/drinks/drink9.jpeg",
        "../assets/drinks/drink10.jpeg",
        "../assets/drinks/drink11.jpeg",
        "../assets/drinks/drink12.jpeg",
      ]
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
        console.log(this.players)
          if(this.players.length!=12){
            this.players.push(this.getTemp)
          }
      },
  }
}
</script>
<style scoped></style>
