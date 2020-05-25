// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";

var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialList = "@%+!#$^?:.(){}[]~-_`";

var characterArray = [lowerCaseList, upperCaseList, numberList, specialList];

function desiredCharactersArray(){
    // gets multiple choice selection values
    var upperCaseButton = document.getElementById("upperCaseTrue").checked;
    var numbersButton = document.getElementById("numbersTrue").checked;
    var specialCharactersButton = document.getElementById("specialCharactersTrue").checked;
    console.log(upperCaseButton, numbersButton, specialCharactersButton);
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
}

function writePassword() {
  // gets password length
  var passwordLength = document.getElementById('textInput').value; 
  console.log(passwordLength);


  // moving the array fuction from here
  desiredCharactersArray();


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



