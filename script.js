// Assignment code here
//allow user to choose password criteria
//create different strings of characters for the password string
var charsAlphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsAlphaLower = "abcdefghijklmnopqrstuvwxyz";
var charsNum = "0123456789";
var charsSymbol = "!@#$%^&*()?<>";


function generatePassword() {
      var result = "";
      var charsAll = "";

  //allow user to choose the number of characters in the password
      var passwordLength = Number(window.prompt ("How many characters in your password? Choose a number between 8 and 128."));
    
  //limit user choices to numbers 8-128
      if (passwordLength > 7 && passwordLength < 129) { 
  alert ("You have chosen a password of " + passwordLength + " characters.")
   } 
   //restart function if a number outside 8-128 is selected
   else {
     alert ("You have not chosen an acceptable number of characters. Please try again.")
   
    }

  if (passwordLength > 7 && passwordLength < 129 ){
    
    //allow user to choose whether to use uppercase letters in the password
    if (window.confirm ("Would you like to use upper case letters in your password?") === true) {
      charsAll = charsAll + charsAlphaUpper;
      alert ("You have added uppercase letters to your password.");
      }

    //allow user to choose whether or not to use lowercase letters in the password
   if (window.confirm ("Would you like to use lowercase letters in your password?") === true) {
        charsAll = charsAll + charsAlphaLower;
        alert ("You have added lowercase letters to your password.")
      }
      
      //allow user to choose whether or not to use numbers in the password
    if (window.confirm ("Would you like to use numbers in your password?") === true) {
        charsAll = charsAll + charsNum;
        alert ("You have added numbers to your password.")
      }

      //allow user to choose whether or not to use symbols in the password
    if (window.confirm ("Would you like to use special characters in your password?") === true) {
        charsAll = charsAll + charsSymbol;
        alert ("You have added special characters to your password.")
      }
    
     if (charsAll === "") {
        alert ("You have not chosen any characters for your password. Please try again.")
      }
      
      //use a loop function to return a set of numbers to correspond to the string charsAll  
      for (var i = 0; i < passwordLength; i++) {

      //correlate the random numbers with the characters in the string charsAll  
      var randomIndex = Math.floor(Math.random() * charsAll.length);
         result += charsAll[randomIndex]

         }
      } 
      return result;
      
  } 

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
