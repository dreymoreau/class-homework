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

// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

function asksUser() {
    let sum = Number(prompt('input a raw price'))

    if(sum){
        return sum * 1.20
    }
}

console.log(asksUser())

// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

function convertToFarenheit() {
    let temp = prompt('input a temperature in celcius')

    temp = temp * 9/5 + 32

    return temp 
}

console.log(convertToFarenheit())

// Variable swapping
// Observe the following program.

// let number1 = 5;
// let number2 = 3;

// // TODO: type your code here (and nowhere else!)

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.

let number1 = 5
let number2 = 3
let number3 = 0

number3 = number1
number1 = number2
number2 = number3

console.log(number1); // Should show 3
console.log(number2); // Should show 5