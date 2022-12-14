// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

function displayName() {
    let firstName = prompt("first name?")
    let lastName = prompt("last name?")
    
    return `${firstName} ${lastName}`
 }
 
 console.log(displayName());

//  Observe the following program and try to predict the final values of its variables.

let a = 2;
a -= 1;
a++; // a = 2
let b = 8;
b += 2; //b = 10
const c = a + b * b; //c = 102
const d = a * b + b; //d = 30
const e = a * (b + b); //e = 40
const f = a * b / a; //f = 10
const g = b / a * a; //g = 10
console.log(a, b, c, d, e, f, g);