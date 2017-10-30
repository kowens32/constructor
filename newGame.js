
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

class Word {
    constructor(food) {
        this.food = food;
        this.foodArray = this.food.split('');
        this.dashesArray = this.foodArray.map(letter => {
            letter = '-';
        })
    }

    getLetterIndex(letter) {
        return this.foodArray.indexOf(letter);
    }

    replaceCorrectLetter(index, letter) {

    }
}


let newWord = new Word(breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)])


let guess = newWord.getLetterIndex(process.argv[2])
