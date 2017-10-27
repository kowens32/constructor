var newWord = require("./letter.js").newWord;
var letterSelection = require("./newGame.js").letterSelection;
var inquirer = require('inquirer');

// var nextLetter = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: 'Guess a letter!'

        }

    ]).then(function (user) {
        newWord();
        letterSelection();

        // nextLetter();

        console.log('con' + user.letter);
    });

// }







// console.log(dashesAndCorrectGuesses.push("_"))
module.exports = inquirer.prompt;