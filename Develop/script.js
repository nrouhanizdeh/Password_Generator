// Assignment Code
var generateBtn = document.querySelector("#generate");

// prompt variables
var minChar = 4;
var maxChar = 10;
var availableChar = ["lowercase","numeric","numeric","special"];
var lowerStr = "abcdefghijklmnopqrstuvwxyz"; //to upper 
var upperStr = lowerStr.toUpperCase();
var numeric = "0123456789";
var specialChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var password = "";
var character = "";


minChar = prompt("Minimum number of characters?");
if (minChar<=0 || isNaN(minChar) || !minChar) {
  alert("Invalid response. Default minimum of 4 characters will be used.");
  minChar = 4;
}
maxChar = prompt("Max number of characters?");
if (maxChar>1000 || maxChar<0 || isNaN(maxChar || !maxChar)) {
  alert("Invalid response. Default max of 10 characters will be used");
  minChar = 10;
}
var selectType = prompt("Choose one or more character types (comma separated): lowercase, uppercase, numeric, and/or special ");
selectType = selectType.split(',');
var typeChar = ["test"];
for(var item in selectType){
  item = item.trim();
  console.log(availableChar);
  if(availableChar.includes(item)){
    typeChar = typeChar.push(item);
  }
  if( typeChar.length === 0 ){
    typeChar = availableChar;
  }
}
console.log(typeChar);

function generatePassword() {

  while(password.length<maxChar)
    entity1 = Math.ceil(lowerStr.length * Math.random());
    entity2 = Math.ceil(numeric.length * Math.random());
    entity3 = Math.ceil(specialChar.length * Math.random());
    entity4 = Math.ceil(upperStr.length * Math.random());
  hold = lowerStr.charAt( entity1 );
  hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
  character += hold;
  character += numeric.charAt( entity2 );
  character += specialChar.charAt( entity3 );
  password = character;

  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password.substr(0,maxChar);
}

console.log( generatePassword() );

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
