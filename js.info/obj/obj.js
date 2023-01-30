// Task 1

// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {}

user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name


// Task 3

// Sum object properties
// importance: 5
// We have an object storing salaries of our team:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
  
  // If salaries is empty, then the result must be 0.

  //declare sum variable 
  // for loop throug using for of loop selecting the values in salaries with the Object datatype
  // add all values to the sum variable
  // if salaries is empty, return 0
  // console.log sum => 390
  let sum = 0
  for (let key in salaries){
     sum += salaries[key]
     if (salaries == {}) {
         return 0
     }
  }
  console.log(sum)
