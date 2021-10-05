// Declare variables

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&()*+,-./:;<=>?@^[]^_`{|}~";

var uppercaseArr = uppercase.split("");
var lowercaseArr = lowercase.split("");
var numbersArr = numbers.split("");
var symbolsArr = symbols.split("");

// Prompt to tell the user how to start the application 
window.onload = alert(
  "Welcome, please click 'Generate password' to run the application!"
);

// Main function that will generate the password from user input
function generatePassword() {
  var allChars = [];
  var userPw = "";

  var userInput = prompt(
    "How many characters would you like your password to be?"
  );

  if (userInput < 8 || userInput > 128) {
    alert("Invalid entry. Please enter a number between 8 - 128.");
  }

  // Confirms the types of characters that the user would like to use in the password 
  else {
    if (confirm("Should the password contain uppercase letters?")) {
      Array.prototype.push.apply(allChars, uppercaseArr);
    }

    if (confirm("Should the password contain lowercase letters?")) {
      Array.prototype.push.apply(allChars, lowercaseArr);
    }

    if (confirm("Should the password contain numbers?")) {
      Array.prototype.push.apply(allChars, numbersArr);
    }

    if (confirm("Should the password contain symbols?")) {
      Array.prototype.push.apply(allChars, symbolsArr);
    }

    if (allChars.length === 0) {
      alert(
        "Please select at least one character type to generate a password!"
      );
    }

    // Loop through the input data from the user and generate a password from it
    else {
      for (var i = 0; i < userInput; i++) {
        var random = Math.floor(Math.random() * allChars.length);
        userPw += allChars[random];
      }
    }
  }

  // Output the result to the page

  document.getElementById("password").innerHTML = userPw;
}