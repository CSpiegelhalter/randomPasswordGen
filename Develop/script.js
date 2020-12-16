// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // Create empty string to add password parameters to
  parameters = ""

  // Create empty string to add password characters to
  myPassword = ""

  // Ask user password specifics
  var length = prompt("How long would you like your password (8-128)")
  
  // Check to see if password length is valid
  if ((length < 8) || (length > 128)) {
    alert("Your password needs to be 8-128 characters long")
    generatePassword()
  }

  // Decide whether or not to add character types
  var lower = confirm("Would you like lower case characters in it?")
  
  if(lower) {
    parameters += "abcdefghijklmnopqrstuvwxyz"
  }

  var upper = confirm("Would you like upper case characters in it?")

  if(upper) {
    parameters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  var numeric = confirm("Would you like numeric characters in it?")

  if(numeric) {
    parameters += "0123456789"
  }

  var special = confirm("Would you like special characters in it?")

  if(special) {
    parameters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }

  // Loop for the number of characters the user provided
  for (var i = 0; i < length; i++) {

    // Randomly select a character in the parameters string then add it to myPassword string
    myPassword += parameters.charAt(Math.floor(Math.random() * parameters.length));
  }
  
  // Return password value
  return myPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
