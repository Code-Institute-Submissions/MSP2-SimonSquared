$(document).ready(function () {
  var game = [];
  var counter = 0;
  var j = 0;
  var i = 0;
  var demo = 0

  $(".circle")
    .children()
    .children()
    .click(function () {
      if (game.length == 0 || demo == 1) {
      } else {
        var color = $(this).attr("class");

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
        if (index == game[j] && game.length == j + 1) {
          $(this).fadeOut(500);
          $(this).fadeIn(500);
          game4();
        } else if (index == game[j]) {
          $(this).fadeOut(500);
          $(this).fadeIn(500);
          j = j + 1;
        } else {
          $("#startnewgame4").fadeIn(1000);
          game = [];
          counter = 0;
          j = 0;
        }
      }
    });

  $("#startnewgame4").click(function () {
    game = [];
    $(this).fadeOut(500);
    setTimeout(function () {
      let colorindex = Math.ceil(Math.random() * 4);
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
      console.log(game);
    }, 1000);
  });

  function lightUp() {
    setTimeout(function () {
      switch (game[i]) {
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
        newColor();
      }
    }, 1700);
  }

  function game4() {
      demo = 1
    setTimeout(function () {
      i = 0;
      lightUp();
    }, 500);
  }

  function newColor() {
    setTimeout(function () {
      let colorindex = Math.ceil(Math.random() * 4);
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
      counter = counter + 1;
      console.log(game);
      console.log(`counter = ${counter}`);
      j = 0;
      demo = 0;
    }, 1700);
  }
});
