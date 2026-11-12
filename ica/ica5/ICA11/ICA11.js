// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
const characters = ["Samuel", "Matthew", "Tommy"];
const places = ["the shoulder on the interstate", "a Buc-ee's the size of an airport", "the richest neighborhood in Houston"];
const events = [
  "dumped all the lemons in the road causing a traffic jam on this hot day",
  "Connected all the lemons to a generator to power the worlds largest inflatable tube man",
  "threw the youngest brother into the road forcing cars to stop and buy lemonade",
  "got on their knees and begged him to donate money to a fake cause",
];


// Partial return random string function

function returnRandomStoryString() {
 const storyText = `It was 94 Fahrenheit in Houston, so ${randomCharacter} decided to make a lemonade stand with his brothers. They set up at ${randomPlace} with 300 pounds of lemons and got ready with their master plan. When Bob drove by not showing any interest, they ${randomEvent}. He had no choice but to buy a lemonade now. In the end the brothers made over $2,000 that day with their new technique.`

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}