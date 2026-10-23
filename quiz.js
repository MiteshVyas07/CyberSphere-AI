const quiz = [
{
question:"What does HTTPS provide?",
answers:["Security","Music","Gaming","Video Editing"],
correct:0
},
{
question:"What is phishing?",
answers:["Fishing Activity","A Cyber Attack","A Firewall","An Antivirus"],
correct:1
},
{
question:"What protects a network?",
answers:["Firewall","Calculator","Browser","Keyboard"],
correct:0
},
{
question:"What is malware?",
answers:["Malicious Software","WiFi","Monitor","Printer"],
correct:0
},
{
question:"What should you never share?",
answers:["Wallpaper","OTP","Theme","Mouse"],
correct:1
}
];

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion(){

const q = quiz[currentQuestion];

document.getElementById("question").innerHTML =
q.question;

let html = "";

q.answers.forEach((answer,index)=>{

html += `
<button class="answer-btn"
onclick="checkAnswer(${index})">
${answer}
</button>
`;

});

document.getElementById("answers").innerHTML =
html;
}

function checkAnswer(index){

let buttons =
document.querySelectorAll(".answer-btn");

buttons.forEach(btn=>{
btn.disabled = true;
});

if(index === quiz[currentQuestion].correct){

score++;

buttons[index].style.background =
"green";

}
else{

buttons[index].style.background =
"red";

buttons[
quiz[currentQuestion].correct
].style.background =
"green";

}

document.getElementById("score").innerHTML =
`Score: ${score}`;

}

function nextQuestion(){

if(currentQuestion === quiz.length - 1){

document.getElementById("question").innerHTML =
"🎉 Quiz Completed";

document.getElementById("answers").innerHTML =
`
<h2>
Final Score: ${score}/${quiz.length}
</h2>
`;

document.getElementById("score").innerHTML =
`Great Job! You scored ${score}/${quiz.length}`;

document.getElementById("nextBtn").style.display =
"none";

return;
}

currentQuestion++;
loadQuestion();

}