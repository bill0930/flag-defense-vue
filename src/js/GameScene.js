const GameState = Object.freeze({"ENTERED":1, "RPS_STATE":2, "END_STATE":3})

class GameScene {
    
    constructor(){
        this.state = GameState.ENTERED
        this.gameWinner = null;
        this.gameLoser = null;

      }
     start(){
       this.state = GameState.RPS_STATE

     }
    update(){
      
    }
    end(){
      window.alert("the winner is "+ this.gameWinner.name, "this.loser is "+ this.gameLoser.name)
    }

    playRockPaperScissors(player, opponent, choice){
      // RockPaperScissors

      const randomRPSChoice = ['rock', 'paper', 'scissors']
      player.RPSChoice = choice
      opponent.RPSChoice =  randomRPSChoice[Math.floor(Math.random()* randomRPSChoice.length)];

      const result = this.checkWinLose(player.RPSChoice, opponent.RPSChoice)
      return result
    }

    checkWinLose(chocie_a, chocie_b){
      if (chocie_a == chocie_b) {
        return 'tie'
      }
      else if (chocie_a == 'paper'){
        if(chocie_b == 'rock') {
          return 'a_win'
        }
        if (chocie_b == 'scissors'){
          return 'b_win'
        }
      }
      else if (chocie_a == 'rock'){
        if(chocie_b == 'scissors') {
          return 'a_win'
        }
        if (chocie_b == 'paper'){
          return 'b_win'
        }
      }
      else if (chocie_a == 'scissors'){
        if(chocie_b == 'paper') {
          return 'a_win'
        }
        if (chocie_b == 'rock'){
          return 'b_win'
        }
      }
    }


    makeDecision(winner, loser){ //Pass Player time
      // winner do thing
      console.log("the playRockPaperScissors() loser is" + loser.name)

      //loser do thing
    }

}

export default GameScene;