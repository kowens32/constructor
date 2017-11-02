


class Word {
    constructor(food) {
        this.food = food;
        this.foodArray = this.food.split('');
        this.dashesArray = this.foodArray.map(function(letter) {
            return letter = '_';
        })

    }

};


// let nodeWord = new Word(breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)])




module.exports = Word;