var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];

function newGame() {

    /////Assign null value to all variables
    computerFood = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];
    // guessesLeft = 15;
    // incorrectLetters = [];
    correctLetter = false;
    computerFoodSplit = computerFood.split("");
    for (i = 1; i < computerFood.length; i++) {
        dashesAndCorrectGuesses.push("_");
        console.log(computerFood)


}

}


function NewGame() {

}
NewGame.prototype.dashing = function () {
    dashesAndCorrectGuesses=[];

    var computerFood = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];
    computerFoodSplit = computerFood.split("");
    for (i = 1; i < computerFood.length; i++) {
        dashesAndCorrectGuesses.push("_");
        console.log(computerFood)
        console.log(dashesAndCorrectGuesses);
    }
};

var test = new NewGame();

test.dashing();

// module.exports = newGame;