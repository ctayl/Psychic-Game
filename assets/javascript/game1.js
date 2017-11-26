var userGuess;
var guesscount;
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compGuess = alpha[Math.floor(Math.random() * (23 - 0) + 0)];

console.log(compGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    
        // Determines which key was pressed.
        var userGuess = event.key;
    
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var compGuess = alpha[Math.floor(Math.random() * (23 - 0) + 0)];
    
        alert("User guess: " + userGuess);
    
        alert("Computer guess: " + compGuess);
    
        var wins = 0;
        var losses = 0;
        var guessCount = 6;
    
        // Win condition
        if (userGuess === compGuess) {
    
            // Add one to var wins
            wins++;
    
            // Randomly chooses a choice from the options array.
            var compGuess = alpha[Math.floor(Math.random() * (23 - 0) + 0)];
    
            // Loss condition
        } else if (userGuess != compGuess&& guessCount == 0) {
    
            // Add one to var losses
            losses++;
            console.log(losses);
    
            // Randomly chooses a choice from the options array.
            var compGuess = alpha[Math.floor(Math.random() * (23 - 0) + 0)];
            console.log(computerGuess);
    
            // User guess wrong
        } else {
    
            // Negates one from guesscount
            guessCount--;
            console.log(guessCount);
    
        }
    }
    