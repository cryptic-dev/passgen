const pass = document.getElementById("pw");
const lent = document.getElementById("len");
const upper = document.getElementById("up");
const lower = document.getElementById("low");
const symbol = document.getElementById("sym");
const number = document.getElementById("num");

let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let digits = "0123456789";
let symbols = "!?;:&é/*$<>()-è_çà=";

function getUpper() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLower() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNum() {
  return digits[Math.floor(Math.random() * digits.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generate() {
  var v = lent.value;

  if (!v) {
    pass.innerHTML = "Length is required";
  }

  //   if (!upper.checked && !lower.checked && !symbol.checked && !number.checked) {
  //     pass.innerHTML = "You need to select at least one type";
  //   }

  let password = [];

  for (let i = 0; i < v; i++) {
    //random number between 0-3; used to choose character type (symbol/lower/digit/lower)
    let charType = Math.floor(Math.random() * 4);

    console.log(charType);
    if (upper.checked && charType == 0) {
      console.log("hna upper");
      password.push(getUpper());
    } else if (symbol.checked && charType == 1) {
      console.log("hna symbol");
      password.push(getSymbol());
    } else if (number.checked && charType == 2) {
      console.log("hna number");
      password.push(getNum());
    } else {
      console.log("hna lower");
      password.push(getLower());
    }
  }

  pass.innerHTML = password.join("");
}
