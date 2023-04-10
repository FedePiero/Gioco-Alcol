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
      <el-button type="primary" circle :disabled="listNotEmpty" @click="startGame()">
        <el-icon style="vertical-align: middle">
          <ArrowRightBold />
        </el-icon>
      </el-button>
    </el-col>
    <el-col :span="24">
      <el-row>
        <el-col :span="16">
          <h4>Numero di giocatori: {{ players.length }}</h4>
        </el-col>
        <el-col :span="4" class="center">
          <el-button type="danger" circle @click="setLessNPlayers()">
            <el-icon style="vertical-align: middle">
              <Minus />
            </el-icon>
          </el-button>
        </el-col>
        <el-col :span="4" class="center">
          <el-button type="success" circle @click="setMoreNPlayers()">
            <el-icon style="vertical-align: middle">
              <Plus />
            </el-icon>
          </el-button>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" class="center">
      <div v-for="item in players">
        <el-row>
          <el-col :span="20" class="center">
            <el-input v-model="item.name" placeholder="Nome" clearable />
          </el-col>
          <el-col :span="4" class="center">
            <el-image
              :src="item.icon"
              fit="fill"
              style="border: 2px black solid"
            />
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
    },
    listNotEmpty(){
      let result = false
      this.players.forEach(element => {
        if(element.name === ''){
          result = true
        }
      });
      return result
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
      startGame(){
        localStorage.setItem("resumeGame", JSON.stringify(this.players))
        this.$router.push('Game')
      },
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
