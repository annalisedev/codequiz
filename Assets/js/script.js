
var timerElement = document.querySelector(".timer")
var startButton = document.querySelector(".startbutton");

var timer;
var timerCount;

function startQuiz() {
    //show first question
    startTimer()
}

function startTimer() {
    timerCount = 75

    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        //loseGame();
      }        
    }, 1000)
}

timerElement.textContent=timerCount

var quizQuestions = {
    question1: {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        1: "var",
        2: "let",
        3: "Both A and B",
        4: "None of the Above",
        correctanswer: 1
    },
    question2: {
        question: "Javascript file has an extension of?",
        1: ".java",
        2: ".js",
        3: ".javascript",
        4: ".xml",
        correctanswer: 2
    },
    question3: {
        question: "Javascript is a(n) _______ language?",
        1: "Object-Oriented",
        2: "Object-Based",
        3: "Procedural",
        4: "None of the Above",
        correctanswer: 1
    },
    question4: {
        question: "Which function is used to serialise an object into a JSON string in Javascript?",
        1: "stringify()",
        2: "parse()",
        3: "convert()",
        4: "None of the above",
        correctanswer: 3
    }
    
}

startButton.addEventListener("click", startQuiz);