// ***sort in decreasing order***

//use sort method on the array, having b - a, instead of a - b

let arr = [5, 2, 1, -10, 8];
arr.sort((a,b) => b-a)


console.log( arr ); // 8, 5, 2, 1, -10

// ***Copy and sort array***

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// create sortedArr variable equals to the arr parameter being sorted, using sort method, after the arrow function
// compare to a to b using localeCompare() method
// return sortedArr

function copySorted(arr) {
    let sortedArr = arr.sort((a,b) => a.localeCompare(b))
    return sortedArr
}

console.log(copySorted(["HTML", "JavaScript", "CSS"]))

// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

//map through and assign an item argument to each name, thus creating a new array solely of the names
let names = users.map(item => item.name)

console.log(names)

// **Translate border-left-width to borderLeftWidth***


// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// split str removing the dashes
// newString = newString.map
// declare word and index parameters
// check to see if the index is 0 then return it toLowerCase()
// else return word[0] => which is the first letter of each element in the array toUpperCase() + word.slice(1), this will have the starting position be the second letter and since there isn't a second argument it will include the rest of the word
// join('') the array back together
// return newString

function camelize(str) {
    let newString = str.split('-')
    newString = newString.map(
        function(word, index) {
        if(index == 0) {
            return word.toLowerCase()
        } else {
           return word[0].toUpperCase() + word.slice(1)
        }
    })
    newString = newString.join('')
    return newString
}

console.log(camelize('one-long-word')) //output => oneLongWord

// Filter Range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

//directly return using filter, compare if item is greater or equals to a or if item is less than or equals to b

let arr1 = [5, 3, 8, 1];

function filterRange(arr1, a, b) {
    return arr1.filter(item => (a <= item && item <= b))
}

let filtered = filterRange(arr1, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr1); // 5,3,8,1 (not modified)


// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// declare function
// loop through
// if arr[i] is less than a or arr [i] is greater than b, splice i
// add i-- after, this is important because while the loop is iterating through it will skip over certain elements without it
// return arr

arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++){
        if(a > arr[i] || b < arr[i]) {
            arr.splice(i,1)
            i--
        }
    }
    return arr
}
console.log(filterRangeInPlace(arr, 1, 4)) // => output [3,1]

// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };


let usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

let usersMap = usersMapped.map(x => x)


console.log(usersMap[0].id) // 1
console.log(usersMap[0].fullName) // John Smith

// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

arr = [ pete, john, mary ];

function sortByAge(users){
    arr.sort((a,b) => a.age - b.age)
}
sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete