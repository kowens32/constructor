var Word = require("./newGame.js");

var inquirer = require('inquirer');

var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];

let nodeWord = new Word(breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)]);
console.log(nodeWord)
let dashes = nodeWord.dashesArray;
let word = nodeWord.foodArray;
let fillWord;


inquirer.prompt([
    {
        type: 'input',
        name: 'letter',
        message: 'Guess a letter!'

    }

]).then(function (user) {

    for (i = 0; i < word.length; i ++) {
        if (word[i] === user.letter) {
            dashes[i] = user.letter;
            fillWord = dashes.join(" ");
            console.log(fillWord);
        }
    }


});




// console.log(dashesAndCorrectGuesses.push("_"))
module.exports = inquirer.prompt;