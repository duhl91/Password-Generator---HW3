// Assignment Code

var lcPrompt;
var ucPrompt;
var numPrompt;
var symPrompt;

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword); {
 };

// Write password to the #password input
function writePassword() {

  var userData = prompt("Please enter the desired password length. Must be between 8 - 128 characters.");

  if (userData < 8 || userData > 128) {
    alert("Invalid entry. Please enter a number between 8 - 128.");
    return writePassword();
  }

    else {
      lcPrompt = confirm("Should the password contain uppercase letters?");
      ucPrompt = confirm("Should the password contain lowercase letters?");
      numPrompt = confirm("Should the password contain numbers?");
      symPrompt = confirm("Should the password contain symbols?");
    }
}

  function generatePassword() {

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var symbols = "`~!@#$%^&*()-_=+;:<>,./?[]{}";
    var userPw = "";

  if (lowercase) {
    userPw = userPw + lowercase;
  }
  if (uppercase) {
    userPw = userPw + uppercase;
  }
  if (numbers) {
    userPw = userPw + numbers;
  }
  if (symbols) {
    userPw = userPw + symbols;
  }

  for (var i = 0; i < userData; i++) {

    var rNum = math.floor(math.random() * userPw.length);
    password += userPw.substring(rNum, rNum + 1);
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  document.getElementById("password").innerHTML = password; 

}
 



