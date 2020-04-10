<template>
  <span id="app">
    <div class="topInfobar bg-danger"> 
        <div class="topElement text-warning">  <h5> Opponent: {{player.opponent.name}} </h5></div>
        <div class="topElement text-warning">  <h5> Flags <b-badge variant="light">{{player.opponent.numFlag}}</b-badge></h5></div>
        <div class="topElement text-warning">  <h5>Cannon<b-badge variant="light">{{player.opponent.numCannon}}</b-badge></h5></div>
        <div class="topElement text-warning">  <h5>Wall<b-badge variant="light">{{player.opponent.numWall}}</b-badge></h5></div>
     
    </div>
    <div class="PRSBar  bg-secondary ">
      <div class="buttons">
        <b-button v-b-modal.modal-1 variant="success" class="PRSbutton" @click='PRSClicked("paper")'>Paper</b-button>
        <b-button v-b-modal.modal-1 variant="success" class="PRSbutton" @click='PRSClicked("scissors")' >Scissors</b-button>
        <b-button  v-b-modal.modal-1 variant="success" class="PRSbutton" @click='PRSClicked("rock")'>Rock</b-button>
      </div>
    </div>
    <div class="bottomInfobar bg-primary">
         <div class="topElement text-warning">  <h5> name: {{player.mainplayer.name}}></h5></div>
        <div class="bottomElement text-warning">  <h5> Flags <b-badge variant="light">{{player.mainplayer.numFlag}}</b-badge></h5></div>
        <div class="bottomElement text-warning">  <h5>Canons<b-badge variant="light">{{player.mainplayer.numCannon}}</b-badge></h5></div>
        <div class="bottomElement text-warning">  <h5>Walls<b-badge variant="light">{{player.mainplayer.numWall}}</b-badge></h5></div>

    </div>

    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-entity
          id="mclaren"
          position="0 0 0"
          :scale="model.mclaren.scale"
          :gltf-model="model.mclaren.url"
        ></a-entity>
      </a-marker>

      <a-marker preset="kanji">
        <a-entity
          id="dinosaur"
          position="0 0 0"
          :scale="model.dinosaur.scale"
          :gltf-model="model.dinosaur.url"
        ></a-entity>
        <a-box color="red" position="0 2 -5" rotation="0 45 45" scale="2 2 2"></a-box>
      </a-marker>

      <a-entity camera></a-entity>
    </a-scene>
    
    <!-- The pop up after clicking PRS button -->
    <div class="PRSModal">
      <b-modal id="modal-1" centered hide-footer title="The reuslt is">
      <b-container>
        <div class="d-block text-center">
        <div v-if=" RPS.result === 'a_win'"> <!-- a_win case -->
        <h2> <span class="text-primary" >{{this.player.mainplayer.RPSChoice}}</span>  vs  <span class="text-danger">{{this.player.opponent.RPSChoice}}</span> </h2>
        <h3 class="text-success">'Congrats, You Win'</h3>
        <h3>'Please make a decision'</h3>
        <div>
          you can choose to build a wall/cannon, or destroy one of the opponent's facilities
        </div>
        
        <div class="actionPanel">
          <hr>
          <div class="build-buttons">
            <b-row class="d-flex align-items-center"> 
              <b-col cols="2" class="text-left" ><span>Build: </span></b-col>
              <b-col class="d-flex justify-content-start">
                <b-button :disabled="player.mainplayer.isMaxWall" size="sm" class="ml-1" @click='makeDecision("build_wall")'  >Wall</b-button>
                <b-button :disabled="player.mainplayer.isMaxCannon" size="sm" class="ml-1" @click='makeDecision("build_cannon")'>Canon</b-button></b-col>
              <b-col class="text-right text-monospace"> 
                Flag={{this.player.mainplayer.numFlag}} <br> 
                Cannon={{this.player.mainplayer.numCannon}}<br> 
                Wall={{this.player.mainplayer.numWall}}
                </b-col>
            </b-row>
          </div>
            <hr>
          <div class="attack-buttons">
            <b-row class="d-flex align-items-start">
              <b-col cols="2" class="text-left" ><span>Destroy: </span></b-col>
              <b-col class="d-flex justify-content-start">
                  <b-button :disabled="player.opponent.isNoWall || player.mainplayer.isNoCannon"  size="sm" class="ml-1" @click='makeDecision("destroy_wall")' >Wall</b-button> 
                  <b-button :disabled="player.opponent.isNoCannon || player.mainplayer.isNoCannon" size="sm" class="ml-1" @click='makeDecision("destroy_cannon")' >Cannon</b-button>
                  <b-button :disabled="player.opponent.isProtected || player.mainplayer.isNoCannon" size="sm" class="ml-1" @click='makeDecision("destroy_flag")'>Flag</b-button>              
              </b-col>
              <b-col class="text-right text-monospace">
                Flag={{this.player.opponent.numFlag}} <br> 
                Cannon={{this.player.opponent.numCannon}}<br> 
                Wall={{this.player.opponent.numWall}}
                </b-col>
            </b-row>
            
        </div>
        </div>
        </div>
        <div  v-else-if="RPS.result === 'b_win'">  <!-- b_win case -->
           <h2> <span class="text-primary" >{{this.player.mainplayer.RPSChoice}}</span>  vs  <span class="text-danger">{{this.player.opponent.RPSChoice}}</span> </h2>
           <h3 class="text-secondary">'Opps, You lose'</h3>
           
        </div>
        <div v-else> <!-- TIe case -->
        <h2> <span class="text-primary" >{{this.player.mainplayer.RPSChoice}}</span>  vs  <span class="text-danger">{{this.player.opponent.RPSChoice}}</span> </h2>
        <h3 class="text-info"> Tie, Please try again</h3>

        </div>
      </div>
      </b-container>
      
      </b-modal>
    </div>
  </span>
