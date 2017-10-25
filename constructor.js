var newGame = require("./newGame.js");
var letterSelection = require("./letter");
var inquirer = require('inquirer');


    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: 'Guess a letter!'

        }
    ]).then(function (user) {
        newGame();
     letterSelection(user.letter);
     console.log('con'+user.letter);
    });









// console.log(dashesAndCorrectGuesses.push("_"))
module.exports = inquirer.prompt;