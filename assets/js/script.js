// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";

var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialList = "@%+!#$^?:.(){}[]~-_`";

var characterArray = [lowerCaseList, upperCaseList, numberList, specialList];

function writePassword() {
  // gets password length
  var passwordLength = document.getElementById('textInput').value; 
  console.log(passwordLength);
  // gets multiple choice selection values
  var upperCaseButton = document.getElementById("upperCaseTrue").checked;
  var NumbersButton = document.getElementById("numbersTrue").checked;
  var specialCharactersButton = document.getElementById("specialCharactersTrue").checked;
  console.log(upperCaseButton, NumbersButton, specialCharactersButton);


    // for (i = 0; i < passwordLength; i++){
      
    // //**this selects a one of the 4 lists from array characterLIST**
    
    //   var randomNumberList = Math.floor(Math.random() * (characterArray.length));
    //   console.log(randomNumberList);

    //   var randomNumberLetter = Math.floor(Math.random() * (characterArray[randomNumberList].length));
    //   console.log(randomNumberLetter);

    //   var randomLetter = characterArray[randomNumberList].charAt(randomNumberLetter);
    //   console.log(randomLetter);

    //   password = password+randomLetter;
    //   console.log(password);
    // }

  document.querySelector("textarea").textContent = password;
 }
  

  // function generatePassword(){

  // }
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;


// This is to update the slider value
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



