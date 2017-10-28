var letterSelection;
letterSelection = function (correctLetter, trueLetter, falseLetter) {
    this.correctLetter = false;
this.falseLetter = falseLetter;
this.trueLetter = trueLetter;

    letterSelection.prototype.trueLetter = function () {
        for (i = 0; i < computerFoodSplit.length; i++) {
            if (computerFoodSplit[i] === userChoices) {
                this.correctLetter = true;
                dashesAndCorrectGuesses[i] = userChoices;
                console.log('places ' + dashesAndCorrectGuesses.join(" "));
            }
        }
    };

    letterSelection.prototype.falseLetter = function () {

        if (!correctLetter) {
            if (incorrectLetters.indexOf(userChoices) < 0) incorrectLetters.push(userChoices) && guessesLeft--;
            {
                console.log("letters " + incorrectLetters.join(" "));
                console.log("guesses " + guessesLeft);
            }

            if (dashesAndCorrectGuesses.toString() === computerFoodSplit.toString()) {
                //and one to user win and alert user
                userwin++;
                console.log('win ' + userWin);
            }


        }
    }
};
 module.exports.letterSelection = letterSelection;
