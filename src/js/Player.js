/**
  * Class representing GameScene
   * @property {String} name      - the player name
   * @property {Integer} numFlag  - the number of flag that the player owns . initate = 3
   * @property {Integer} numWall  - the number/level of wall that the player owns. initiate = 1, max = 3
   * @property {Integer} numCannon  -the number/ of cannons that the player owns. initiate = 0, max = 2
   * @property {String} RPSChoice  - the Rock-Paper-Scissor selection   'rock'/'paper'/'scissors
   * @property {Boolean} isBot      -the indicator for real player/bot player
 */

class Player {
    /**
     * @param  {String} name  The Player name 
     * @param  {Boolean} isBot 1 if it is a bot , 0 if it is a real player
     */
    constructor(name, isBot){
      this.name = name;
      this.numFlag = 3; 
      this.numWall = 1; //maximum = 3
      this.numCannon = 0; //maximum = 2
      this.RPSChoice = null; //chose chohice for RockPaperScissors
      this.isBot = isBot; //1 is for aiMode, 0 is for real people 
    }
    /** 
     */
    get isHavingWall(){
      return this.numWall > 0
    }
  
    /**
     */
    get isProtected(){
      return this.numWall > 0
    }
  
    /**
     */
    get isMaxWall() {
      return this.numWall == 3
    }
    /**
     */
    get isHavingFlag(){
      return this.numFlag > 0
    }
    /**
     */
    get isMaxCannon() {
      return this.numCannon == 2
    }
    /**
     */
    get isNoWall() {
      return this.numWall == 0
    }
    /**
     */
    get isNoCannon() {
      return this.numCannon == 0
    }
    /**
     */
    get isHavingCannon(){
      return this.numCannon > 0
    }
    /**
     */
    buildwall(){

      if (this.numWall < 3) {
        this.numWall += 1
        console.log("the numWall of " + this.name + "has just increased")
      }
    }
    /**
     */
    lostWall(){
        if (this.numWall > 0) {
          this.numWall -= 1
          console.log("the numWall of " + this.name + "has just decreased")
        } else {
          console.log("buildWall failed due to the min numWall = 0")
        }
    }
    /**
     */
    buildCannon(){
      if (this.numCannon < 2) {
        this.numCannon += 1
        console.log("the numCannon of " + this.name + "has just increased")
      } 
    }
    /**
     */
    lostCannon(){
        if (this.numCannon > 0) {
          this.numCannon -= 1
          console.log("the numCannon of " + this.name + "has just lost")
        } else {
          console.log("numCannon failed due to the maximum numWall = 3")
        }
    }
    /**
     */
    lostFlag(){
      if (this.numFlag > 0) {
        this.numFlag -= 1
        console.log("the numFlag of " + this.name + "has just lost")
      } else {
        console.log("numCannon failed due to the maximum numWall = 3")
      }
    }
    /**
     * @param  {Player} player 
     * @param  {String} item ['cannon','wall','flag'],
     */
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
        // console.log("attacked" + player.name)
    
 
    }
    /**
     */
    reset(){
      this.numFlag = 3; 
      this.numWall = 1; //maximum = 3
      this.numCannon = 0; //maximum = 2
      this.RPSChoice = null; //chose chohice for RockPaperScissors
    }
  }
  
  
  
  
  export default Player;