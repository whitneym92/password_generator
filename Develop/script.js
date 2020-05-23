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

  //Password function that contains a prompt on how long the user wants the password
  //While loop to loop the code as long as the length is > 8 and < 128 
  function passwordLengthPrompt() {
  passwordLength = prompt("Enter a number between 8-128 for password length");
 
  while(passwordLength < 8 || passwordLength > 128) {
    alert("Enter a number between 8-128 for password length.");
    passwordLength = prompt("Try again, enter a number between 8-128.");
  }
  }








  
  

