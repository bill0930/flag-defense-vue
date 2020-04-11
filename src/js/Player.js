class Player {
    constructor(name, isBot){
      this.name = name;
      this.numFlag = 3; 
      this.numWall = 1; //maximum = 3
      this.numCannon = 0; //maximum = 2
      this.RPSChoice = null; //chose chohice for RockPaperScissors
      this.isBot = isBot; //1 is for aiMode, 0 is for real people 
    }

    get isProtected(){
      return this.numWall > 0
    }

    get isMaxWall() {
      return this.numWall == 3
    }

    get isHavingFlag(){
      return this.numFlag > 0
    }

    get isMaxCannon() {
      return this.numCannon == 2
    }

    get isNoWall() {
      return this.numWall == 0
    }

    get isNoCannon() {
      return this.numCannon == 0
    }

    get isHavingCannon(){
      return this.numCannon > 0
    }
  
    buildwall(){

      if (this.numWall < 3) {
        this.numWall += 1
        console.log("the numWall of " + this.name + "has just increased")
      }
    }
    lostWall(){
        if (this.numWall > 0) {
          this.numWall -= 1
          console.log("the numWall of " + this.name + "has just decreased")
        } else {
          console.log("buildWall failed due to the min numWall = 0")
        }
      }
    buildCannon(){
      if (this.numCannon < 2) {
        this.numCannon += 1
        console.log("the numCannon of " + this.name + "has just increased")
      } 
    }
    lostCannon(){
        if (this.numCannon > 0) {
          this.numCannon -= 1
          console.log("the numCannon of " + this.name + "has just lost")
        } else {
          console.log("numCannon failed due to the maximum numWall = 3")
        }
      }
    lostFlag(){
      if (this.numFlag > 0) {
        this.numFlag -= 1
        console.log("the numFlag of " + this.name + "has just lost")
      } else {
        console.log("numCannon failed due to the maximum numWall = 3")
      }
    }

    destroy(player, item){ // 

        switch (item) {
          case "cannon":
            player.lostCannon();
            break;
          case "wall":
            player.lostWall();
            break;
          case "flag":
            player.lostFlag();
            break;
          default:
            break;
        }
        console.log("attacked" + player.name)
    
    
    }
    reset(){
      this.numFlag = 3; 
      this.numWall = 1; //maximum = 3
      this.numCannon = 0; //maximum = 2
      this.RPSChoice = null; //chose chohice for RockPaperScissors
    }
  }
  
  
  
  
  export default Player;