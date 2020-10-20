
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false;

let level = 0; 


// add Sounds to button clicks
function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}


// created function that check user input
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    
    //If the user got the most recent answer right check that they finish the sequence.
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      },1000);

    } 
  } else {
    console.log("wrong");
  }
  
}

function nextSequence() {

 userClickedPattern = [];

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  level ++;
  $("#level-title").text(`Level ${level}`);

  // flash button and play sound
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

// check if a key is pressed
$(document).keydown(function(){
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

  // Check Which button is pressed
$(".btn").click(function() {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  // animatePress(userChosenColor);
  // Call checkAnswer()
  checkAnswer(userClickedPattern.length - 1);
});
