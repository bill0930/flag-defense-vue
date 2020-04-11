

class GameScene {
    
    constructor(){
        this.winner = null;
        this.loser = null;

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

    end(){
      console.log("the game end!!!")
    }

}

export default GameScene;