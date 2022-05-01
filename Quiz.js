var readLineSync = require('readline-sync');
var score = 0;

function welcomeUser() {
  var userName = readLineSync.question('please enter your name: ');
  console.log(`\nHi! ${userName}. Welcome to "DO-YOU-KNOW-ME" quiz`);
}
var highScorers = [{
    name: 'Pushpa',
    score: 6
  },
  {
    name: 'Rajitha',
    score: 5
  }
]
var questions = [{
    question: "Where do i live ? ",
    answer: "Hyderabad"
  },
  {
    question: "Where do i work ? ",
    answer: "Infosys"
  },
  {
    question: "What is my favourite food ? ",
    answer: "Pizza"
  },
  {
    question: "What is my favourite vacation spot ? ",
    answer: "suryapet"
  },
  {
    question: "How old am I ? ",
    answer: "24"
  },
  {
    question: "Am I morning person or night owl ? ",
    answer: "Both"
  },
  {
    question: "What's my favourite sitcom ? ",
    answer: "Amrutham"
  }
]

function playQuiz(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('you are right!');
    score++;
  } else {
    console.log('you are wrong! \ncorrect answer is: ' + answer);
  }
  console.log('current Score: ', score);
  console.log('---------------------------------');
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    playQuiz(currentQuestion.question, currentQuestion.answer);
  }
}

function displayHighScorers() {
  if (score < 1) {
    console.log('your final score is: ', score, '. Don\'t worry if you don\'t know me.Let\'s have a coffee someday!');
  } else {
    console.log('Hurrah! you have scored: ', score, 'you know me well');
  }
  console.log('---------------------------------');
  console.log('\nBelow are the high scorers of this QUIZ. If you have scored more than them send me a screenshot, I will update it  here');
  console.log('---------------------------------');
  highScorers.map(scorer => console.log(`${scorer.name}: ${scorer.score}`));
}
welcomeUser();
askQuestion();
displayHighScorers();