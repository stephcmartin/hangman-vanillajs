"use strict";

const movies = ['The Godfather', 'The Shawshank Redemption', 'Casablanca', 'The Dark Knight',
    'Citizen Kane', 'Gone with the Wind', 'The Wizard of Oz', 'Lawrence of Arabia', 'Psycho',
    'Forrest Gump', 'The Sound of Music', 'West Side Story', 'The Silence of the Lambs',
    'Apocalypse Now', 'Titanic'];

const movie = movies[Math.floor(Math.random() * movies.length)]
let lives = 5
let hasFinished = false;

document.getElementById("lives").innerHTML = lives;

let yourGuess = []

let answerArray = [];

for (let i = 0; i < movie.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = movie.length;

if (remainingLetters != 0 & lives >= 0) {
    // Show How Many Words there are in array
    document.getElementById("guessWord").innerHTML = answerArray.join(" ")
    document.getElementById("lives").innerHTML = lives;
}

function checkGuess() {
    // Push letter to Guess Array
    yourGuess.push(letter.value);
    // Change the html to show your guesses
    document.getElementById("yourGuess").innerHTML = yourGuess;
    // If the letter is included in the movie title
    // AND
    // Remaing letters is not less than 0
    // AND you have more than 0 lives 
    if (movie.includes(letter.value) && remainingLetters > 0 && lives > 0) {
        // Reveal letter in movie title

        // Take away remaining number of letters to be guesses
        remainingLetters--
    } else {
        //    take away one life from score
        lives--
        document.getElementById("lives").innerHTML = lives;
    }

}