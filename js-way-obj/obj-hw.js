// Dogs
// Complete the following program to add the definition of the Dog class.

// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

class Dog {
    constructor(name,species,size) {
        this.name = name
        this.species = species
        this.size = size
    }
    bark() {
        if(this.size > 60) {
            return 'Grrr! Grrr!'
        } else {
            return 'Woof! Woof!'
        }
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// output 
//Fang is a boarhound dog measuring 75
//Look, a cat! Fang barks: Grrr! Grrr!


const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// output
//Snowy is a terrier dog measuring 22
//Look, a cat! Snowy barks: Woof! Woof!


// Account List

// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. 
// These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description

class BankAccount {
    constructor(name,balance){
        this.name = name
        this.balance = balance
    }
    
    credit(balance){
        return this.balance
    }
    
    describe(){
        console.log(`owner: ${this.name}, balance: ${this.balance}`)
    }
}

let sean = new BankAccount('Sean', 1000)
let brad = new BankAccount('Brad', 1000)
let georges = new BankAccount('Georges',1000)

console.log(sean)
console.log(brad)
console.log(georges)
let allUsers = [sean, brad, georges]
console.log(allUsers)