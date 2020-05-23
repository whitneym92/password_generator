// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}// These are the lowercase, uppercase, symbol and number characters that the password can use
  var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var symbol = ["!@#$%^&*()_~><-+"];
  var number = ["1234567890"];

  //This is what the password will be 
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
    passwordLength = prompt("Try again, enter a number between 8-128.");
    }
  }
  //Functions containing the users choice of lowercase, uppercase, symbol and number characters in password
    //Lowercase function with confirm
  function lowercaseConfirm() {
  lowercaseChoice = confirm("Do you want your password to have lowercase letters?");
  }

    //Uppercase function with confirm
  function uppercaseConfirm() {
  uppercaseChoice = confirm("Do you want your password to have uppercase letters?");
  }

    //Symbol function with confirm
  function symbolConfirm() {
  symbolChoice = confirm("Do you want your password to have symbols?");
  }

    //Number function with confirm
  function numberConfirm() {
  numberChoice = confirm("Do yo want your password to have numbers?");
  }

  //Function for generating the random password with a for loop
  function generatePassword() {
  if (lowercaseChoice === true) {
    finalPassword += lowercase;
  }

  if (uppercaseChoice === true) {
    finalPassword += uppercase;
  }

  if (symbolChoice === true) {
    finalPassword += symbol;
  }

  if (numberChoice === true) {
    finalPassword += number;
  }

  for (var i = 0; i < passwordLength; i++) {
    passwordLengthChoice += finalPassword.charAt(Math.floor(Math.random() * finalPassword.length));
  }

  return passwordLengthChoice;
}

// Add event listener to generate button for each confirmed character
generateBtn.addEventListener("click", function() {
  passwordLengthPrompt();
  lowercaseConfirm();
  uppercaseConfirm();
  symbolConfirm();
  numberConfirm();
  writePassword();
});









  
  

