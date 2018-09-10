$(document).ready(function() {
  $(".clickable").click(function() {
    $("#img-showing").toggle();
    $("#img-hidden").toggle();
  });

  $(".clickable2").click(function() {
    $("#text-showing").fadeToggle();
    $("#text-hidden").fadeToggle();
  });
});
