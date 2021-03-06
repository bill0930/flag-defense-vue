/**
  * Class representing GameScene
   * @property {Player} winner   -A Player type object that indicate the game winner 
   * @property {Player} loser    -A Player type object that indicate the game loser
 */
 
class GameScene {

    constructor(){
        this.winner = null;
        this.loser = null;

      }
    /**
     * @param  {Player} player 
     * @param  {Player} opponent 
     * @param  {String} choice  The choice that the player made  ['paper','rock','scissors']
     * @returns {String} ['tie','a_win','b_win]
     */
    playRockPaperScissors(player, opponent, choice){
      // RockPaperScissors
      const randomRPSChoice = ['rock', 'paper', 'scissors']
      player.RPSChoice = choice
      opponent.RPSChoice =  randomRPSChoice[Math.floor(Math.random()* randomRPSChoice.length)];
      
      const result = this.checkWinLose(player.RPSChoice, opponent.RPSChoice)
      return result
    }
    /**
     * @param  {String} chocie_a ['rock','paper','scissors']
     * @param  {String} chocie_b ['rock','paper','scissors']
     * @returns {String} ['tie','a_win','b_win]
     */
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


}

export default GameScene;