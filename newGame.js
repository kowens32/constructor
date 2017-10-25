var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];
var dashesAndCorrectGuesses = [];

var newGame = function () {
    this.correctLetter = false;



/////Assign null value to all variables
    this.computerFood = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];
    console.log('food' + computerFood)

    this.computerFoodSplit = function () {
        computerFood.split("");
        console.log('333'+computerFood.split(""))
        for (i =0; i < computerFood.length; i++) {
            dashesAndCorrectGuesses.push("_");


        }
    }

    computerFoodSplit();
    console.log('what is my food'+computerFood)
    console.log('whatis my dash'+dashesAndCorrectGuesses)
}

module.exports = newGame;