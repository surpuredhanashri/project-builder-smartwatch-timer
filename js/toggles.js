//JQUERY FUNCTIONS

//toggling the screen using the tags
$(".musicicon").on("click", function() {
  $("#player").toggle();
  $(".msgicon,.musicicon,.clockicon").removeClass("clr");
  $(".msgicon,.clockicon").addClass("clr");
  $(".screen").hide();
  hidden();
});

$("#timerpause").on("click", function() {
  let lap = document.getElementById("digit").textContent;
  $(".lap").text(lap);
});

$("#reset").on("click", function() {
  $(".lap").html("00:00:00");
});

//Timer Screen
$(".clockicon").on("click", function() {
  $("#day,#time,#player,#msg").hide();
  $(".digits,.lap").show();
  $(".screen").hide();
  $(".musicicon,.msgicon,.clockicon").removeClass("clr");
  $(".musicicon,.msgicon").addClass("clr");
  show();
});

//Watch Sreen
$("#watch").on("click", function() {
  $("#day,#time").show();
  $(".digits,.lap,#player,#stop,#msg").hide();
  $(".msgicon,.musicicon,.clockicon").removeClass("clr");
  hidden();
});

//Message Screen
$(".msgicon").on("click", function() {
  $("#day,#time,#player,.digits,.lap").hide();
  $(".msgicon,.musicicon,.clockicon").removeClass("clr");
  $(".musicicon,.clockicon").addClass("clr");
  $("#msg").show();
  $(".screen").hide();
  hidden();
});

//message contents
$("#list1").on("click", function() {
  $(".screen").show();
  $(".txt").html("JavaScript is the world's most popular programming language." + "<hr>");
});

$("#list2").on("click", function() {
  $(".screen").show();
  $(".txt").html("HTML is the standard markup language for Web pages." + "<hr>");
});

$("#list3").on("click", function() {
  $(".screen").show();
  $(".txt").html("CSS is the language we use to style an HTML document." + "<hr>");
});

//onload hide the elements
$(document).ready(function() {
  $("#player,#watch,#msg,.screen,.digits,.lap,.playbtn").hide();
  $(".msgicon,.musicicon,.clockicon").removeClass("clr");
  hidden();
});
