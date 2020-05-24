// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = document.getElementById('textInput').value; 
  console.log(passwordLength);
  // you can create a function named generatePassword that creates the password
  
  // function generatePassword(){


  // }
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;



}


// This is to update the slider value
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



