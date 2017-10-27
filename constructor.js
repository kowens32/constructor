var newGame = require("./newGame.js").newGame;
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
        newGame();
        letterSelection();

        // nextLetter();

        console.log('con' + user.letter);
    });

// }







// console.log(dashesAndCorrectGuesses.push("_"))
module.exports = inquirer.prompt;