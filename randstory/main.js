var name = document.getElementById('name');
var generateStory = document.querySelector('.generate-story');
var story = document.querySelector('.story');

function randomizer(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertCharacter: and friends went for a walk. W" +
    "hen they got to :insertDestination:, they stared in horror for a few moments " +
    "insertCharacter: saw the whole thing, but was not surprised";

var insertCharacter = ["Christine", "Ritah", "Nagadya"];

var insertDestination = ["the Dojo", "Olympus", "Kampala"];

generateStory.addEventListener("click", showStory)

function showStory(){
if (name.value != null){
  var name = name.value;
}

if (document.getElementById("uk").checked){
  //do weight conversion
}
story.style.visibility='visible';
}