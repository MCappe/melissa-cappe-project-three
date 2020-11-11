// Pseudo code for Project 3

// Load page (hide game area on page load)

// Once page loads, add an event listener that will listen for ‘submit’ on the ‘enter game’ button within the header section
// preventDefault so that page doesn’t reload when user submits ‘enter’ button

// Once submit event occurs, Question 1 is presented on the screen, below the header
// All questions will be stored in an array of objects
// Presented in a form with a question and 3 radio buttons (preventDefault on the 	   radio buttons so that the page doesn’t automatically refresh)

// Create an if/else statement to track whether the user has answered the question correctly
// Display 'correct' or 'incorrect' on the screen based on answer provided
// If incorrect, display the correct answer


// add an event listener to listen for ‘click’ on radio button answer (use a ‘for’ loop to repeat this event for each question x6)

// Add event listener to the final question to smooth scroll to final section where a score will be presented 
// add results of game (correct, incorrect) to the page

// Add event listener to a ‘submit’ button for the user to ‘play again’ (in the final section)

// Add an event listener that will fire Upon hearing ‘submit’ to play again, the page will refresh and the user will be scrolled back up to the top to play again

// document ready
$(document).ready(function() {

// Global variables

// Questions inside an array of objects

const triviaQuestions = [
    {
        question: 'How many films did Sean Connery play James Bond in?',
        answers: [6, 7, 5],
        correctAnswer: 1
    },
    {
        question: 'What product is seen in every scene in Fight Club?',
        answers: ['Starbucks', 'Coca-cola', 'Nestle'],
        correctAnswer: 0
    },
    {
        question: 'What was the first movie in the Marvel Cinematic Universe?',
        answers: ['Avengers', 'Iron Man', 'Captain America: Civil War'],
        correctAnswer: 1
    },
    {
        question: 'What city is the TV show The Wire set in?',
        answers: ['Boston', 'Baltimore', 'Chicago'],
        correctAnswer: 1
    },
    {
        question: 'What is the highest grossing film ever?',
        answers: ['Avengers: Endgame', 'Black Panther', 'Titanic'],
        correctAnswer: 0
    },
    {
        question: 'What concert did Monica, Ross and Chandler attend on the show Friends?',
        answers: ['Counting Crows', 'Gin Blossoms', 'Hootie and the Blowfish'],
        correctAnswer: 2
    },
    {   
        question: 'What is the hashtag symbol technically called?',
        answers: ['Pound sign', 'Octothorp', 'Hectothorp'],
        correctAnswer: 1
    },
    {
        question: 'What was bubble wrap originally used for?',
        answers: ['Wrapping packages', 'Stress reliever', '3D Wallpaper'],
        correctAnswer: 2
    },
    {
        question: 'What was the first muscle car?',
        answers: ['Pontiac GTO', 'Dodge Charger', 'Ford Mustang'],
        correctAnswer: 0
    },
    {
        question: 'What was the first toy ever to be advertised on television',
        answers: ['Barbie', 'Mr. Potato Head', 'G.I. Joe'],
        correctAnswer: 1
    },
    {
        question: 'What colour are aircraft black boxes?',
        answers: ['Black', 'Yellow', 'Orange'],
        correctAnswer: 2
    },
    {
        question: 'How many bones are in the human body?',
        answers: [206, 208, 197],
        correctAnswer: 0
    },
    {
        question: 'What country invented tea?',
        answers: ['China', 'England', 'India'],
        correctAnswer: 0
    },
    {
        question: 'What does IPA stand for?',
        answers: ['International Porter Association', 'India Pale Ale', 'India Premium Ale'],
        correctAnswer: 1
    },
    {
        question: 'What is the original flavour of the twinkie filling?',
        answers: ['Banana cream', 'Custard', 'Coconut cream'],
        correctAnswer: 0
    },
    {
        question: 'Which liquor is made from blue agave?',
        answers: ['Blue curacao', 'Gin', 'Tequila'],
        correctAnswer: 2
    }
];

console.log(triviaQuestions);




})