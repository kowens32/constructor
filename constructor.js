var Word = require("./newGame.js");

var inquirer = require('inquirer');

var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];

let nodeWord = new Word(breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)]);
console.log(nodeWord);

// var nextLetter = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: 'Guess a letter!'

        }

    ]).then(function (user) {
        // getLetterIndex(user.letter) {
        // return this.foodArray.indexOf(user.letter);
        // if (indexOf(user.letter)!= -1) {
        //     console.log(indexOf(user.letter))
        // }
        //
        // };


        });




replaceCorrectLetter(index, letter)
    foodArray.map(letter => {
        foodArray[i] = letter;
    })




        console.log('con' + user.letter);


// }







// console.log(dashesAndCorrectGuesses.push("_"))
module.exports = inquirer.prompt;