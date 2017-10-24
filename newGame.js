
function newGame() {
    var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
        "pancakes"];
    /////Assign null value to all variables
    computerFood = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];
    // guessesLeft = 15;
    // incorrectLetters = [];
    correctLetter = false;
    dashesAndCorrectGuesses=[];
    computerFoodSplit = computerFood.split("");
    for (i = 1; i < computerFood.length; i++) {
        dashesAndCorrectGuesses.push("_");
        console.log(computerFood)

    }

}


module.exports = newGame;