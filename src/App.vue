<template>
  <span id="app">
    <div class="topInfobar bg-danger"> 
        <div class="topElement text-warning">  <h5> Opponent: {{player.opponent.name}} </h5></div>
        <div class="topElement text-warning">  <h5> Flags <b-badge variant="light">{{player.opponent.numFlag}}</b-badge></h5></div>
        <div class="topElement text-warning">  <h5>Cannon<b-badge variant="light">{{player.opponent.numCannon}}</b-badge></h5></div>
        <div class="topElement text-warning">  <h5>Wall<b-badge variant="light">{{player.opponent.numWall}}</b-badge></h5></div>

    </div>
    
    <RPSBar :player='player' :RPS='RPS' :game='game'> </RPSBar>

    <div class="bottomInfobar bg-primary">
         <div class="bottomElement text-warning">  <h5> name: {{player.mainplayer.name}}</h5></div>
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

  </span>
</template>



<script>
import RPSBar from './components/RPSBar'
import GameScene from "./js/GameScene";
import Player from "./js/Player";

export default {
  name: "App",
  components: {
    RPSBar
  },
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
    
  },
  watch: {
    player:{
        handler: function(newValue){
          if (newValue.mainplayer.numFlag == 0 || newValue.opponent.numFlag == 0){
            this.game.loser = this.player.mainplayer.numFlag == 0? this.player.mainplayer : this.player.opponent
            this.game.winner = this.player.mainplayer.numFlag > 0? this.player.mainplayer : this.player.opponent
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




</style>