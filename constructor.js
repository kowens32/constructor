var Word = require("./newGame.js");

var inquirer = require('inquirer');

var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];

let nodeWord = new Word(breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)]);
console.log(nodeWord)
let dashes = nodeWord.dashesArray;
let userWord = nodeWord.foodArray;
let fillWord;
let testWord;


    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: 'Guess a letter!'

        }

    ]).then(function (user) {

        testWord = user.letter;
        test(testWord);


    });


function test() {
    for (i = 0; i < userWord.length; i++) {
        if (userWord[i] === testWord) {
            dashes[i] = testWord;
            fillWord = dashes.join(" ");
            console.log('here', fillWord);
        }
    }

}



module.exports = inquirer.prompt;