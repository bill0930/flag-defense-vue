
const GameState = Object.freeze({"ENTERED":1, "STARTED":2, "RUNNING":3})

class GameScene {
    
    constructor(player1, player2){
        this.state = GameState.ENTERED
        this.gameWinner = null;
        this.gameLoser = null;
        this.player1 = player1;
        this.player2 = player2;
      }
     start(){

     }
    // init(){
    //   while(true){
    //     switch (this.state) {
    //       case GameState.STARTED:
            
    //         break;
    //       case GameState.RUNNING:
    //         // 
    //         break;
        
    //       default:
    //         break;
    //     }
    //   }
     
      //default numFlag both are = 3
    //   while(this.gameWinner == null && this.gameLoser == null){  
    //     this.playRockPaperScissors() // change the player1 && player2 status
    //     this.player1.status == "win"? this.makeDecision(this.player1, this.player2) 
    //                                 : this.makeDecision(this.player2, this.player1)
                                    
    //  }
    

    update(){
      
    }
    end(){
      window.alert("the winner is "+ this.gameWinner.name, "this.loser is "+ this.gameLoser.name)
    }

    playRockPaperScissors(){
      this.player1.RPSChoice = "paper"
      this.player2.RPSChoice = "rock"
      this.player1.status = "win"
      this.player2.status = "lose"
    }

    makeDecision(winner, loser){ //Pass Player time
      // winner do thing
      console.log("the playRockPaperScissors() loser is" + loser.name)

      //loser do thing
    }

}

export default GameScene;