//Our Function Invoked Whenever Page Loaded
let texts = [
  "Just Dream",
  "Work for Your Dream",
  "Life is fleeting",
  "Time goes so fast",
];
//Define Vatiables
let counter = 0;
let index = 0;
let currentWord = "";
let currentLetter = "";
(function typeText() {
  if (counter === texts.length) {
    counter = 0;
  }
  currentWord = texts[counter];
  currentLetter = currentWord.slice(0, ++index);

  document.querySelector(".type").textContent = currentLetter;
  if (currentLetter.length === currentWord.length) {
    counter++;
    index = 0;
  }
  setTimeout(typeText, 400);
})();

//Define What word to display
//Define count variable to represent all index of word
//Define index , refer to array index
//Define Current text we will select
//Define text's letter
//when count rich to lenght  ,reset to 0
//get current word
//get current letter of word and slice it and increament it ==> "j" .. "ju" .."jus"
//when finished typing first array index go to next
