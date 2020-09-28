//CONTROLLER

function showText(data) {
  $(".content").html(data);
  $(".load").css("display", "none");
}

function initListener() {
  $("#home").click(function(event) {
    let btnId = this.id;
    $(".load").css("display", "block");
    MODEL.getHome(showText);
  });

  $("#about").click(function(event) {
    let btnId = this.id;
    $(".load").css("display", "block");
    MODEL.getAbout(showText);
  });

  $("#products").click(function(event) {
    let btnId = this.id;
    $(".load").css("display", "block");
    MODEL.getProducts(showText);
  });

  $("#tour").click(function(event) {
    let btnId = this.id;
    $(".load").css("display", "block");
    MODEL.getTour(showText);
  });
}

$(document).ready(function() {
  initListener();
});
