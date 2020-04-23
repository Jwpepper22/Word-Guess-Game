

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0; 
var losses = 0;
var guesses = 0;

computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice)


document.onkeypress = function(event) {
    var userGuess = event.key; 
    
    if(userGuess === computerChoice){
        wins++;
    }else{
        losses++;
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('yourguesses').innerHTML = "Your guesses so far: " + event.key;
}

