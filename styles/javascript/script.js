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

    // hide the 'play again' button when the page loads
    $('#replay').hide();
    // event listener hide the 'enter game' button once clicked
    $('#enter').on('click',function () {
        $('.game-entrance').hide();

        // event listener to display the first question (and possible answers) on the page
        
        $('#questions').html(`<h2>${triviaApp.triviaQuestions[0].question}</h2>`);
        $('#answers').html(`
        <button data-answerVal="6" class="solution1">${triviaApp.triviaQuestions[0].answers[0]}</button>
        <button data-answerVal="7" class="solution2">${triviaApp.triviaQuestions[0].answers[1]}</button>
        <button data-answerVal="5" class="solution3">${triviaApp.triviaQuestions[0].answers[2]}</button>
        `);
        
        
    });
    
    $('#answers').on('click', 'button', function () {
        // tally up the points - check user's answer
        // move to the next question in the array
        if (triviaApp.questionCount == 4) {
            $('.results').html(`<h2>You scored ${triviaApp.score} out of 5</h2>`)
            
            
        } else {
            const chosenAnswer = $(this).attr('data-answerVal');
            const correct = triviaApp.triviaQuestions[triviaApp.questionCount].correctAnswer;
            // create an if else statement when user clicks on an answer button, the next question will display
            if (correct === chosenAnswer) {
                    triviaApp.score++;
                    // unhide the #replay button so user can play again (or refresh while still playing through)
                    $('#replay').show();
                    $('#replay').on('click', function () {
                        location.reload();
                    })
                    
                } 
                triviaApp.questionCount++;
                // create an event listener statement to determine if  user clicks the final answer, which will prompt a result
                // otherwise will loop through all questions until they're complete
                $('#questions').html(`<h2>${triviaApp.triviaQuestions[triviaApp.questionCount].question}</h2>`);
                $('#answers').html(`
                <button data-answerVal=${triviaApp.triviaQuestions[triviaApp.questionCount].correctAnswer} class="solution1">${triviaApp.triviaQuestions[triviaApp.questionCount].answers[0]}</button>
                <button data-answerVal=${triviaApp.triviaQuestions[triviaApp.questionCount].correctAnswer} class="solution2">${triviaApp.triviaQuestions[triviaApp.questionCount].answers[1]}</button>
                <button data-answerVal=${triviaApp.triviaQuestions[triviaApp.questionCount].correctAnswer} class="solution3">${triviaApp.triviaQuestions[triviaApp.questionCount].answers[2]}</button>
            `);

            }
            
        })
        
}


$(function () {
    triviaApp.init();
})


