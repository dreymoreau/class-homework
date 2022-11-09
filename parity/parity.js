// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

// This program must show exactly 10 numbers including the first one, not 11 numbers!

function divisibleByTwo() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even.`)
        }   else {
            console.log('this is not an even number')
        }
    }
}

divisibleByTwo()