// wait for user to click on 'enter game' - create an event listener to bring up the first question
// answer options will be clickable - event listener so that when the user selects and answer, they will be told if correct or incorrect (if incorrect, the correct answer will show)
// loop through for 5 questions
// upon completion, add an event listener to to the final question so that user will see their score on the screen
// play again button will show up below score
// event listener if they click play again - resets the page

// Namespacing
const triviaApp = {};

// Initializer function
triviaApp.init = () => {
    triviaApp.eventListener();
}

triviaApp.questionCount = 0;

triviaApp.triviaQuestions = [
    {
        question: 'How many films did Sean Connery play James Bond in?',
        answers: [6, 7, 5],
        correctAnswer: '7'
    },
    {
        question: 'What product is seen in every scene in Fight Club?',
        answers: ['Starbucks', 'Coca-cola', 'Nestle'],
        correctAnswer: 'Starbucks'
    },
    {
        question: 'What was the first movie in the Marvel Cinematic Universe?',
        answers: ['Avengers', 'Iron Man', 'Captain America: Civil War'],
        correctAnswer: 'Iron Man'
    },
    {
        question: 'What city is the TV show The Wire set in?',
        answers: ['Boston', 'Baltimore', 'Chicago'],
        correctAnswer: 'Baltimore'
    },
    {
        question: 'What concert did Monica, Ross and Chandler attend on the show Friends?',
        answers: ['Counting Crows', 'Gin Blossoms', 'Hootie and the Blowfish'],
        correctAnswer: 'Hootie and the Blowfish'
    },
    {   
        question: 'What is the hashtag symbol technically called?',
        answers: ['Pound sign', 'Octothorp', 'Hectothorp'],
        correctAnswer: 'Octothorp'
    },
    {
        question: 'What was bubble wrap originally used for?',
        answers: ['Wrapping packages', 'Stress reliever', '3D Wallpaper'],
        correctAnswer: '3D Wallpaper'
    },
    {
        question: 'What was the first muscle car?',
        answers: ['Pontiac GTO', 'Dodge Charger', 'Ford Mustang'],
        correctAnswer: 'Pontiac GTO'
    },
    {
        question: 'What was the first toy ever to be advertised on television',
        answers: ['Barbie', 'Mr. Potato Head', 'G.I. Joe'],
        correctAnswer: 'Mr. Potato Head'
    },
    {
        question: 'What colour are aircraft black boxes?',
        answers: ['Black', 'Yellow', 'Orange'],
        correctAnswer: 'Orange'
    },
];


triviaApp.eventListener = () => {

    // hide the 'play again' button
    $('#replay').hide();
    // event listener hide the 'enter game' button once clicked
    $('#enter').on('click', function () {
        $('.game-entrance').hide();
        // event listener to display the first question (and possible answers) on the page
        
        console.log(triviaApp.triviaQuestions);
        $('#questions').html(`<h2>${triviaApp.triviaQuestions[0].question}</h2>`);
        $('#answers').html(`<button>${triviaApp.triviaQuestions[0].answers[0]}</button>
        <button>${triviaApp.triviaQuestions[0].answers[1]}</button>
        <button>${triviaApp.triviaQuestions[0].answers[2]}</button>`);
        
    });
}

// randomly pick question from array
// display question and all possibly answers







// click function to select answer
$('#answers').on('click', function() {
})



$(function () {
    triviaApp.init();
})


