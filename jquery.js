$(document).ready(function(){
    header();
    inputGrid(16);
    options();
    mouseenter();
    changesize();
    changecolor();
    newboard();
});

function header(){
  $(".header").append("<p>Etch-A-Sketch</p>");
}

function options(){
  $(".options").append("<button class='changesize'>Change Size</button>");
  $(".options").append("<button class='changecolor'>Change Color</button>");
  $(".options").append("<button class='newboard'>New Board</button>");
}

function inputGrid(size){
    for (var i = 0; i < size; i++) {
      var container = $("<div class='innerContainer'></div>");
      for (var j = 0; j < size; j++) {
        container.append($("<div class='inner'></div>"));
      }
      $(".container").append(container);
    }
}

function mouseenter(){
  $(".inner").mouseenter(function(){
    $(this).css('background-color','black');
  })
}

function changesize(){
  $(".changesize").click(function(){
    var newsize = prompt("Select a number: \nRecommended: 4-40");
    $(".container").empty();
    inputGrid(newsize);
    mouseenter();
  })
}

function changecolor(){
  $(".changecolor").click(function(){
    var newcolor = prompt("Select a new color: ");
    $(".inner").mouseenter(function(){
      $(this).css('background-color', newcolor);
    })
  })
}

function newboard(){
  $(".newboard").click(function(){
    $(".inner").css('background-color','white');
  })
}
