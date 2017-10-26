var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];
var dashesAndCorrectGuesses = [];

var inputString = process.argv;
var userChoices = inputString[2];
var incorrectLetters = [];

var newGame = function () {
    this.correctLetter = false;
    this.computerFood = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];
    console.log('food' + computerFood)
    this.computerFoodSplit = function () {
        computerFood.split("");
        console.log('333'+computerFood.split(""))
        for (i =0; i < computerFood.length; i++) {
            dashesAndCorrectGuesses.push("_");
        }
    }
    this.computerFoodSplit();
    console.log('what is my food'+computerFood)
    console.log('whatis my dash'+dashesAndCorrectGuesses)

}

var letterSelection = function (computerFood,dashesAndCorrectGuesses ) {
    this.correctLetter = false;
    this.guessesLeft = 15;
    this.test = function () {
        for (i = 0; i < computerFood.length; i++) {
            if (computerFood[i] === userChoices) {
                correctLetter = true;
                dashesAndCorrectGuesses[i] = userChoices;
                console.log('999' +dashesAndCorrectGuesses.join(" "));
            }
        }

        if (!correctLetter) {

            if (incorrectLetters.indexOf(userChoices) < 0) incorrectLetters.push(userChoices) && guessesLeft--;
            {
                console.log("letters" + incorrectLetters.join(" "));
                console.log("guesses" + guessesLeft);
            }
        }
    }
}



module.exports.letterSelection = letterSelection;
module.exports.newGame = newGame;