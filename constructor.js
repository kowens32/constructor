var fs = require("fs");
var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];

var inputString = process.argv;
var userChoices = inputString[2];



function newGame() {
    /////Assign null value to all variables
    computerFood = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];

    guessesLeft = 15;
    incorrectLetters = [];
    correctLetter = false;
    dashesAndCorrectGuesses=[];
    computerFoodSplit = computerFood.split("");
    for (i = 0; i < computerFood.length; i++) {
        dashesAndCorrectGuesses.push("_");

    }

}
function letterSelection () {
    var correctLetter = false;
    for (i = 0; i < computerFoodSplit.length; i++) {
        if (computerFoodSplit[i] === userChoices) {
            correctLetter = true;
            dashesAndCorrectGuesses[i] = userChoices;
            //if user has selected correct choice, push letter to correct position in array
            document.getElementById("currentWord").innerHTML = dashesAndCorrectGuesses.join(" ");
        }
    }
}
newGame();
console.log(computerFood);
console.log(dashesAndCorrectGuesses);
console.log(userChoices);