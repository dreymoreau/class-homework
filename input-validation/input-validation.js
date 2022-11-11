// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

    function askForANum() {
        let product = prompt('ask for a number')

        while (product < 50 || product > 100) {
            product = prompt('ask for a number')
        }

        console.log('you chose the right number!')
    }

    askForANum()
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.