var name = document.getElementById("entered-name").value;
var generateStory = document.querySelector('.generate-story');
var story = document.querySelector('.story');

function randomizer(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText = "It was 94 farenheit outside, so :randomName: and friends went for a walk. W" +
    "hen they got to :randomDestination:, they stared in horror for a few moments " +
    "randomName: saw the whole thing, but was not surprised";

var characters = ["Christine", "Ritah", "Nagadya"];

var destinations = ["the Dojo", "Olympus", "Kampala"];

generateStory.addEventListener("click", showStory)

function showStory() {
  var newStory = storyText;
  if (name !== "") {
    newStory = newStory.replace(':randomName:',name);
  } else {
    randomName = randomizer(characters);
    newStory = newStory.replace(':randomName:', randomName);
  }
  randomDestination = randomizer(destinations);
  newStory = newStory.replace(':randomDestination:', randomDestination);
  if (document.getElementById("uk").checked) {
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature);
  }
  story.style.visibility = 'visible';
  story.textContent = newStory;
}