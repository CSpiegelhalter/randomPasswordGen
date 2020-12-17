// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // Call function to get password contents
  var options = passwordOptions();

  // Separates the returned array
  var length = options[0];
  var parameters = options[1];

  // Create empty string to add password characters to
  var myPassword = "";

  // Loop for the number of characters the user provided
  for (var i = 0; i < length; i++) {

    // Randomly select a character in the parameters string with the 'charAt" method then add it to myPassword string
    myPassword += parameters.charAt(Math.floor(Math.random() * parameters.length));
  }
  
  // Return password value
  return myPassword;

}

function passwordOptions() {

  // Create empty string to add password parameters to
  let parameters = "";

  // Ask user password length
  let length = parseInt(prompt("How long would you like your password (8-128)"));

  // Check to see if password length and input type is valid
  if ((length < 8) || (length > 128) || (Number.isInteger(length) === false)) {
    alert("Your password needs to be 8-128 characters long");
    return passwordOptions();
  }
  else {

    // Decide whether or not to add character types
    let lower = confirm("Would you like lower case characters in it?");
    
    // All lower case characters
    if(lower) {
      parameters += "abcdefghijklmnopqrstuvwxyz";
    }

    let upper = confirm("Would you like upper case characters in it?");

    // All upper case characters
    if(upper) {
      parameters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let numeric = confirm("Would you like numeric characters in it?");

    // All numbers
    if(numeric) {
      parameters += "0123456789";
    }

    let special = confirm("Would you like special characters in it?");

    // All special characters
    // Must add '\' escape character to two characters that would break it otherwise
    if(special) {
      parameters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    // Ensures at least one parameter was selected
    if (parameters === "") {
      alert("You must select at least one password parameter. Try again.");
      return passwordOptions();
    }

    // Returns the user input
    else{
      return [length, parameters];
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
