// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";

var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialList = "@%+!#$^?:.(){}[]~-_`";

// This function generates an array from the selected multiple choices
function desiredCharactersArray(){
  // gets multiple choice selection values
  var upperCaseButton = document.getElementById("upperCaseTrue").checked;
  var numbersButton = document.getElementById("numbersTrue").checked;
  var specialCharactersButton = document.getElementById("specialCharactersTrue").checked;
  console.log("Multiple Selection Status: " + upperCaseButton + numbersButton + specialCharactersButton);
  
  var desiredCharacters = [lowerCaseList]

    if (upperCaseButton){
      desiredCharacters.push(upperCaseList);
    }
    if (numbersButton){
      desiredCharacters.push(numberList);
    }
    if (specialCharactersButton){
      desiredCharacters.push(specialList);
    }

  console.log(desiredCharacters);
  return desiredCharacters;
}
// This function randomly selects an array from the desiredCharacters arrays, then randomly selects an index from that same array, then returns the character
function randomCharacter (characterArray){
    var characterArray;
    //Randomly selects an array from characterArray
    var randomNumberList = Math.floor(Math.random() * (characterArray.length));

    // Randomly selects an index from the randomly selected array
    var randomNumberLetter = Math.floor(Math.random() * (characterArray[randomNumberList].length));

    // Gets the character from the random index, at a random array
    var randomLetter = characterArray[randomNumberList].charAt(randomNumberLetter);
      return randomLetter;
}

function writePassword() {
  var passwordLength = document.getElementById('textInput').value; //gets password length
  var characterArray =  desiredCharactersArray(); // assigns new array from selected options
  
    for (i = 0; i < passwordLength; i++){
      randomLetter = randomCharacter(characterArray);
      password = password+randomLetter;
      console.log(password);
      }

  document.querySelector("textarea").textContent = password;
 }

// This is to update the slider value
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);






