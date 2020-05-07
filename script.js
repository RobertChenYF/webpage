
$(document).ready(function(){
  $("#flip").click(function(){
    $("#flip").fadeOut();
    $("#panel").slideDown("slow");
  });
});
$(document).ready(function(){
  $("#changeColorButton").click(function(){
    $("#changeColor").css("background-color", "yellow");
  });
});