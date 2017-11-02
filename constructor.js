var Word = require("./newGame.js");

var inquirer = require('inquirer');

var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];

let nodeWord = new Word(breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)]);
console.log(nodeWord)
let dashes = nodeWord.dashesArray;
let word = nodeWord.foodArray;


inquirer.prompt([
    {
        type: 'input',
        name: 'letter',
        message: 'Guess a letter!'

    }

]).then(function (user) {

    if (word[i] = user.letter) {
for ( i = 0; i < word.length, i ++)

 {
        dashes = word.replace(user.letter);
        console.log('here', dashes);
    }
     }

let test = new Correct(user.letter);

});


// newWord.getLetterIndex(guess)
// {
//     return this.foodArray.indexOf(guess);
// }
//  {
//
// if (indexOf(user.letter)!= -1) {
//     console.log(indexOf(user.letter))
// }
//
// };
//
//
// replaceCorrectLetter(index, letter)
// foodArray.map(letter => {
//     foodArray[i] = letter;
// })
//
//
//
//
// console.log('con' + user.letter);


// }







// console.log(dashesAndCorrectGuesses.push("_"))
module.exports = inquirer.prompt;