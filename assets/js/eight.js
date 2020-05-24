// The code here is consistent with the four.js code; it has only been elaborated slightly to account for the extra game tiles.
//For comments on the code, please see four.js.

$(document).ready(function () {
  var game = [];
  var counter = 0;
  var j = 0;
  var i = 0;
  var demo = 0;
  var turn = 0;
  var turner;
  $(".circle2").hide();
  $("#gameover").hide();
  $(".aboutfield").hide();
  $("#counter").hide();
  $(".circle").children().children().removeClass("point");
  $("#aboutdiv").click(function () {
    $(".aboutfield").toggle();
  });

  $("#exit").click(function () {
    $(".aboutfield").hide();
  });

  $(".circle")
    .children()
    .children()
    .click(function () {
      if (game.length == 0 || demo == 1) {
      } else {
        var color = $(this).attr("class").split(" ")[0];

        var index;
        switch (color) {
          case "red-8-inner":
            index = 1;
            break;
          case "blue-8-inner":
            index = 2;
            break;
          case "green-8-inner":
            index = 3;
            break;
          case "yellow-8-inner":
            index = 4;
            break;
          case "purple-8-inner":
            index = 5;
            break;
          case "orange-8-inner":
            index = 6;
            break;
          case "pink-8-inner":
            index = 7;
            break;
          case "turq-8-inner":
            index = 8;
            break;
        }
        if (index == game[j] && game.length == j + 1) {
          $(this).fadeOut(500);
          $(this).fadeIn(500);
          game8();
        } else if (index == game[j]) {
          $(this).fadeOut(500);
          $(this).fadeIn(500);
          j = j + 1;
        } else {
          angle = 0;
          turn = 0;
          clearInterval(turner);
          $(".circle").css("transform", "rotate(0deg)");
          $(".turnchallenge").html("Difficulty");
          $("#gameover").fadeIn(1000);
          $(".circle2").hide();
          setTimeout(function () {
            $("#counter").hide();
            $("#gameover").fadeOut(1000);
            $("#startnewgame8").fadeIn(1000);
            game = [];
            counter = 0;
            j = 0;
          }, 3000);
        }
      }
    });

  $("#startnewgame8").click(function () {
    $(".circle").children().children().removeClass("point");
    $("#counter").html(`${counter + 1} `);
    $("#counter").show();
    demo = 1;
    game = [];
    $(this).fadeOut(500);
    setTimeout(function () {
      let colorindex = Math.ceil(Math.random() * 8);
      game.push(colorindex);

      switch (colorindex) {
        case 1:
          $(".red-8-inner").fadeOut(1000);
          $(".red-8-inner").fadeIn(1000);
          break;
        case 2:
          $(".blue-8-inner").fadeOut(1000);
          $(".blue-8-inner").fadeIn(1000);
          break;
        case 3:
          $(".green-8-inner").fadeOut(1000);
          $(".green-8-inner").fadeIn(1000);
          break;
        case 4:
          $(".yellow-8-inner").fadeOut(1000);
          $(".yellow-8-inner").fadeIn(1000);
          break;
        case 5:
          $(".purple-8-inner").fadeOut(1000);
          $(".purple-8-inner").fadeIn(1000);
          break;
        case 6:
          $(".orange-8-inner").fadeOut(1000);
          $(".orange-8-inner").fadeIn(1000);
          break;
        case 7:
          $(".pink-8-inner").fadeOut(1000);
          $(".pink-8-inner").fadeIn(1000);
          break;
        case 8:
          $(".turq-8-inner").fadeOut(1000);
          $(".turq-8-inner").fadeIn(1000);
          break;
      }
      setTimeout(function () {
        $(".circle2").show();
        $(".circle").children().children().addClass("point");
        demo = 0;
      }, 2000);
    }, 1000);
  });

  function lightUp() {
    setTimeout(function () {
      switch (game[i]) {
        case 1:
          $(".red-8-inner").fadeOut(1000);
          $(".red-8-inner").fadeIn(1000);
          break;
        case 2:
          $(".blue-8-inner").fadeOut(1000);
          $(".blue-8-inner").fadeIn(1000);
          break;
        case 3:
          $(".green-8-inner").fadeOut(1000);
          $(".green-8-inner").fadeIn(1000);
          break;
        case 4:
          $(".yellow-8-inner").fadeOut(1000);
          $(".yellow-8-inner").fadeIn(1000);
          break;
        case 5:
          $(".purple-8-inner").fadeOut(1000);
          $(".purple-8-inner").fadeIn(1000);
          break;
        case 6:
          $(".orange-8-inner").fadeOut(1000);
          $(".orange-8-inner").fadeIn(1000);
          break;
        case 7:
          $(".pink-8-inner").fadeOut(1000);
          $(".pink-8-inner").fadeIn(1000);
          break;
        case 8:
          $(".turq-8-inner").fadeOut(1000);
          $(".turq-8-inner").fadeIn(1000);
          break;
      }
      i++;
      if (i <= counter) {
        lightUp();
      } else {
        newColor();
      }
    }, 1700);
  }

  function game8() {
    demo = 1;
    $(".circle").children().children().removeClass("point");
    setTimeout(function () {
      i = 0;
      lightUp();
      setTimeout(function () {
        $(".circle2").hide();
        $("#counter").html(`${counter + 2} `);
      }, 1000);
    }, 500);
  }

  function newColor() {
    setTimeout(function () {
      let colorindex = Math.ceil(Math.random() * 8);
      game.push(colorindex);

      switch (colorindex) {
        case 1:
          $(".red-8-inner").fadeOut(1000);
          $(".red-8-inner").fadeIn(1000);
          break;
        case 2:
          $(".blue-8-inner").fadeOut(1000);
          $(".blue-8-inner").fadeIn(1000);
          break;
        case 3:
          $(".green-8-inner").fadeOut(1000);
          $(".green-8-inner").fadeIn(1000);
          break;
        case 4:
          $(".yellow-8-inner").fadeOut(1000);
          $(".yellow-8-inner").fadeIn(1000);
          break;
        case 5:
          $(".purple-8-inner").fadeOut(1000);
          $(".purple-8-inner").fadeIn(1000);
          break;
        case 6:
          $(".orange-8-inner").fadeOut(1000);
          $(".orange-8-inner").fadeIn(1000);
          break;
        case 7:
          $(".pink-8-inner").fadeOut(1000);
          $(".pink-8-inner").fadeIn(1000);
          break;
        case 8:
          $(".turq-8-inner").fadeOut(1000);
          $(".turq-8-inner").fadeIn(1000);
          break;
      }
      counter = counter + 1;
      j = 0;
      setTimeout(function () {
        $(".circle2").show();
        demo = 0;
        $(".circle").children().children().addClass("point");
      }, 2000);
    }, 1700);
  }

  $(".turnchallenge").mouseover(function () {
    if (turn == 0) {
      $(".turnchallenge").html("Press for secret challenge");
    }
  });
  $(".turnchallenge").mouseleave(function () {
    if (turn == 0) {
      $(".turnchallenge").html("Difficulty");
    }
  });
  $(".turnchallenge").click(function () {
    $(".turnchallenge").html("Press to stop rotation");
    if (turn == 0) {
      var angle = 0;
      $(".circle").addClass("rotate");
      turner = setInterval(function () {
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
      angle = 0;
      turn = 0;
      clearInterval(turner);
      $(".circle").css("transform", "rotate(0deg)");
      $(".turnchallenge").html("Difficulty");
    }
  });
});
