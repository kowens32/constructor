var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];
var dashesAndCorrectGuesses = [];
var guessesLeft = 15;
var inputString = process.argv;
var userChoices = inputString[2];
var incorrectLetters = [];
var userWin = 0;

var newGame = function () {
    this.correctLetter = false;
    this.computerFood = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];
    computerFoodSplit = computerFood.split("");
    for (i =0; i < computerFood.length; i++) {
        dashesAndCorrectGuesses.push("_");
    }
    console.log('what is my food '+computerFood)
    console.log('whatis my dash '+dashesAndCorrectGuesses)
    console.log('split '+computerFoodSplit)
}


var letterSelection = function () {
    this.correctLetter = false;
    for (i = 0; i < computerFoodSplit.length; i++) {
        if (computerFoodSplit[i] === userChoices) {
            correctLetter = true;
            dashesAndCorrectGuesses[i] = userChoices;
            console.log('places '+dashesAndCorrectGuesses.join(" "));
        }
    }
    if (!correctLetter) {
        if (incorrectLetters.indexOf(userChoices) < 0) incorrectLetters.push(userChoices) && guessesLeft--;
        {
            console.log("letters " +incorrectLetters.join(" "));
            console.log("guesses " + guessesLeft);
        }

        if (dashesAndCorrectGuesses.toString() === computerFoodSplit.toString()) {
            //and one to user win and alert user
            userwin++;
            console.log('win '+userWin);
        }


    }
}


module.exports.letterSelection = letterSelection;
module.exports.newGame = newGame;