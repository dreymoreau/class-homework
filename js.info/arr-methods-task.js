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