
var inputString = process.argv;
var userChoices = inputString[2];
var incorrectLetters = [];
var guessesLeft = 15;

function letterSelection () {
    var correctLetter = false;
    for (i = 0; i < computerFoodSplit.length; i++) {
        if (computerFoodSplit[i] === userChoices) {
            correctLetter = true;
            dashesAndCorrectGuesses[i] = userChoices;
            console.log(dashesAndCorrectGuesses.join(" "));


        }
    }
    if (!correctLetter) {
//check if userchoice is not already within array, the subtract one from guesses left
        if (incorrectLetters.indexOf(userChoices) < 0) incorrectLetters.push(userChoices) && guessesLeft--;
        {
            console.log("letters" +incorrectLetters.join(" "));
            console.log("guesses" + guessesLeft);
        }

    }
}

module.exports = letterSelection;