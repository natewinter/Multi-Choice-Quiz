// var questions = [ 
//     {prompt: "what color are apples? \n (a) red/green \n\ (b) Purple\n (c) orange", answer : "a"},
//     {prompt: "what color are bananas? \n (a) red/green \n\ (b) Yellow\n (c) orange", answer : "b"},
//     {prompt: "what color are watermelons? \n (a) green \n\ (b) Yellow\n (c) orange", answer : "a"},
// ]

// var questions = "";
// var score = 0;

// for(var i=0; i<questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
// if(response == questions[i].answer){
//     score++;
//     alert("correct!");
// } else{
//     alert("wrong!")
// }
// }
// alert("you got " + score + "/" + questions.length)
var questionsEl = document.querySelector("#questions")
var timer;
var timeEl = document.querySelector("#time")
var time = 120;

function startQuiz(){
    document.querySelector("#startPage").setAttribute("class", "hide")
    questionsEl.classList.remove("hide")
    timer = setInterval(timerCountdown,1000)
    timeEl.textContent=time
    getQuestion()
}

function timerCountdown(){
    time--
timeEl.textContent=time
if (time<=0){
    clearInterval(timer)
    gameover()
}

}
function getQuestion(){

}

function gameover(){
console.log(gameover)
}

// document.querySelector("#startBtn").addEventListener("click",startQuiz)
document.querySelector("#startBtn").onclick=startQuiz
