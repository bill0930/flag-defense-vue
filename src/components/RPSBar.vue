<template>
  <div id="RPSBar">
    <div class="RPSBar buttons bg-secondary">
      <div v-if ='game.winner == null'>
          <b-button
          v-b-modal.modal-1
          variant="success"
          class="RPSbutton"
          @click='RPSClicked("paper")'
        >Paper</b-button>
        <b-button
          v-b-modal.modal-1
          variant="success"
          class="RPSbutton"
          @click='RPSClicked("scissors")'
        >Scissors</b-button>
        <b-button
          v-b-modal.modal-1
          variant="success"
          class="RPSbutton"
          @click='RPSClicked("rock")'
        >Rock</b-button>
      </div>
      <div v-else>
          <h3> winner:<u>{{this.game.winner.name}}</u> loser: <u>{{this.game.loser.name}} </u> <b-button
          variant="info"
          @click='reset()'
        >RESET</b-button></h3>

      </div>
    </div>

    <b-modal id="modal-1" centered hide-header hide-footer>
      <b-container>
        <div class="d-block text-center">
          <div v-if=" RPS.result === 'a_win'">
            <!-- a_win case -->
            <h2>
              <span class="text-primary">{{this.player.mainplayer.RPSChoice}}</span> vs
              <span class="text-danger">{{this.player.opponent.RPSChoice}}</span>
            </h2>
            <h3 class="text-success">'Congrats, You Win'</h3>
            <h3>'Please make a decision'</h3>

            <div class="actionPanel">
              <hr />
              <div class="build-buttons">
                <b-row class="d-flex align-items-center">
                  <b-col cols="2" class="text-left">
                    <span>Build:</span>
                  </b-col>
                  <b-col class="d-flex justify-content-start">
                    <b-button
                      :disabled="player.mainplayer.isMaxWall"
                      size="sm"
                      class="ml-1"
                      @click="makeDecision('build_wall')"
                    >Wall</b-button>
                    <b-button
                      :disabled="player.mainplayer.isMaxCannon"
                      size="sm"
                      class="ml-1"
                      @click="makeDecision('build_cannon')"
                    >Cannon</b-button>
                  </b-col>
                  <b-col class="text-right text-monospace">
                    Flag={{this.player.mainplayer.numFlag}}
                    <br />
                    Cannon={{this.player.mainplayer.numCannon}}
                    <br />
                    Wall={{this.player.mainplayer.numWall}}
                  </b-col>
                </b-row>
              </div>
              <hr />
              <div class="attack-buttons">
                <b-row class="d-flex align-items-center">
                  <b-col cols="2" class="text-left">
                    <span>Destroy:</span>
                  </b-col>
                  <b-col class="d-flex justify-content-center">
                    <b-button
                      :disabled="player.opponent.isNoWall || player.mainplayer.isNoCannon"
                      size="sm"
                      class="ml-1"
                      @click="makeDecision('destroy_wall')"
                    >Wall</b-button>
                    <b-button
                      :disabled="player.opponent.isNoCannon || player.mainplayer.isNoCannon"
                      size="sm"
                      class="ml-1"
                      @click="makeDecision('destroy_cannon')"
                    >Cannon</b-button>
                    <b-button
                      :disabled="player.opponent.isProtected || player.mainplayer.isNoCannon"
                      size="sm"
                      class="ml-1"
                      @click="makeDecision('destroy_flag')"
                    >Flag</b-button>
                  </b-col>
                  <b-col class="text-right text-monospace">
                    Flag={{this.player.opponent.numFlag}}
                    <br />
                    Cannon={{this.player.opponent.numCannon}}
                    <br />
                    Wall={{this.player.opponent.numWall}}
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
          <div v-else-if="RPS.result === 'b_win'">
            <!-- b_win case -->
            <h2>
              <span class="text-primary">{{this.player.mainplayer.RPSChoice}}</span> vs
              <span class="text-danger">{{this.player.opponent.RPSChoice}}</span>
            </h2>
            <h3 class="text-secondary">'Opps, You lose'</h3>
              
          </div>
          <div v-else>
            <!-- TIe case -->
            <h2>
              <span class="text-primary">{{this.player.mainplayer.RPSChoice}}</span> vs
              <span class="text-danger">{{this.player.opponent.RPSChoice}}</span>
            </h2>
            <h3 class="text-info">Tie, Please try again</h3>
          </div>
        </div>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "RPSBar",
  components: {},
  props: {
    RPS: Object,
    player: Object,
    game: Object
  },
  data() {
    return {};
  },
  methods: {
    RPSClicked(choice) {
      console.log(choice + "clicked");
      this.RPS.result = this.game.playRockPaperScissors(
        this.player.mainplayer,
        this.player.opponent,
        choice
      );
      console.log(this.RPS.result + " the result");
      this.RPS.winner =
        this.RPS.result === "a_win"
          ? this.player.mainplayer
          : this.player.opponent;
      this.RPS.loser =
        this.RPS.result === "a_win"
          ? this.player.opponent
          : this.player.mainplayer;

      if (this.RPS.result !== "tie") {
        if (this.RPS.winner.isBot) {
          console.log("the bot is start to make movement");
          this.botDecision(this.RPS.winner, this.RPS.loser)
        } else {
          console.log("the player is making a decision");
        }
      }
    },
    makeDecision(decision) {
      const payload = {
        action: "", // built/ destory
        item: "", //wall/cannon/falg
        winner: this.RPS.winner,
        loser: this.RPS.loser,
      };

      switch (decision) {
        case "build_wall":
          payload.action = "build";
          payload.item = " a wall";
          this.RPS.winner.buildwall();
          break;

        case "build_cannon":
          payload.action = "build";
          payload.item = "a cannon";
          this.RPS.winner.buildCannon();
          break;

        case "destroy_wall":
          payload.action = "destroy";
          payload.item = "a wall";
          this.RPS.winner.destroy(this.RPS.loser, "wall");

          break;
        case "destroy_cannon":
          payload.action = "destroy";
          payload.item = "a cannon";
          this.RPS.winner.destroy(this.RPS.loser, "cannon");

          break;
        case "destroy_flag":
          payload.action = "destroy";
          payload.item = "a flag";
          this.RPS.winner.destroy(this.RPS.loser, "flag");
          break;
        default:
          payload.action = "no_action";
          break;
      }
      this.$toasted.global.makeDecision(payload);
      this.$bvModal.hide("modal-1");
    },
    botDecision(bot, player){
      //last chance
      if(bot.numFlag == 1 && !bot.isProtected){this.makeDecision('build_wall');}
      // win the game
      else if(bot.isHavingCannon && !player.isProtected){this.makeDecision('destroy_flag');}
      else if (bot.isHavingCannon && player.isProtected && !player.isHavingCannon){ this.makeDecision('destroy_wall')}
      else if (bot.isHavingCannon && player.isProtected && player.isHavingCannon){ 
        const ranNum = Math.floor(Math.random() *2 );
        ranNum == 1 ? this.makeDecision('destroy_wall') : this.makeDecision('destroy_cannon')
      }
      else if (!bot.isHavingCannon && player.isProtected && player.isHavingCannon){ this.makeDecision('build_wall')}
      else if (!bot.isHavingCannon && player.isProtected && !player.isHavingCannon){ this.makeDecision('build_cannon')}
    },

    reset(){
      this.game.winner = null;
      this.game.loser = null;
      this.player.mainplayer.reset();
      this.player.opponent.reset();
    }
  }
}
</script>

<style scoped>
.RPSBar {
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

.RPSBar .RPSbutton {
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
