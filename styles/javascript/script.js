// Namespacing
const triviaApp = {};

// Initializer function
triviaApp.init = () => {
    triviaApp.eventListener();
}

triviaApp.questionCount = 0;
triviaApp.score = 0;
triviaApp.userGuess = '';

// Question/Answer array
triviaApp.triviaQuestions = [
    {
        question: 'How many films did Sean Connery play James Bond in?',
        answers: [6, 7, 5],
        correctAnswer: '7'
    },
    {
        question: 'What city is the TV show The Wire set in?',
        answers: ['Boston', 'Baltimore', 'Chicago'],
        correctAnswer: 'Baltimore'
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
    
        $('#questions').html(`<h2>${triviaApp.triviaQuestions[0].question}</h2>`);
        $('#answers').html(`
        <button data-q="1" data-answerVal="6">${triviaApp.triviaQuestions[0].answers[0]}</button>
        <button data-q="1" data-answerVal="7">${triviaApp.triviaQuestions[0].answers[1]}</button>
        <button data-q="1" data-answerVal="5">${triviaApp.triviaQuestions[0].answers[2]}</button>
        `);
        
        // create an event listener that listens for user to click on an answer button, which will prompt the next question to come up on the page
        
    });
        $('#answers').on('click', 'button', function () {
            // 1) tally up the points - check user's answer
            // 2) move to the next question in the array
            console.log(triviaApp.questionCount)
            if (triviaApp.questionCount == 4) {
                console.log('results')
                $('.results').html(`<h2>You scored ${triviaApp.score} out of 5</h2>`)
                
            } else {
                const chosenAnswer = $(this).attr('data-answerVal');
                const correct = triviaApp.triviaQuestions[triviaApp.questionCount].correctAnswer;
                if (correct === chosenAnswer) {
                    triviaApp.score++;
                    
                } 
                triviaApp.questionCount++;
                $('#questions').html(`<h2>${triviaApp.triviaQuestions[triviaApp.questionCount].question}</h2>`);
                $('#answers').html(`
                <button data-q="1" data-answerVal="6">${triviaApp.triviaQuestions[triviaApp.questionCount].answers[0]}</button>
                <button data-q="1" data-answerVal="7">${triviaApp.triviaQuestions[triviaApp.questionCount].answers[1]}</button>
                <button data-q="1" data-answerVal="5">${triviaApp.triviaQuestions[triviaApp.questionCount].answers[2]}</button>
            `);

            }
            
        })
        
}

// create an event listener to listen for when the user clicks the final answer, which will prompt a results <h2>
// unhide the #replay button

$(function () {
    triviaApp.init();
})


