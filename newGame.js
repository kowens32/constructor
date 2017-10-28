
var breakfastFoods = ["croissants", "bagels", "oatmeal","eggs","fruit","coffee","tea","waffles",
    "pancakes"];

var newWord;
newWord = function (computerFood, computerFoodSplit, dashesAndCorrectGuesses) {

    // this.computerFood = computerFood;
    this.computerFoodSplit = computerFoodSplit;
    this.dashesAndCorrectGuesses = dashesAndCorrectGuesses;


    computerFood =
        breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];

    console.log('wat is this ' + computerFood)
    newWord.prototype.computerFoodSplit = function () {
        computerFood.split("");

    };

    newWord.prototype.dashesAndCorrectGuesses = function () {
        for (i = 0; i < computerFood.length; i++) {
            dashesAndCorrectGuesses.push("_");
        }
    };

};
module.exports.newWord = newWord;



