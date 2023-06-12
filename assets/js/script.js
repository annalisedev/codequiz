
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".startbutton");
var questionHeader = document.querySelector(".questionheader");
var answer1 = document.querySelector('[data-number="1"]');
var answer2 = document.querySelector('[data-number="2"]');
var answer3 = document.querySelector('[data-number="3"]');
var answer4 = document.querySelector('[data-number="4"]');
var result = document.querySelector(".result");
var finalScore = document.querySelector(".finalscore");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var youlose = document.querySelector(".youlose");

var timer;
var timerCount;
var counting;
var questionorder;

var quizQuestions = {
    'Which of the following keywords is used to define a variable in Javascript?': ['var', 'let', 'Both A and B', 'None of the Above', '1'],
    'Javascript file has an extension of?': ['.java', '.js', '.javascript', '.xml', '2'],
    'Javascript is a(n) _______ language?': ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the Above', '1'],
    'Which function is used to serialise an object into a JSON string in Javascript?': ['stringify()', 'parse()', 'convert()', 'None of the above', '3']
}

// Kick off quiz once start button is selected. Hide the header page and show div with first question. Timer starts.
function startQuiz() {
    document.getElementById("header").style.display = "none";
    document.getElementById("question").style.display = "inherit";
    counting = true;
    startTimer();
    questionorder = 0
    startQuestion();
}

// Function to allow for the multiple questions to be selected as the question order goes up and the player progresses.
function startQuestion() {
    questionHeader.textContent = "Q: " + (Object.keys(quizQuestions)[questionorder]);
    answer1.textContent = "1. " + (Object.values(quizQuestions)[questionorder][0]);
    answer2.textContent = "2. " + (Object.values(quizQuestions)[questionorder][1]);
    answer3.textContent = "3. " + (Object.values(quizQuestions)[questionorder][2]);
    answer4.textContent = "4. " + (Object.values(quizQuestions)[questionorder][3]);
}

// Event listener to identify which button was clicked and whether this (1,2,3,4) matches the answer (final number in value array). If not removes 10 seconds from timer.
var selectedanswer = document.querySelector(".answeroptions");

selectedanswer.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches(".answer")) {
        var number = element.getAttribute("data-number");

        if(number===(Object.values(quizQuestions)[questionorder][4])) {
            result.textContent = "Correct!";
        } else {
            timerCount = timerCount-10;
            result.textContent = "Wrong!";
        } 
        document.getElementById("result").style.display = "inherit";
    }

    questionorder++;

    // Take user to next question if there are any left, otherwise take them to All Done page to submit their initials.
    if(questionorder<(Object.keys(quizQuestions).length)) {
        startQuestion();
    } else {
        allDone();
    }
})

// Hide all other elements (divs) and only show All done section. Stop timer and display time left. Store input details into local storage. Create array for this if it doesnt already exist.
function allDone() {
    document.getElementById("question").style.display = "none";
    document.getElementById("alldone").style.display = "inherit";
    document.getElementById("result").style.display = "none";
    document.getElementById("timer").style.display = "none";

    counting = false;

    finalScore.textContent = "Your final score is " + timerCount;

    submitButton.addEventListener("click", function(eventScore) {
        eventScore.preventDefault();
    
    var player = {
        initials: initialsInput.value.trim(),
        score: timerCount,
    };
    

    if ((localStorage.getItem("playerDetails"))===null) {
        var scoreboard = [];
        scoreboard.push(player);
        localStorage.setItem("playerDetails", JSON.stringify(scoreboard));
    } else {
        var scoreboard = JSON.parse(localStorage.getItem("playerDetails"));
        scoreboard.push(player);
        scoreboard.sort((a,b) => b.score-a.score);
        localStorage.setItem("playerDetails", JSON.stringify(scoreboard));
    }

    window.location.href="highscores.html";
    });    
}

// If timer finishes before quiz does, end game.
function timeElapsed() {
    document.getElementById("question").style.display = "none";
    youlose.style.display = "inherit";
}

// Starts timer, defines time and displays countdown in one second increments.
function startTimer() {
    timerCount = 75;
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
        if (timerCount === 0) {
            timeElapsed();
        }
        if (timerCount === 0 || counting === false)  {
        clearInterval(timer); 
      }        
    }, 1000)
}

startButton.addEventListener("click", startQuiz);

