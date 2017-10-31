


class Word {
    constructor(food) {
        this.food = food;
        this.foodArray = this.food.split('');
        this.dashesArray = this.foodArray.map(letter => {
            letter = '-';
        })

    }

};


// let nodeWord = new Word(breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)])


// let guess = newWord.getLetterIndex(process.argv[2])

module.exports = Word;