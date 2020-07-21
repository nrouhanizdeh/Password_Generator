// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompt variables
var minChar = 8;
var maxChar = 128;
var availableChar = ["lowercase","uppercase","numeric","special"];

var charSet = {
  "lowercase": "abcdefghijklmnopqrstuvwxyz",
  "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "numeric": "0123456789",
  "special": "!@#$%^&*()_+~`|}{[]\:;?><,./-="
};

// Generate passwork
function generatePassword() {
  var password="";

  // prompt the user for the number of characters
  var numChar = prompt("What would you like the password length to be? it has to be between 8 and 128 characters");
  if (numChar<minChar || isNaN(minChar) || !numChar || numChar>maxChar) {
    alert("Invalid response. Default minimum of 8 characters will be used.");
    numChar = 8;
  }

  // prompt the user for character types
  var selectType = prompt("Choose one or more character types (comma separated): lowercase, uppercase, numeric, and/or special ");
  if(selectType){
    selectType = selectType.split(',');
  }else{
    alert("Invalid response. All four character types will be used.");
    selectType = availableChar;
  }

  var typeChar = [];
  for(var i=0 ; i < selectType.length ; i++){
    if(availableChar.includes(selectType[i].trim())){
      typeChar.push(selectType[i].trim());
    }
  }
  if(typeChar == null){
    alert("Invalid response. All four character types will be used.");
    typeChar = availableChar;
  }

  for(i=0 ; i<typeChar.length ; i++){
    password += charSet[typeChar[i]][randomInt(charSet[typeChar[i]].length)]
  }
  for(i=0; i<numChar-(typeChar.length); i++){
    var randomTypeChar = typeChar[randomInt(typeChar.length)];
    password += charSet[randomTypeChar][randomInt(charSet[randomTypeChar].length)];
  }
  return password;
}

// Generate a random integer for a given range
function randomInt(n) {
	var x = Math.floor(Math.random() * n);
	if (x < 0 || x >= n)
		throw "Arithmetic exception";
	return x;
}

// Write password to the #password input
function writePassword() {
  var password = ""
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
