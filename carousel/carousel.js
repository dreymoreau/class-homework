// thejsway - Carousel

// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.

function inputNum() {
  
    let inputNumber = prompt('input a number up to 10')
  
      for (let carousel = 1; carousel <= inputNumber ; carousel++) {
          
          if (carousel <= 10) {
          console.log('Turn number: ' + carousel)
       }
     }
  }
  
  inputNum()