const isLower = document.getElementById("lowercase");
const isUpper = document.getElementById("uppercase");
const isNumber = document.getElementById("numbers");
const length = document.getElementById("length");
const isSymbol = document.getElementById("symbols");
const isGenerate = document.getElementById("generate");
const isCopy = document.getElementById("copy");

function getRandomChar(charSet) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let allChars = "";
  if (includeUppercase) allChars += upperChars;
  if (includeLowercase) allChars += lowerChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (allChars === "") return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomChar(allChars);
  }
  return password;
}

isGenerate.addEventListener("click", () => {
  const generatedPass = document.getElementById("generated");
  const lengthval = parseInt(length.value);
  const lowerTrue = isLower.checked;
  const upperTrue = isUpper.checked;
  const symbolTrue = isSymbol.checked;
  const numberTrue = isNumber.checked;

  const passVal = generatePassword(
    lengthval,
    upperTrue,
    lowerTrue,
    numberTrue,
    symbolTrue
  );
  generatedPass.value = passVal;
});

isCopy.addEventListener("click", () => {
  const passGen = document.getElementById("generated");
  passGen.select();
  document.execCommand("copy");
  alert("Password copied");
});
