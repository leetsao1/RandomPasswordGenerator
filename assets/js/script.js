// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialList = "@%+!#$^?:.(){}[]~-_`";

var characterArray = [lowerCaseList, upperCaseList, numberList, specialList];

// Write password to the #password input
function writePassword() {
  var passwordLength = document.getElementById('textInput').value; 
  console.log(passwordLength);

//   for (i = 0; i < passwordLength; i++){
  //**this selects a one of the 4 lists from array characterLIST**
  var randomNumberList = Math.floor(Math.random() * (characterArray.length));
  console.log(randomNumberList);

  var randomNumberLetter = Math.floor(Math.random() * (characterArray[randomNumberList].length));
  console.log(randomNumberLetter);

  var randomLetter = characterArray[randomNumberList].charAt(randomNumberLetter);
  console.log(randomLetter);


    // var character = str.charAt(0);

    //i need the for loop to select from 3 arrays
    //I need the loop to select a letter at random letter from string. for this you need to know the string leght.

 }
  



  // you can create a function named generatePassword that creates the password
  
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



