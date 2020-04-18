<template>
  <span id="app">
    <div class="topInfobar bg-danger ">  
        <div class="topElement text-warning ">  <h5> Opponent: {{player.opponent.name}} </h5></div>
        <div class="topElement text-warning ">  <h5> Flag <b-badge variant="light">{{player.opponent.numFlag}}</b-badge></h5></div>
        <div class="topElement text-warning ">  <h5>Cannon <b-badge variant="light">{{player.opponent.numCannon}}</b-badge></h5></div>
        <div class="topElement text-warning ">  <h5>Wall <b-badge variant="light">{{player.opponent.numWall}}</b-badge></h5></div>
    </div>
     <div class="bottomInfobar bg-primary">
        <div class="bottomElement text-warning ">  <h5>Player: {{player.mainplayer.name}}</h5></div>
        <div class="bottomElement text-warning ">  <h5>Flag <b-badge variant="light">{{player.mainplayer.numFlag}}</b-badge></h5></div>
        <div class="bottomElement text-warning ">  <h5>Canon <b-badge variant="light">{{player.mainplayer.numCannon}}</b-badge></h5></div>
        <div class="bottomElement text-warning ">  <h5>Wall <b-badge variant="light">{{player.mainplayer.numWall}}</b-badge></h5></div>
    </div>

    <RPSBar :player='player' :RPS='RPS' :game='game'> </RPSBar>

   

    <a-scene embedded arjs>
      <!-- opponent -->
      <a-marker preset="hiro">
        <a-entity
          id="redcastle"
          :position="model.castle.position"
          :scale="model.castle.scale"
          :rotation="model.castle.rotation"
          :gltf-model="model.castle.url"
        ></a-entity>
        <a-entity
          id="redmainflag" 
          v-if ='player.opponent.numFlag >= 1'
          :position="model.flags.red.mainflag.position"
          :scale="model.flags.red.mainflag.scale"
          :rotation="model.flags.red.mainflag.rotation"
          :gltf-model="model.flags.red.mainflag.url"
        ></a-entity>
        <a-entity
          id="redleftflag"
          v-if ='player.opponent.numFlag >= 2'
          :position="model.flags.red.leftflag.position"
          :scale="model.flags.red.leftflag.scale"
          :rotation="model.flags.red.leftflag.rotation"
          :gltf-model="model.flags.red.leftflag.url"
        ></a-entity>
        <a-entity
          id="redrightflag"
          v-if ='player.opponent.numFlag >= 3'
          :position="model.flags.red.rightflag.position"
          :scale="model.flags.red.rightflag.scale"
          :rotation="model.flags.red.rightflag.rotation"
          :gltf-model="model.flags.red.rightflag.url"
        ></a-entity>

        <a-box
          id = "gravelWall"
          v-if ='player.opponent.numWall >= 1'
          :position = "model.wall.position" 
          :depth = "model.wall.depth"
          :height = "model.wall.height"
          :width = "player.opponent.numWall"
          :src = "model.wall.src"
        >
        </a-box>

            <!-- cannon -->
        <a-entity
        id = "leftCannon"
        v-if ='player.opponent.numCannon >= 1'
        :position = "model.cannon.leftCannon.position" 
        :scale = "model.cannon.leftCannon.scale" 
        :rotation = "model.cannon.leftCannon.rotation"
        :gltf-model= "model.cannon.leftCannon.url" 
        >
        
        </a-entity>
        <a-entity
        id = "rightCannon"
        v-if ='player.opponent.numCannon >= 2'
        :position = "model.cannon.rightCannon.position" 
        :scale = "model.cannon.rightCannon.scale" 
        :rotation = "model.cannon.rightCannon.rotation"
        :gltf-model= "model.cannon.rightCannon.url" 
        >
        </a-entity>
      </a-marker>


      <!-- mainplayer -->
      <a-marker preset="kanji">
        <a-entity
          id="bluecastle"
          :position="model.castle.position"
          :scale="model.castle.scale"
          :rotation="model.castle.rotation"
          :gltf-model="model.castle.url"
        ></a-entity>
        <a-entity
          id="bluemainflag"
          v-if ='player.mainplayer.numFlag >= 1'
          :position="model.flags.blue.mainflag.position"
          :scale="model.flags.blue.mainflag.scale"
          :rotation="model.flags.blue.mainflag.rotation"
          :gltf-model="model.flags.blue.mainflag.url"
        ></a-entity>
        <a-entity
          id="blueleftflag"
          v-if ='player.mainplayer.numFlag >= 2'
          :position="model.flags.blue.leftflag.position"
          :scale="model.flags.blue.leftflag.scale"
          :rotation="model.flags.blue.leftflag.rotation"
          :gltf-model="model.flags.blue.leftflag.url"
        ></a-entity>
        <a-entity
          id="bluerightflag"
          v-if ='player.mainplayer.numFlag >= 3'
          :position="model.flags.blue.rightflag.position"
          :scale="model.flags.blue.rightflag.scale"
          :rotation="model.flags.blue.rightflag.rotation"
          :gltf-model="model.flags.blue.rightflag.url"
        ></a-entity>

        <a-box
          id = "bluegravelWall"
          v-if ='player.mainplayer.numWall >= 1'
          :position = "model.wall.position" 
          :depth = "model.wall.depth"
          :height = "model.wall.height"
          :width = "player.mainplayer.numWall"
          :src = "model.wall.src"
        >

        </a-box>

      <!-- cannon -->
        <a-entity
        id = "leftCannon"
        v-if ='player.mainplayer.numCannon >= 1'
        :position = "model.cannon.leftCannon.position" 
        :scale = "model.cannon.leftCannon.scale" 
        :rotation = "model.cannon.leftCannon.rotation"
        :gltf-model= "model.cannon.leftCannon.url" 
        >
        
        </a-entity>
        <a-entity
        id = "rightCannon"
        v-if ='player.mainplayer.numCannon >= 2'
        :position = "model.cannon.rightCannon.position" 
        :scale = "model.cannon.rightCannon.scale" 
        :rotation = "model.cannon.rightCannon.rotation"
        :gltf-model= "model.cannon.rightCannon.url" 
        >
        </a-entity>

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
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if(isSafari){this.$swal(`<h5> You are using <strong>Safari</strong>, To get enhanced experience,you may <b>hide the toolbar</b> under the AA icon at top left corner</h5>`)}
  },
  data() {
    return {
      game: new GameScene(), 
      player: {
        mainplayer: new Player("billy", 0), // aiMode = 0
        opponent: new Player("opponent", 1), // aiMode = 0
      },
      RPS: {
        result: '' ,// a_win, b_win, tie
        winner: {},
        loser: {}
      },

      model: {
        castle: {
          url: "/glTF/castle/scene.gltf",
          position: "0 0 0",
          rotation: "90 0 0",
          scale: "0.01 0.01 0.01"
        },
        flags:{
          blue:{
            mainflag: {
              url: "/glTF/flag_blue/scene.gltf",
              position: "0 0 0",
              rotation: "270 90 90",
              scale: "0.5 0.5 0.5"
            },
            leftflag: {
              url: "/glTF/flag_blue/scene.gltf",
              position: "-0.5 0 0",
              rotation: "270 90 90",
              scale: "0.5 0.5 0.5"
            },
            rightflag: {
              url: "/glTF/flag_blue/scene.gltf",
              position: "0.5 0 0",
              rotation: "270 90 90",
              scale: "0.5 0.5 0.5"
            },
          },
          red:{
            mainflag: {
              url: "/glTF/flag_red/scene.gltf",
              position: "0 0 0",
              rotation: "90 0 0",
              scale: "0.5 0.5 0.5"
            },
            leftflag: {
              url: "/glTF/flag_red/scene.gltf",
              position: "-0.5 0 0",
              rotation: "90 0 0",
              scale: "0.5 0.5 0.5"
            },
            rightflag: {
              url: "/glTF/flag_red/scene.gltf",
              position: "0.5 0 0",
              rotation: "90 0 0",
              scale: "0.5 0.5 0.5"
            },
          },
        },
        wall:{
          position: "0 -1 0",
          depth: 0.5,
          height: 0.3,
          width: 1, //level 1, 2,3 
          rotation: "90 0 0",
          src: "/texture/gravel.png",
        },

        cannon: {
          leftCannon: {
            url: "/glTF/simple_cannon/scene.gltf",
            position: "-0.9 0 0",
            rotation: "90 0 0",
            scale: "0.001 0.001  0.001"
          },
          rightCannon: {
            url: "/glTF/simple_cannon/scene.gltf",
            position: "0.9 0 0",
            rotation: "90 0 0",
            scale: "0.001 0.001  0.001"
          },
          
        },
      }

    };
  },
  methods: {},
  computed:{
  
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
  border: 2px;
  justify-content: center;
  text-align: center;
}


.bottomInfobar {
  position: absolute;
  bottom: 5em;
  right: 0;
  width: 100%;
  height: 3.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
}

.bottomInfobar .bottomElement{
  padding: 0.5em;
  border: 2px;
  justify-content: center;
  text-align: center;
}

</style>