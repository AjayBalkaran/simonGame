
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

function checkAnswer(currentLevel) {
  // for (i = 0; i < currentLevel; i++) {
  //   if (userClickedPattern === gamePattern) {
  //     console.log("success");
  //   } else {
  //     console.log("wrong");
  //   }
  // }

  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");
  } else {
    console.log("wrong");
  }
}

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  level ++;
  $("#level-title").text(`Level ${level}`);

  // flash button and play sound
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  
  // Check Which button is pressed

  $(".btn").click(function() {
      let userChosenColor = this.id;
      userClickedPattern.push(userChosenColor);
    
      playSound(userChosenColor);
      checkAnswer(level - 1);
  });
}

$(document).keydown(function(){
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});
