// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // Ask user password length
  var length = parseInt(prompt("How long would you like your password (8-128)"));
  
  // Check to see if password length is valid
  if ((length < 8) || (length > 128) || (typeof length !== "number")) {
    alert("Your password needs to be 8-128 characters long");
    generatePassword();
  }
  else {
    // Call function to get password contents
    var options = passwordOptions()
  }

  // Create empty string to add password characters to
  var myPassword = "";

  // Loop for the number of characters the user provided
  for (var i = 0; i < length; i++) {

    // Randomly select a character in the parameters string with the 'charAt" method then add it to myPassword string
    myPassword += options.charAt(Math.floor(Math.random() * options.length));
  }
  
  // Return password value
  return myPassword;

}

function passwordOptions() {

  // Create empty string to add password parameters to
  var parameters = "";

  // Decide whether or not to add character types
  var lower = confirm("Would you like lower case characters in it?");
  
  if(lower) {
    parameters += "abcdefghijklmnopqrstuvwxyz";
  }

  var upper = confirm("Would you like upper case characters in it?");

  if(upper) {
    parameters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var numeric = confirm("Would you like numeric characters in it?");

  if(numeric) {
    parameters += "0123456789";
  }

  var special = confirm("Would you like special characters in it?");

  // Must add '\' escape character to two characters that would break it otherwise
  if(special) {
    parameters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  return parameters


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
