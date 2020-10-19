
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

// add Sounds to button clicks
function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

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
