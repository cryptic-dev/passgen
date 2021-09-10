const pass = document.getElementById("pw");
const lent = document.getElementById("len");
const upper = document.getElementById("up");
const lower = document.getElementById("low");
const symbol = document.getElementById("sym");
const number = document.getElementById("num");
const gen = document.getElementById("gen");

let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let b = "abcdefghijklmnopqrstuvwxyz";
let c = "0123456789";
let d = "!?;:&é/*$<>()-è_çà=";

function GetUpper() {
    return a[Math.floor(Math.random() * a.length)]
}
function GetLower() {
    return b[Math.floor(Math.random() * b.length)]
}
function GetNum() {
    return c[Math.floor(Math.random() * c.length)]
}
function GetSym() {
    return d[Math.floor(Math.random() * d.length)]
}

function Generate() {
    var v = lent.value;
    let password = "";
    
    for (let i = 0; i<v; i++) {
        const t = getPass()
        password += t

    }
    pass.innerHTML = password;
}

function getPass() {
    let xs = [];
    if (upper.checked) {
       return xs.push(GetUpper());
    }
    if (lower.checked) {
        return xs.push(GetLower())
    }
    if (symbol.checked) {
        return xs.push(GetSym())
    }
    if (number.checked) {
        return xs.push(GetNum())
    }
    return xs[Math.floor(Math.random() * xs.length)]
}

gen.addEventListener("click", Generate)

