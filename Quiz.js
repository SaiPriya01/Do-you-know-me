var readlineSync = require("readline-sync"); 
 // To read user input
var score=0; //initialize score to zero
function Welcome() {
  var userName=readlineSync.question("Please Enter your name to start the game ")  // To read user input
   console.log("Hi "+userName+", How well do you know me");
   console.log("Let's have a quiz");
}
// Array of objects with Q&A
Questions =[{
  question:"Where do i live ? ",
  Answer:"Hyderabad"
},
{ question:"Where do i work ? ",
  Answer:"Infosys"
},
{ question: "What is my favourite food ? ",
  Answer:"Pizza"
},
{
  question: "What is my favourite vacation spot ? ",
  Answer:"suryapet"
},
{
   question: "How old am I ? ",
   Answer: "24"
},
{
   question: "Am I morning person or night owl ? ",
   Answer: "Both"
},
{
   question: "What's my favourite sitcom ? ",
  Answer: "Amrutham"
}]
// Function definition to iterate through array of questions
function Quiz(question) {
  
  for (let i = 0; i < Questions.length; i++) {
    var userAnswer = readlineSync.question(Questions[i].question);
    if (userAnswer.toUpperCase()===Questions[i].Answer.toUpperCase()){
      console.log("Yes! Your answer is correct");
      console.log("-----------");
      score++;
    }
    else console.log("Your answer is wrong");
    console.log("-------------");
}
  console.log("You have scored: "+score+" points");
}
// function call
Welcome()
Quiz(Questions)