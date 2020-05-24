$(document).ready(function () { 
  var game = [];                                //setting an new game
  var counter = 0;                              //setting new game counter
  var j = 0;                                    //setting new counter for checking player clicks with game array
  var i = 0;                                    //setting counter for looping through array and lighting up the board
  var demo = 0                                  //setting a variable that determines weather a demo is in proces (demo = 1) or not; prevents player from clicking while demo is in proces. 
  $(".circle2").hide();                         //hides the circular edge that indicates that it's the players turn

//   PLAYER ACTION
  $(".circle")
    .children()
    .children()
    .click(function () {                        //applies to all colored circle slices
      if (game.length == 0 || demo == 1) {      //game hasn't started or demo is in proces: do nothing on click
      } else {
        var color = $(this).attr("class").split(' ')[0];      //get the class name of the clicked element and match the color to a number (index) using the switch statement.
        console.log(color)
        var index;
        switch (color) {
          case "red-4-inner":
            index = 1;
            break;
          case "blue-4-inner":
            index = 2;
            break;
          case "green-4-inner":
            index = 3;
            break;
          case "yellow-4-inner":
            index = 4;
            break;
        }
        console.log(index);
        if (index == game[j] && game.length == j + 1) { //check if the index of tile clicked matches the index in the array sequence AND if it's the last in the array
          $(this).fadeOut(500);                         
          $(this).fadeIn(500);
          game4();                                      //end player turn and start demo sequence plus new color
        } else if (index == game[j]) {                  //check if the index of tile clicked matches the index
          $(this).fadeOut(500);
          $(this).fadeIn(500);
          j = j + 1;                                    //increments j counter: for the next click it will check the next item in the game array
        } else {
          $("#startnewgame4").fadeIn(1000);             //player made a mistake: new game is set.
        $(".circle2").hide();
          game = [];
          counter = 0;
          j = 0;
        }
      }
    });

  $("#startnewgame4").click(function () {               //start new game button starts a new game
    demo = 1                                            //sets demo
    game = [];                                          //sets new game array
    $(this).fadeOut(500);                               //fadeOut start button
    setTimeout(function () {                            //sets time out for demo, because we want to wait until start button has faded and give the player a second to concentrate.
      let colorindex = Math.ceil(Math.random() * 4);    //selects a random number between 1 and 4
      game.push(colorindex);                            //pushes number in to game array     

      switch (colorindex) {                             //matches number to game tile and toggleFades it.
        case 1:
          $(".red-4-inner").fadeOut(1000);
          $(".red-4-inner").fadeIn(1000);
          break;
        case 2:
          $(".blue-4-inner").fadeOut(1000);
          $(".blue-4-inner").fadeIn(1000);
          break;
        case 3:
          $(".green-4-inner").fadeOut(1000);
          $(".green-4-inner").fadeIn(1000);
          break;
        case 4:
          $(".yellow-4-inner").fadeOut(1000);
          $(".yellow-4-inner").fadeIn(1000);
          break;
      }
      console.log(game);
        setTimeout(function(){                          //sets time out before "player turn" circle shows, so that it shows after the tile has faded back in.
      $(".circle2").show();
      demo = 0;
      }, 2000);
    }, 1000);
  });

  function lightUp() {                                  //function for lighting up the tiles of the sequence in the demo
    setTimeout(function () {                            //sets time out so that tiles light up one after the other and not near simultaneously
      switch (game[i]) {                                //selects the color tile based on the game array item.
        case 1:
          $(".red-4-inner").fadeOut(1000);
          $(".red-4-inner").fadeIn(1000);
          break;
        case 2:
          $(".blue-4-inner").fadeOut(1000);
          $(".blue-4-inner").fadeIn(1000);
          break;
        case 3:
          $(".green-4-inner").fadeOut(1000);
          $(".green-4-inner").fadeIn(1000);
          break;
        case 4:
          $(".yellow-4-inner").fadeOut(1000);
          $(".yellow-4-inner").fadeIn(1000);
          break;
      }
      i++;
      if (i <= counter) {                                   
        lightUp();
      } else {
        newColor();                                         //if the i counter reaches the end of the game array then a new color will be added to the array and demo-ed
      }
    }, 1700);
  }

  function game4() {                                        //function which starts demo of the game so far and ads a new color tile to the sequence
      demo = 1                                              //sets demo

    setTimeout(function () {                                    
      i = 0;
      lightUp();                                            //calls the light up Loop function which demo-es the game array so far.
    setTimeout(function(){
      $(".circle2").hide();                                 //hides "player turn" circle, but waits until the players last click has fully faded back in again
      }, 1000);
    }, 500);
  }

  function newColor() {                                     //function which demo'es and adds to the array a new color tile
    setTimeout(function () {
      let colorindex = Math.ceil(Math.random() * 4);        //function very similar to startnewgame function; please refer to notes there.
      game.push(colorindex);

      switch (colorindex) {
        case 1:
          $(".red-4-inner").fadeOut(1000);
          $(".red-4-inner").fadeIn(1000);
          break;
        case 2:
          $(".blue-4-inner").fadeOut(1000);
          $(".blue-4-inner").fadeIn(1000);
          break;
        case 3:
          $(".green-4-inner").fadeOut(1000);
          $(".green-4-inner").fadeIn(1000);
          break;
        case 4:
          $(".yellow-4-inner").fadeOut(1000);
          $(".yellow-4-inner").fadeIn(1000);
          break;
      }
      counter = counter + 1;                        //sets counter to the last game array item, for loop matching purposes in other function.
      console.log(game);
      console.log(`counter = ${counter}`);
      j = 0;                                        //resets j for matching player clicks to game array in new turn.
      
      setTimeout(function(){
      $(".circle2").show();                         //sets demo to inactive and shows circle indicating player's turn.
      demo = 0;
      }, 2000);
    }, 1700);
  }
});