</template>



<script>
import GameScene from "./js/GameScene";
import Player from "./js/Player";

export default {
  name: "App",
  components: {},
  mounted() {
    console.log("mounted");
    // //initialised the gameScene with Players

    //Start to decide
  },
  data() {
    return {
      model: {
        mclaren: {
          url: " /gITF/mclaren/scene.gltf",
          position: "0 0 0",
          scale: "0.005 0.005 0.005"
        },
        dinosaur: {
          url:
            "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",
          position: "0 0 0",
          scale: "0.05 0.05 0.05"
        }
      },
      game: new GameScene(), 
      player: {
        mainplayer: new Player("billy", 0), // aiMode = 0
        opponent: new Player("opponent", 1), // aiMode = 0
      },
      RPS: {
        result: '' ,// a_win, b_win, tie
        winner: {},
        loser: {}
      }

    };
  },
  methods: {
    swap() {
      var temp = this.model.mclaren;
      this.model.mclaren = this.model.dinosaur;
      this.model.dinosaur = temp;
    },
    PRSClicked(choice){
      console.log(choice + "clicked")
      this.RPS.result = this.game.playRockPaperScissors(this.player.mainplayer, this.player.opponent, choice)
      console.log(this.RPS.result + " the result")
      this.RPS.winner = this.RPS.result === 'a_win' ? this.player.mainplayer: this.player.opponent
      this.RPS.loser = this.RPS.result === 'a_win' ? this.player.opponent: this.player.mainplayer

      if (this.RPS.result !== 'tie'){
          if(this.RPS.winner.isBot){
          console.log("the bot is start to make movement" )
        } else {
          console.log("the player is making a decision" )
        }
      }

      
      
    },
    makeDecision(decision){
      // window.alert(decision)
    
      switch (decision) {
        case 'build_wall':
          this.RPS.winner.buildwall()
          this.$bvToast.toast(` ${this.RPS.winner.name}has just built a wall`, {
          autoHideDelay: 5000,
          appendToast: false
        })
          break;
        case 'build_cannon':
          this.RPS.winner.buildCannon()
          this.$bvToast.toast(` ${this.RPS.winner.name} has just built a cannon`, {
          autoHideDelay: 5000,
          appendToast: false
        })
          break;
        case 'destroy_wall':
          this.RPS.winner.destroy(this.RPS.loser,'wall')
          this.$bvToast.toast(` ${this.RPS.winner.name} has just destroyed a wall from  ${this.RPS.loser.name} `, {
          autoHideDelay: 5000,
          appendToast: false
        })
          break;
        case 'destroy_cannon':
          this.RPS.winner.destroy(this.RPS.loser,'cannon')
          this.$bvToast.toast(` ${this.RPS.winner.name} has just destroyed a cannon from  ${this.RPS.loser.name} `, {
          autoHideDelay: 5000,
          appendToast: false
        })
          break;
        case 'destroy_flag':
          this.RPS.winner.destroy(this.RPS.loser,'flag')
          this.$bvToast.toast(` ${this.RPS.winner.name} has just destroyed a flag from  ${this.RPS.loser.name} `, {
          autoHideDelay: 5000,
          appendToast: false
        })
          break;
        default:
          break;
      }

      this.$bvModal.hide("modal-1")	
    }
  },
  watch: {
    player:{
        handler: function(newValue){
          if (newValue.mainplayer.numFlag == 0 || newValue.opponent.numFlag == 0){
            this.game.loser = this.player.mainplayer.numFlag == 0? this.player.mainplayer : this.player.opponent
            this.game.winner = this.player.mainplayer.numFlag > 0? this.player.mainplayer : this.player.opponent
            this.game.end()
            console.log("The winner is " + this.game.winner.name + " and the loser is " + this.game.loser.name)

          }
        },
        deep: true //enable for obj properties chagned
    },
  }
};
</script>

  <style>
.topInfobar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  
}

.topInfobar .topElement{
  padding: 0.5em;
  /* margin: 1em; */
  border: 2px;
  /* width: 7em; */
  justify-content: center;
  text-align: center;
}

.bottomInfobar {
  position: absolute;
  bottom: 5em;
  left: 0;
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
}

.bottomInfobar .bottomElement{
  padding: 0.5em;
  /* margin: 1em; */
  border: 2px;
  /* width: 7em; */
  justify-content: center;
  text-align: center;
}

.PRSBar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.PRSBar .PRSbutton {
  padding: 0.25em;
  margin: 1em;
  border-radius: 4px;
  border: none;
  background: white;
  color: black;
  width: 5em;
  height: 2em;
  /* z-index; */
}
</style>