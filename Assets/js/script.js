
var timerElement = document.querySelector(".timer")
var startButton = document.querySelector(".startbutton");
var questionHeader = document.querySelector(".questionheader")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")

var timer;
var timerCount;
var questionorder;

var quizQuestions = {
    'Which of the following keywords is used to define a variable in Javascript?': ['var', 'let', 'Both A and B', 'None of the Above', 1],
    'Javascript file has an extension of?': ['.java', '.js', '.javascript', '.xml', 2],
    'Javascript is a(n) _______ language?': ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the Above', 1],
    'Which function is used to serialise an object into a JSON string in Javascript?': ['stringify()', 'parse()', 'convert()', 'None of the above', 3]
}

function startQuiz() {
    document.getElementById("header").style.display = "none";
    document.getElementById("question").style.display = "inherit";
    startTimer()
    //show first question function
    console.log(Object.keys(quizQuestions)[0])
    console.log(Object.keys(quizQuestions).length)
    questionorder = 0
    startQuestion();
}

function startQuestion() {
    questionHeader.textContent = "Q: " + (Object.keys(quizQuestions)[0]);
    answer1.textContent = "1. " + (Object.values(quizQuestions)[questionorder][0]);
    answer2.textContent = "2. " + (Object.values(quizQuestions)[questionorder][1]);
    answer3.textContent = "3. " + (Object.values(quizQuestions)[questionorder][2]);
    answer4.textContent = "4. " + (Object.values(quizQuestions)[questionorder][3]);

    questionorder++;
}

function selection(answer) {
    console.log(answer);
}

function startTimer() {
    timerCount = 75

    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
        if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        //loseGame();
      }        
    }, 1000)
}

startButton.addEventListener("click", startQuiz);

answer1.addEventListener("click", selection(1));
answer2.addEventListener("click", selection(2));
answer3.addEventListener("click", selection(3));
answer4.addEventListener("click", selection(4));