// var newGame = require("./newGame.js");
// var inputString = process.argv;
// var userChoices = inputString[2];
// var incorrectLetters = [];
//
//
// function letterSelection () {
//     this.correctLetter = false;
//     this.guessesLeft = 15;
//     for (i = 0; i < computerFoodSplit.length; i++) {
//         if (computerFoodSplit[i] === userChoices) {
//             correctLetter = true;
//             dashesAndCorrectGuesses[i] = userChoices;
//             console.log(dashesAndCorrectGuesses.join(" "));
//
//
//         }
//     }
//     if (!correctLetter) {
// //check if userchoice is not already within array, the subtract one from guesses left
//         if (incorrectLetters.indexOf(userChoices) < 0) incorrectLetters.push(userChoices) && guessesLeft--;
//         {
//             console.log("letters" +incorrectLetters.join(" "));
//             console.log("guesses" + guessesLeft);
//         }
//
//     }
// }
//
// letterSelection();
//
// module.exports = letterSelection;



// var letterSelection = function (computerFood,dashesAndCorrectGuesses, userChoices, correctLetter, guessesLeft) {
//     this.correctLetter = false;
//     this.guessesLeft = 15;
//     this.test = function () {
//         for (i = 0; i < computerFood.length; i++) {
//             if (computerFood[i] === userChoices) {
//                 correctLetter = true;
//                 dashesAndCorrectGuesses[i] = userChoices;
//                 console.log('999' +dashesAndCorrectGuesses.join(" "));
//             }
//         }
//
//         if (!correctLetter) {
//
//             if (incorrectLetters.indexOf(userChoices) < 0) incorrectLetters.push(userChoices) && guessesLeft--;
//             {
//                 console.log("letters" + incorrectLetters.join(" "));
//                 console.log("guesses" + guessesLeft);
//             }
//         }
//     }
// };
//