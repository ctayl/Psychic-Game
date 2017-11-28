var userGuess;
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = alpha[Math.floor(Math.random() * alpha.length)];

var wins = 0;
var losses = 0;
var guessCount = 6;
var guessList = [];
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;


    console.log(compGuess);
    console.log(userGuess);


    // Win condition
    if (userGuess === compGuess) {

        // Add one to var wins
        wins++;
        console.log("wins:" + wins);
        document.getElementById("wincount").innerHTML = wins;

        // Randomly chooses a choice from the options array.
        compGuess = alpha[Math.floor(Math.random() * (23 - 0) + 0)];

        guessList = [];

        // Loss condition
    } else {

        if (guessCount == 1) {

            // Add one to var losses
            losses++;
            console.log("losses:" + losses);
            document.getElementById("losscount").innerHTML = losses;

            // Randomly chooses a choice from the options array.
            compGuess = alpha[Math.floor(Math.random() * (23 - 0) + 0)];
            console.log(compGuess);
            guessCount = 6;
            document.getElementById("guesscount").innerHTML = guessCount;

        } else {

            // Negates one from guesscount
            guessCount--;
            console.log("guesses left" + guessCount);
            document.getElementById("guesscount").innerHTML = guessCount;

            // Intended to push user guess into an array and push to html
            guessList.push(userGuess);
            document.getElementById("guessList").innerHTML = guessList;
        }
    }
}