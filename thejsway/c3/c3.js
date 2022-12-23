// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let day = prompt('Enter a day')

 if(day === 'Monday'){
    console.log('Tuesday')
} else if (day === 'Tuesday') {
    console.log('Wednesday')
} else if (day === 'Wednesday') {
    console.log('Thursday')
} else if (day === 'Thursday') {
    console.log('Friday')
} else if (day === 'Friday') {
    console.log('Saturday')
} else if (day === 'Saturday') {
    console.log('Sunday')
} else if (day === 'Sunday') {
    console.log('End of Week')
}