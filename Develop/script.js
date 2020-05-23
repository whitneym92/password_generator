// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}// These are the lowercase, uppercase, symbol and number characters that the password can use
  var lowercaseOption = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercaseOption = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var symbolOption = ["!@#$%^&*()_~><-+"];
  var numberOption = ["1234567890"];

  //This is what the password can be 
  var finalPassword = "";

  //This is the users choice for the length of the password and if they want to include lowercase, uppercase, symbols, or numbers
  var passwordLengthChoice = "";
  var lowercaseChoice;
  var uppercaseChoice;
  var symbolChoice;
  var numberChoice;








  
  

