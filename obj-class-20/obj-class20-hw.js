//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

const streetFighter = {
    firstName: "Fighter",
    lastName: "Bob",
    strength: "see through walls",
    weakness: "negative self talk",
    hobbies: "reading, meditation"
  };
 
 function fullName(character) {
        return `${character.firstName} ${character.lastName}`
 }
 
 function strength(strength){
     return `${strength.strength}`
 }
 
  function outsideOfStreetFighting(hobbies){
     return `${hobbies.hobbies}`
 }
    
  console.log(fullName(streetFighter))
  console.log(strength(streetFighter))
  console.log(outsideOfStreetFighting(streetFighter))