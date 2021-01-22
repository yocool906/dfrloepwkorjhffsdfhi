class Game {
    constructor(){}
  //refer game state value in database
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  //update value in database
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  // refer the player count value whne we press sbumit button .. refer database once and then everytime in line 24
    async start(){
      if(gameState === 0){
        player = new Player();
  
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
  
        //position of the names with distance
        var display_position = 130;
        //we dotn use the original for loop bcos we dont want numbers we want strings.. with name and postions
  
        //player index =1 in first tab throughout the game .. personal index of the player
        for(var plr in allPlayers){
          if (plr === "player" + player.index)
         // plr will contain player name
            fill("yellow");
          else
            fill("black");
  
          display_position+=20;
          textSize(15);
  
          //y position is the display position.. next for each player
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  //incrase the distance by 50 with uparrow and then update it in database also player.update();
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
    }
  }