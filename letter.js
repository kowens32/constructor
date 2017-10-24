
var inputString = process.argv;
var userChoices = inputString[2];
function letterSelection () {
    var correctLetter = false;
    for (i = 0; i < computerFoodSplit.length; i++) {
        if (computerFoodSplit[i] === userChoices) {
            correctLetter = true;
            dashesAndCorrectGuesses[i] = userChoices;
            console.log(dashesAndCorrectGuesses.join(" "));
            console.log(userChoices);
            //if user has selected correct choice, push letter to correct position in array
            //  document.getElementById("currentWord").innerHTML = dashesAndCorrectGuesses.join(" ");


        }
    }
}


module.exports = letterSelection;