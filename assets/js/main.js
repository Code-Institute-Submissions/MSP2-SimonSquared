$(document).ready(function(){

$(".yellow-4-inner").click(function(){
    $(".yellow-4-inner").fadeOut(500);
    $(".yellow-4-inner").fadeIn(500);
});

$(".circle").children().children().click(function(){
    $(this).fadeOut(500);
    $(this).fadeIn(500);
});

})
