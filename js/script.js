var ball = $(".ball");
var field = $(".field");

ball.on("click", function () {
  //Field coordinates;
  var fieldTop = Math.floor(field.offset().top + ball.height() / 2);
  var fieldBottom = Math.floor(field.height() - fieldTop - ball.height() / 2);

  //Generation of random coordinates along the 0Y axis;
  function random() {
    var rand = Math.floor(
      fieldTop + Math.random() * (fieldBottom + 1 - fieldTop)
    );
    return rand;
  }

  var randomCordsY = random();

  //Coordinates to move the ball;
  var ballCoords = {
    top: randomCordsY,
    left: field.width() - ball.width(),
  };

  //If the ball is on the left side of the field;
  if (ball.css("left") == "0px") {
    ball.animate(
      {
        left: ballCoords.left,
        top: ballCoords.top,
      },
      600,
      "linear",
      goal
    );
  }

  //If the ball is on the right side of the field;
  else {
    ball.animate(
      {
        left: 0,
        top: ballCoords.top,
      },
      600,
      "linear",
      goal
    );
  }
});

//Hitting the ball into the gate;
function goal() {
  //Gate height (relative to the field);
  var gateHeight = Math.floor(field.height() / 2 - field.height() * 0.3);
  //Coordinates of the top of the gate (relative to the field);
  var gateTop = Math.floor(field.height() / 2 - (field.height() / 2) * 0.25);
  //Coordinates of the bottom of the gate (relative to the field);
  var gateBottom = gateTop + gateHeight;

  //Coordinates of the ball (relative to the field);
  var ballСoordinates = Math.floor(ball.offset().top);

  //If a goal, then we show ("Goooool !!!");
  if (ballСoordinates > gateTop && ballСoordinates < gateBottom) {
    setTimeout(() => alert("Goooool !!!"), 100);
  }
}
