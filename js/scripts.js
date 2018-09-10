$(document).ready(function() {
  $(".clickable").click(function() {
    $("#img-showing").toggle();
    $("#img-hidden").toggle();
  });

  $(".clickable2").click(function() {
    $("#text-showing").fadeToggle();
    $("#text-hidden").fadeToggle();
  });

  $("button#default").click(function() {
    $("body").removeClass();
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

});
