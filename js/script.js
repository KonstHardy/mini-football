var score = document.getElementById("score");
var goal = document.getElementById("goal");
var ball = $(".ball");
var field = $(".field");

//Initial game score;
var leftPlayer = 0;
var rightPlayer = 0;

//Player's starting side counter;
var i = 0;

//Field coordinates;
var fieldTop = Math.floor(field.offset().top + ball.height() / 2);
var fieldBottom = Math.floor(field.height() - fieldTop - ball.height() / 2);

ball.on("click", function () {
  //Player side change;
  i++;

  //Generation of random coordinates along the 0Y axis;
  var randomY = Math.floor(
    fieldTop + Math.random() * (fieldBottom + 1 - fieldTop)
  );

  //Coordinates to move the ball;
  var ballCoords = {
    top: randomY,
    left: field.width() - ball.width(),
  };

  //Animation to move the ball;
  var ballAnimate = {
    duration: 600,
    easing: "linear",
    complete: goal,
  };

  //If the ball is on the left side of the field;
  if (ball.css("left") == "0px") {
    ball.animate(
      {
        top: ballCoords.top,
        left: ballCoords.left,
      },
      ballAnimate
    );
  }

  //If the ball is on the right side of the field;
  else {
    ball.animate(
      {
        top: ballCoords.top,
        left: 0,
      },
      ballAnimate
    );
  }

  //Hitting the ball into the gate;
  function goal() {
    //Coordinates of the top of the gate (relative to the field);
    var gateTop = Math.floor(
      field.height() / 2 - field.height() / 14 - ball.height() / 2
    );
    //Coordinates of the bottom of the gate (relative to the field);
    var gateBottom = Math.floor(
      field.height() / 2 + field.height() / 14 - ball.height() / 2
    );
    //Coordinates of the ball (relative to the field);
    var ballСoordinates = Math.floor(ball.offset().top);

    //If is a goal, then we increase the score and show ("GOALLL !!!");
    if (ballСoordinates > gateTop && ballСoordinates < gateBottom) {
      //A goal in the right gate;
      if (i % 2 != 0) {
        leftPlayer++;
        score.innerText = leftPlayer + ":" + rightPlayer;
      }
      //A goal in the left gate;
      else {
        rightPlayer++;
        score.innerText = leftPlayer + ":" + rightPlayer;
      }

      //Show the "GOALLL !!!";
      let timerId = setInterval(() => $("#goal").fadeIn(500).fadeOut(300), 500);

      //Stop showing the "GOALLL !!!" after 1.5 seconds;
      setTimeout(() => {
        clearInterval(timerId);
      }, 1500);
    }
  }
});
