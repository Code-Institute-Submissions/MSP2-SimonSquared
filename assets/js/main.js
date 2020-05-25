$(document).ready(function () {
  let game = []; //setting an new game
  let counter = 0; //setting new game counter
  let j = 0; //setting new counter for checking player clicks with game array
  let i = 0; //setting counter for looping through array and lighting up the board
  let demo = 0; //setting a variable that determines weather a demo is in proces (demo = 1) or not; prevents player from clicking while demo is in proces.
  let turn = 0; //determines turning challenge is inactive
  let turner; //creates variable to contain for setInterval function
  let tiles; //creates a variable that contains the integer corresponding with the amount of tiles in the game.
  $(".circle2").hide(); //hides the circular edge that indicates that it's the players turn
  $("#gameover").hide(); //hides game over indicator
  $(".aboutfield").hide(); //hides aboutfield information div
  $("#counter").hide(); //hides aboutfield information div
  $(".circle").children().children().removeClass("point"); //changes cursor properties to indicate tiles are not clickable
setTiles();
/** EVENT HANDLERS */
  $("#aboutdiv").click(function () {
    //toggles aboutfield on the click of about button
    $(".aboutfield").toggle();
  });

  $("#exit").click(function () {
    //closes aboutfield on the click of close button
    $(".aboutfield").hide();
  });

   /** PLAYER ACTION */ 
  $(".circle")
    .children()
    .children()   //COMMENT HERE ON WHY THIS WAY
    .click(function () {
      //applies to all colored circle slices
      if (game.length == 0 || demo == 1) {
        //game hasn't started or demo is in proces: do nothing on click
      } else {
        let color = $(this).attr("class").split(" ")[2]; //gets first class name
        let index;
        switch (color) {                //THERE IS A POSSIBLE OTHER WAY: DICK WILL EXPLAIN
          case "red":
            index = 1;
            break;
          case "blue":
            index = 2;
            break;
          case "green":
            index = 3;
            break;
          case "yellow":
            index = 4;
            break;
        case "purple":
            index = 5;
            break;
          case "orange":
            index = 6;
            break;
          case "pink":
            index = 7;
            break;
          case "turq":
            index = 8;
            break;
        }
        if (index === game[j] && game.length === j + 1) { //USE TRIPLE EQUAL SIGNS
          //check if the index of tile clicked matches the index in the array sequence AND if it's the last in the array
          $(this).fadeOut(250);
          $(this).fadeIn(250);
          gameDemo(); //end player turn and start demo sequence plus new color
        } else if (index === game[j]) {
          //check if the index of tile clicked matches the index
          $(this).fadeOut(250);
          $(this).fadeIn(250);
          j = j + 1; //increments j counter: for the next click it will check the next item in the game array
        } else {
          angle = 0; //sets start angle for turnchallenge at 0
          turn = 0; //determines turn challenge is inactive.
          clearInterval(turner); //clears the setInterval function which stops the rotation.
          $(".circle").css("transform", "rotate(0deg)"); //makes sure the circle and it's (text) contents is right side up
          $(".turnchallenge").html("Difficulty"); //sets the level header back to "Difficulty"
          $("#gameover").fadeIn(1000); //player made a mistake: game over is shown, prompt for new game
          $(".circle2").hide(); //hides "player turn" indicator circle
          setTimeout(function () {
            $("#counter").hide();
            $("#gameover").fadeOut(1000);
            $("#startnewgame").fadeIn(1000);
            game = [];
            counter = 0;
            j = 0;
          }, 3000);
        }
      }
    });

  /** STARTING OF NEW GAME*/ //
  $("#startnewgame").click(function () {
    //start new game button starts a new game
    $(".circle").children().children().removeClass("point"); //changes cursor properties to indicate tiles are not clickable
    $("#counter").html(`${counter + 1} `); //sets level displayer to 0th level
    $("#counter").show(); //show level counter
    demo = 1; //sets demo
    game = []; //sets new game array
    $(this).fadeOut(500); //fadeOut start button
    setTimeout(function () {
      //sets time out for demo, because we want to wait until start button has faded and give the player a second to concentrate.
      let colorindex = Math.ceil(Math.random() * tiles); //selects a random number between 1 and 4/6/8
      game.push(colorindex); //pushes number in to game array
      switch (
        colorindex //matches number to game tile and toggleFades it.
      ) {
        case 1:
          $(".red").fadeOut(500);
          $(".red").fadeIn(500);
          break;
        case 2:
          $(".blue").fadeOut(500);
          $(".blue").fadeIn(500);
          break;
        case 3:
          $(".green").fadeOut(500);
          $(".green").fadeIn(500);
          break;
        case 4:
          $(".yellow").fadeOut(500);
          $(".yellow").fadeIn(500);
          break;
        case 5:
          $(".purple").fadeOut(500);
          $(".purple").fadeIn(500);
          break;
        case 6:
          $(".orange").fadeOut(500);
          $(".orange").fadeIn(500);
          break;
        case 7:
          $(".pink").fadeOut(500);
          $(".pink").fadeIn(500);
          break;
        case 8:
          $(".turq").fadeOut(500);
          $(".turq").fadeIn(500);
          break;
      }
      setTimeout(function () {
        //sets time out before "player turn" circle shows, so that it shows after the tile has faded back in.
        $(".circle2").show(); //shows "player turn" indicator circle
        $(".circle").children().children().addClass("point"); //changes cursor properties to indicate tiles are clickable

        demo = 0;
      }, 1000);
    }, 1000);
  });

   /** DEMONSTRATING THE ARRAY*/ //
  function lightUp() {
    //function for lighting up the tiles of the sequence in the demo
    setTimeout(function () {
      //sets time out so that tiles light up one after the other and not near simultaneously
      switch (
        game[i] //selects the color tile based on the game array item.
      ) {
        case 1:
          $(".red").fadeOut(500);
          $(".red").fadeIn(500);
          break;
        case 2:
          $(".blue").fadeOut(500);
          $(".blue").fadeIn(500);
          break;
        case 3:
          $(".green").fadeOut(500);
          $(".green").fadeIn(500);
          break;
        case 4:
          $(".yellow").fadeOut(500);
          $(".yellow").fadeIn(500);
          break;
        case 5:
          $(".purple").fadeOut(500);
          $(".purple").fadeIn(500);
          break;
        case 6:
          $(".orange").fadeOut(500);
          $(".orange").fadeIn(500);
          break;
        case 7:
          $(".pink").fadeOut(500);
          $(".pink").fadeIn(500);
          break;
        case 8:
          $(".turq").fadeOut(500);
          $(".turq").fadeIn(500);
          break;
      }
      i++;
      if (i <= counter) {
        lightUp();
      } else {
        newColor(); //if the i counter reaches the end of the game array then a new color will be added to the array and demo-ed
      }
    }, 1000);
  }

  /** DEMONSTRATING GAME AND ADDING NEW ITEM TO ARRAY*/
  function gameDemo() {
    //function which starts demo of the game so far and ads a new color tile to the sequence
    demo = 1; //sets demo
    $(".circle").children().children().removeClass("point"); //changes cursor properties to indicate tiles are not clickable
    setTimeout(function () {
      i = 0;
      lightUp(); //calls the light up Loop function which demo-es the game array so far.
      setTimeout(function () {
        $(".circle2").hide(); //hides "player turn" circle, but waits until the players last click has fully faded back in again
        $("#counter").html(`${counter + 2} `); //sets level displayer to current level
      }, 1000);
    }, 500);
  }

  /**ADDING NEW ITEM TO ARRAY*/
  function newColor() {
    //function which demo'es and adds to the array a new color tile
    setTimeout(function () {
      let colorindex = Math.ceil(Math.random() * tiles); //function very similar to startnewgame function; please refer to notes there.
      game.push(colorindex);

      switch (colorindex) {
        case 1:
          $(".red").fadeOut(500);
          $(".red").fadeIn(500);
          break;
        case 2:
          $(".blue").fadeOut(500);
          $(".blue").fadeIn(500);
          break;
        case 3:
          $(".green").fadeOut(500);
          $(".green").fadeIn(500);
          break;
        case 4:
          $(".yellow").fadeOut(500);
          $(".yellow").fadeIn(500);
          break;
        case 5:
          $(".purple").fadeOut(500);
          $(".purple").fadeIn(500);
          break;
        case 6:
          $(".orange").fadeOut(500);
          $(".orange").fadeIn(500);
          break;
        case 7:
          $(".pink").fadeOut(500);
          $(".pink").fadeIn(500);
          break;
        case 8:
          $(".turq").fadeOut(500);
          $(".turq").fadeIn(500);
          break;
      }
      counter = counter + 1; //sets counter to the last game array item, for loop matching purposes in other function.
      j = 0; //resets j for matching player clicks to game array in new turn.

      setTimeout(function () {
        $(".circle2").show(); //sets demo to inactive and shows circle indicating player's turn.
        demo = 0;
        $(".circle").children().children().addClass("point"); //changes cursor properties to indicate that tiles are clickable.
      }, 1000);
    }, 1000);
  }

  /** SECRET TURNING CHALLENGE*/
  $(".turnchallenge").mouseover(function () {
    if (turn == 0) {
      //if rotation is inactive then indicate the button on mouseover
      $(".turnchallenge").html("Press for secret challenge");
    }
  });
  $(".turnchallenge").mouseleave(function () {
    //if rotation is inactive then revert to "difficulty" on mouseleave
    if (turn == 0) {
      $(".turnchallenge").html("Difficulty");
    }
  });
  $(".turnchallenge").click(function () {
    $(".turnchallenge").html("Press to stop rotation"); //changes header text to Press stop rotation after it's been clicked.
    if (turn == 0) {
      //if rotation is inactive then start rotation.
      let angle = 0;
      $(".circle").addClass("rotate");
      turner = setInterval(function () {
        //function found at: http://jsfiddle.net/YgBMa/1
        $(".rotate")
          .css("-webkit-transform", "rotate(" + angle + "deg)")
          .css("-moz-transform", "rotate(" + angle + "deg)")
          .css("-ms-transform", "rotate(" + angle + "deg)");
        angle++;
        angle++;
        angle++;
      }, 50);
      turn = 1;
    } else {
      //determine rotation is active | if active then set to inactive.
      angle = 0;
      turn = 0;
      clearInterval(turner);
      $(".circle").css("transform", "rotate(0deg)");
      $(".turnchallenge").html("Difficulty");
    }
  });

/**SETS THE AMOUNT OF TILES IN THE GAME */
function setTiles(){
    if ($(".active").children().children().html() == "Four") {
        tiles = 4;
    } else if ($(".active").children().children().html() == "Six") {
        tiles = 6;
    } else if ($(".active").children().children().html() == "Eight") {
        tiles = 8;
    };
}




});

