
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
      console.log(userClickedPattern);
      playSound(userChosenColor);
  });
}

$(document).keydown(function(){
  if (!started) {
    $("#level-title").text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});
