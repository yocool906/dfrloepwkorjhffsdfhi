class Player {
    constructor(){
      //properties of a player class.. name distance and index....
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  //this.name and this,distance is of this class
  
    //change to distance and name..and players wil come player
  
    /// player index is a variable which has the path players/player 1/player 2.. it goes to player index and thne sees the path and then
    //sets the name and distance//this.m=name and this.distance is the property of player class
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  //we use static funciton to associate with all players ..no player can be modified so we make static ,we access it with class
  //no making changes too player1.. 2 wil not bocme 1..
  //allplayers witll have whater is there is players
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }