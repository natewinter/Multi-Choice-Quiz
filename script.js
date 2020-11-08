var score = 0;

var total = 5;

var point = 1;

var highest = total * point;

var secondsLeft = 30;
var timerInterval;
var timeEl = document.querySelector("#timer");
var mainEl = document.getElementById("main");

var highscores = []

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till game over!.";
        
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            secondsLeft=0
            timeEl.textContent = secondsLeft + " seconds left till game over!.";
        }
    }, 1000);
}


// set answers to session storage
function start() {
    timeEl.textContent = secondsLeft + " seconds left till game over!.";
    sessionStorage.setItem("a1", "a")
    sessionStorage.setItem("a2", "b")
    sessionStorage.setItem("a3", "c")
    sessionStorage.setItem("a4", "d")
    sessionStorage.setItem("a5", "a")
}


// hide & show questions on submit click
$(document).ready(startGame);
function startGame () {
    //Hide all questions
    $('.questionForm').hide();
    $('#gameOver').hide();
    $('#results').hide();

    //show first question
    // $('#q1').show();
    $('#start').show();
    $("#startBtn").click(function () {
        setTime();
        $("#q1").show();
        $('#start').hide();
        return false;
    });

    $('#q1 #submit1').click(function () {
        $('.questionForm').hide();
        process("q1")
        $("#q2").show();
        return false;
    });
    $('#q2 #submit2').click(function () {
        $('.questionForm').hide();
        process("q2")
        $("#q3").show();
        return false;
    });
    $('#q3 #submit3').click(function () {
        $('.questionForm').hide();
        process("q3")
        $("#q4").show();
        return false;
    });
    $('#q4 #submit4').click(function () {
        $('.questionForm').hide();
        process("q4")
        $("#q5").show();
        return false;
    });
    $('#q5 #submit5').click(function () {
        $('.questionForm').hide();
        process("q5")
        clearInterval(timerInterval);
        $("#results").show();
        $("#gameOver").show();
        return false;
    });
}
// run answer storage function


function process(q) {
    if (q === "q1") {
        var submitted = $("input[name=q1]:checked").val();
        if (submitted == sessionStorage.a1) {
            score++;
        } else {
            secondsLeft = secondsLeft - 5;
            timeEl.textContent = secondsLeft + " seconds left till game over!.";
        }
    };
    if (q === "q2") {
        var submitted = $("input[name=q2]:checked").val();
        if (submitted == sessionStorage.a2) {
            score++;
        } else {
            secondsLeft = secondsLeft - 5;
            timeEl.textContent = secondsLeft + " seconds left till game over!.";
        }
    };
    if (q === "q3") {
        var submitted = $("input[name=q3]:checked").val();
        if (submitted == sessionStorage.a3) {
            score++;
        } else {
            secondsLeft = secondsLeft - 5;
            timeEl.textContent = secondsLeft + " seconds left till game over!.";
        }
    };
    if (q === "q4") {
        var submitted = $("input[name=q4]:checked").val();
        if (submitted == sessionStorage.a4) {
            score++;
        } else {
            secondsLeft = secondsLeft - 5;
            timeEl.textContent = secondsLeft + " seconds left till game over!.";
        }
    };
    if (q === "q5") {
        var submitted = $("input[name=q5]:checked").val();
        if (submitted == sessionStorage.a5) {
            score++;
        } else {
            secondsLeft = secondsLeft - 5;
            timeEl.textContent = secondsLeft + " seconds left till game over!.";
        }
    };
    // $("#results").html("you've gotten " + score + "out of " + highest + "!")
    return false;

};

function getHighscore(){
    $("#results").show()
    $("#highscores").show()
    var initials = $("#initials").val().trim() 
var highscores = JSON.parse(localStorage.getItem("highscores")) || []
var newScore = {
    score: secondsLeft,
    initials:initials,
}
highscores.push(newScore)
highscores.sort((a,b)=> b.score-a.score)
localStorage.setItem("highscores",JSON.stringify(highscores))
console.log(highscores)
for(var i = 0; i < highscores.length; i++){
    var scoreEl = $("<li>").addClass("hsStyle").textContent= highscores[i].initials+": " + highscores[i].score
    $("#highscores").append(scoreEl)
    
}
}
function clearHS(){
localStorage.clear()
$("#highscores").html("")
};

function restartQuiz(){
    $("#highscores").hide()
    $("#gameOver").hide()
    secondsLeft = 30
    start() 
    startGame()
};
$("#submitHS").on("click",getHighscore)
$("#clearHs").on("click",clearHS)
$("#restart").on("click",restartQuiz)




window.addEventListener("load", start, false);