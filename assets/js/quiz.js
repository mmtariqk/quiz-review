
// Start global scope variables here. It means we can call them outside the function. 

var start = document.querySelector('#start'),
    startContainer = document.querySelector('#start-container'),
    quiz = document.querySelector('#quiz-container'),
    question = document.querySelector('#question'),
    questionImg = document.querySelector('#quiz-img'),
    choiceA = document.querySelector('#choice-a'),
    choiceB = document.querySelector('#choice-b'),
    choiceC = document.querySelector('#choice-c'),
    counter = document.querySelector('#counter'),
    timeGauge = document.querySelector('#timeGauge'),
    progress = document.querySelector('#progress'),
    scoreDiv = document.querySelector('#score'),
    scoreContent = document.querySelector('#score-content'),
    submitBtn = document.querySelector('#submit-score'),
    userName = document.querySelector('#user-name'),
    userScore = 0,
    highScoreDiv = document.querySelector('#high-score-container'),
    runningQuestion = 0,
    count = 0,
    users = [],
    questionTime = 12, // 10s
    lastQuestion = quizquestions.length - 1,
    gaugeWidth = 150, // 150px
    gaugeUnit = gaugeWidth / questionTime,
    score = 0;

    

let TIMER;

start.addEventListener("click", sQuiz);
if (localStorage.getItem('users')) {
  users = JSON.parse(localStorage.getItem('users'));
  
}

// start quiz function
function sQuiz() {
  startContainer.classList.add('d-none');
  quiz.classList.remove('d-none');
  renderQuestion();
  rendProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render a question
function renderQuestion() {
  var q = quizquestions[runningQuestion];

  question.innerHTML = q.question;
  questionImg.src = q.imgSrc;
  choiceA.textContent = q.choiceA;
  choiceB.textContent = q.choiceB;
  choiceC.textContent = q.choiceC;
}

// render progress
function rendProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render
function renderCounter() {
  if (count <= questionTime) {
    counter.textContent = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++
  } else {
    count = 0;
    
    // change progress color to red
    incorrectAnswer();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// check Answer
function checkAnswer(answer) {
  if (answer == quizquestions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    incorrectAnswer();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).classList.add('correct');
}

// answer is Wrong
function incorrectAnswer() {
  document.getElementById(runningQuestion).classList.add('incorrect');
}



// score render
function scoreRender(userscore) {
  quiz.classList.add('d-none');
  scoreDiv.classList.remove('d-none');

  // calculate the amount of question percent answered by the user
  userScore = Math.round(100 * score / quizquestions.length);

  // return userScore;
  scoreContent.textContent = 'You scored ' + userScore + '%!';
}


// Submit start
submitBtn.addEventListener('click', function(event) {
  event.prevendDefault;

  var user = {
    userName: userName.value.trim().toUpperCase(),
    score: userScore.toString()
  };

  users.push(user);

  // users.sort(function(a, b) {
  //   return parseFloat(a.score) - parseFloat(b.score);
  // });

  localStorage.setItem('users', JSON.stringify(users));

  scoreDiv.classList.add('d-none');

  highScoreDiv.classList.remove('d-none');

  for (var i = 0; i < users.length; i++) {

    var highScoreList = document.querySelector('ul');

    var li = document.createElement('li');

    li.textContent = `${users[i].userName}: ${users[i].score}`;

    highScoreList.append(li);
  }
});
