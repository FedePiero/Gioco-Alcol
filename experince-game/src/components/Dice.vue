<template>
  <el-row :gutter="100">
    <el-col :span="24">
      <div class="dice" @click="rollDice">
        <ol class="die-list even-roll" data-roll="1" id="die-1">
          <li class="die-item" data-side="1">
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="2">
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="3">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="4">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="5">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="6">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
        </ol>
        <ol class="die-list odd-roll" data-roll="1" id="die-2">
          <li class="die-item" data-side="1">
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="2">
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="3">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="4">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="5">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="6">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
        </ol>
      </div>
    </el-col>
    <el-col :span="24">
        <div class="textResultDices" v-if="firstShot">
            <h2 style="color: #fefefe;">Risultato : {{ resultRandom }}</h2>
        </div>
    </el-col>
  </el-row>
</template>

<script lang="js">
export default {
  data() {
    return {
      resultRandom: 0,
      canShot: true,
      firstShot: false,
    }
  },
  created() {
  },
  methods: {
      rollDice() {
          if(!this.canShot){
              return;
          }
          this.canShot = false
          const dice = [...document.querySelectorAll(".die-list")];
          let temp = 0;
          this.resultRandom = 0;
          dice.forEach(die => {
              this.toggleClasses(die);
              temp = this.getRandomNumber(1, 6);
              die.dataset.roll = temp
              this.resultRandom = this.resultRandom + temp;
          });
          setTimeout(()=>this.enableRollAgain(), 2500);
      },
      enableRollAgain(){
        this.canShot = true
        this.$emit('diceResult',this.resultRandom)
        this.firstShot = true
      },
      toggleClasses(die) {
          die.classList.toggle("odd-roll");
          die.classList.toggle("even-roll");
      },
      getRandomNumber(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
      },
  }
}
</script>
<style scoped>
.dice {
  align-items: center;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  padding: 2rem;
  perspective: 600px;
}
.die-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 6rem;
  list-style-type: none;
  transform-style: preserve-3d;
  width: 6rem;
}
.even-roll {
  transition: transform 1.5s ease-out;
}
.odd-roll {
  transition: transform 1.25s ease-out;
}
.die-item {
  background-color: #fefefe;
  box-shadow: inset -0.35rem 0.35rem 0.75rem rgba(0, 0, 0, 0.3),
    inset 0.5rem -0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-areas:
    "one two three"
    "four five six"
    "seven eight nine";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  padding: 1rem;
  width: 100%;
}
.dot {
  align-self: center;
  background-color: #676767;
  border-radius: 50%;
  box-shadow: inset -0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.5);
  display: block;
  height: 1.25rem;
  justify-self: center;
  width: 1.25rem;
}
.even-roll[data-roll="1"] {
  transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);
}
.even-roll[data-roll="2"] {
  transform: rotateX(450deg) rotateY(720deg) rotateZ(360deg);
}
.even-roll[data-roll="3"] {
  transform: rotateX(360deg) rotateY(630deg) rotateZ(360deg);
}
.even-roll[data-roll="4"] {
  transform: rotateX(360deg) rotateY(810deg) rotateZ(360deg);
}
.even-roll[data-roll="5"] {
  transform: rotateX(270deg) rotateY(720deg) rotateZ(360deg);
}
.even-roll[data-roll="6"] {
  transform: rotateX(360deg) rotateY(900deg) rotateZ(360deg);
}
.odd-roll[data-roll="1"] {
  transform: rotateX(-360deg) rotateY(-720deg) rotateZ(-360deg);
}
.odd-roll[data-roll="2"] {
  transform: rotateX(-270deg) rotateY(-720deg) rotateZ(-360deg);
}
.odd-roll[data-roll="3"] {
  transform: rotateX(-360deg) rotateY(-810deg) rotateZ(-360deg);
}
.odd-roll[data-roll="4"] {
  transform: rotateX(-360deg) rotateY(-630deg) rotateZ(-360deg);
}
.odd-roll[data-roll="5"] {
  transform: rotateX(-450deg) rotateY(-720deg) rotateZ(-360deg);
}
.odd-roll[data-roll="6"] {
  transform: rotateX(-360deg) rotateY(-900deg) rotateZ(-360deg);
}
[data-side="1"] {
  transform: rotate3d(0, 0, 0, 90deg) translateZ(4rem);
}
[data-side="2"] {
  transform: rotate3d(-1, 0, 0, 90deg) translateZ(4rem);
}
[data-side="3"] {
  transform: rotate3d(0, 1, 0, 90deg) translateZ(4rem);
}
[data-side="4"] {
  transform: rotate3d(0, -1, 0, 90deg) translateZ(4rem);
}
[data-side="5"] {
  transform: rotate3d(1, 0, 0, 90deg) translateZ(4rem);
}
[data-side="6"] {
  transform: rotate3d(1, 0, 0, 180deg) translateZ(4rem);
}
[data-side="1"] .dot:nth-of-type(1) {
  grid-area: five;
}
[data-side="2"] .dot:nth-of-type(1) {
  grid-area: one;
}
[data-side="2"] .dot:nth-of-type(2) {
  grid-area: nine;
}
[data-side="3"] .dot:nth-of-type(1) {
  grid-area: one;
}
[data-side="3"] .dot:nth-of-type(2) {
  grid-area: five;
}
[data-side="3"] .dot:nth-of-type(3) {
  grid-area: nine;
}
[data-side="4"] .dot:nth-of-type(1) {
  grid-area: one;
}
[data-side="4"] .dot:nth-of-type(2) {
  grid-area: three;
}
[data-side="4"] .dot:nth-of-type(3) {
  grid-area: seven;
}
[data-side="4"] .dot:nth-of-type(4) {
  grid-area: nine;
}
[data-side="5"] .dot:nth-of-type(1) {
  grid-area: one;
}
[data-side="5"] .dot:nth-of-type(2) {
  grid-area: three;
}
[data-side="5"] .dot:nth-of-type(3) {
  grid-area: five;
}
[data-side="5"] .dot:nth-of-type(4) {
  grid-area: seven;
}
[data-side="5"] .dot:nth-of-type(5) {
  grid-area: nine;
}
[data-side="6"] .dot:nth-of-type(1) {
  grid-area: one;
}
[data-side="6"] .dot:nth-of-type(2) {
  grid-area: three;
}
[data-side="6"] .dot:nth-of-type(3) {
  grid-area: four;
}
[data-side="6"] .dot:nth-of-type(4) {
  grid-area: six;
}
[data-side="6"] .dot:nth-of-type(5) {
  grid-area: seven;
}
[data-side="6"] .dot:nth-of-type(6) {
  grid-area: nine;
}

button {
  align-self: center;
  background-color: #efefef;
  border: none;
  color: #333;
  font-size: 1.25rem;
  font-weight: 700;
  justify-self: center;
  padding: 0.5rem 1rem;
}
@media (min-width: 900px) {
  .dice {
    perspective: 1300px;
  }
}
.textResultDices{
  position: fixed;
  border-radius: 25px;
  background: #d25b11;
  bottom: 20%;
  width: 80%;
  height: 10%;
  margin: auto;
  text-align: center;
}
</style>
