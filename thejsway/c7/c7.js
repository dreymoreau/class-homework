// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.
// Sum of values

let musketeers = ['Athos', 'Porthos', 'Aramis']

for(let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i])
}

musketeers.push("D'Artagnan")

console.log(musketeers)

musketeers.forEach(elem => {
    console.log(musketeers)
  })

  musketeers.splice(2,1)
  console.log(musketeers)
  
  for(const musketeer of musketeers){
    console.log(musketeers)
  }

  // Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// declare sum variable
// iterate through with a for loop and add each element together by the index, to sum
// console.log sum
const values1 = [3, 11, 7, 2, 9, 10];
let sum = 0;
for(let i = 0; i < values1.length; i++){
         sum += values1[i]
}

console.log(sum)

// Write a program that creates the following array, then calculates and shows the array's maximum value.
const values2 = [3, 11, 7, 2, 9, 10];

for(let i = 0; i < values2.length; i++){
    console.log(Math.max(...values2))
}
