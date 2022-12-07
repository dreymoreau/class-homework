// Adding Character Experience

// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
// TODO: create the character object here

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    
    describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} points.`
    }
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

// output => Aurora has 130 health points, 35 as strength and 15 points.


// Modeling a dog

// Complete the following program to add the dog object definition.

const dog = {
  name: "Fang",
  species: "boarhound",
  size: 75,
  
  bark(){
      return dog.bark = "Grrr! Grrr!"
  }
}

// Modeling a circle

// Complete the following program to add the circle object definition. Its radius value is input by the user.

// Modelling a bank account

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.


const account = {
  name: "Alex",
  balance: 0,

  credit(value) {
    return account.balance += value;
  },
  
  describe() {
    return account;
  }
};
   console.log(`owner: ${account.name}, balance ${account.balance}`)
  //  output => owner: Alex, balance 0

   account.balance += 250;
   account.balance -= 80;

  console.log(`owner: ${account.name}, balance ${account.balance}`)
  //  output => owner: Alex, balance 170

  