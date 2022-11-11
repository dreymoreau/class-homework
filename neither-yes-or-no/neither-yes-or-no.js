// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter 
// text until either "yes" or "no" is typed, which ends the game.

function yesOrNo() {
    let product = prompt('enter a word')

    while (product != "yes" && product != "no") {
        product = prompt('enter a word')
    }
}

yesOrNo()