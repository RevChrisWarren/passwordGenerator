// Assignment code here
//allow user to choose password criteria
var passwordCriteria = window.prompt ("What characters will be in your password? For letters only, type '1', for letters and numbers type '2' for letters, numbers, and special characters, type '3'.");
//create sets of characters to fit parameters of Alpha, Alpham=numeric, and Alphanumeric with symbols
var charsAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var charsAlphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var charsAlphaNumericSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?<>"

var passwordLength = window.prompt ("How many characters in your password? choose a number between 8 and 128.");
function generatePassword() {
    if (passwordCriteria = 1){
      var result = " ";
      for (var i = 0; i < passwordLength; i++) {
        return result += (Math.floor(Math.random() * charsAlpha.length));
      }
      }  else if(passwordCriteria = 2) {
      for (var i = 0; i < passwordLength; i++) {
        return result += charsAlphaNumeric(Math.floor(Math.random() * charsAlphaNumeric.length));
      }
      } else if(passwordCriteria = 3) {
        for (var i = 0; i < passwordLength; i++) {
          return result += charsAlphaNumericSymbols(Math.floor(Math.random() * charsAlphaNumericSymbols.length));
      }
    }else
    window.alert ("Please select the characters to use in your password. For letters only, type '1', for letters and numbers type '2' for letters, numbers, and special characters, type '3'.");
  }


console.log(passwordCriteria);
console.log(passwordLength);



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
