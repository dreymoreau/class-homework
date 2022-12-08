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