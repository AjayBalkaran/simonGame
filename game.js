
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // flash button and play sound
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();

  // Check Which button is pressed

  $(".btn").click(function() {
      let userChosenColor = this.id;
      userClickedPattern.push(userChosenColor);
      console.log(userClickedPattern);
  });
}
