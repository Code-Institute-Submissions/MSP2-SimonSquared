// The code here is consistent with the four.js code; it has only been elaborated slightly to account for the extra game tiles. 
//For comments on the code, please see four.js.

$(document).ready(function(){
var game =[];
var counter = 0
var j = 0
var i = 0
  var demo = 0
  $(".circle2").hide();


$(".circle").children().children().click(function(){

    if (game.length == 0 || demo == 1) {

    } else {
        var color = $(this).attr("class").split(' ')[0];     

    var index 
    switch(color){
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
    console.log(index);
    if (index == game[j] && game.length == j + 1) {
    $(this).fadeOut(250);
    $(this).fadeIn(250);
    game8()
    } else if (index == game[j]) {
    $(this).fadeOut(250);
    $(this).fadeIn(250);
    j = j + 1
    } else {
        $("#startnewgame8").fadeIn(1000);
        $(".circle2").hide();
        game =[]
        counter = 0
        j = 0
    };

    };

});



$("#startnewgame8").click(function(){
    demo = 1
    game = []
    $(this).fadeOut(500);
    setTimeout(function(){
    let colorindex = Math.ceil(Math.random()*8);
    game.push(colorindex);

    
    switch(colorindex){
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
    };
    console.log(game)
        setTimeout(function(){
      $(".circle2").show();
      demo = 0;
      }, 2000);
}, 1000);

});

function lightUp(){
   setTimeout(function(){
    switch(game[i]){
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
    }; 
    i++;
    if (i <= counter) {
        lightUp()
    }else{
        newColor()
    }
    },1700);
}

function game8(){
    demo = 1
    setTimeout(function(){
    i = 0
    lightUp()
    setTimeout(function(){
      $(".circle2").hide();
      }, 1000);
}, 500);
};

function newColor(){
    setTimeout(function(){
    let colorindex = Math.ceil(Math.random()*8);
    game.push(colorindex);
    
    switch(colorindex){
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
    };
    counter = counter + 1
    console.log(game)
    console.log(`counter = ${counter}`)
    j = 0;
    setTimeout(function(){
      $(".circle2").show();
      demo = 0;
      }, 2000);
    }, 1700);
};

})
