
// Here are the quiz-questions of quiz
var quizquestions = [{
    question: 'Hyper Text Markup Language Stand For?',
    imgSrc: 'assets/images/html.jpg',
    choiceA: 'JavaScript',
    choiceB: 'XHTML',
    choiceC: 'HTML',
    correct: 'C'
  }, {
    question: "Which is used for Connect To Database?",
    imgSrc: 'assets/images/database.jpg',
    choiceA: 'HTML',
    choiceB: 'PHP',
    choiceC: 'JS',
    correct: 'B'
  }, {
    question: 'Which language is used for styling web pages?',
    imgSrc: 'assets/images/css3.jpg',
    choiceA: 'HTML',
    choiceB: 'JQuery',
    choiceC: 'CSS',
    correct: 'C'
  }, {
    question: 'Which is not a JavaScript Framework?',
    imgSrc: 'assets/images/Javascript.jpg',
    choiceA: 'JQuery',
    choiceB: 'Django',
    choiceC: 'NodeJS',
    correct: 'B'
  }, {
    question: 'Who is the CEO of Tesla',
    imgSrc: 'assets/images/tesla.jpg',
    choiceA: 'Tim Cook',
    choiceB: 'Bill Gates',
    choiceC: 'Elon Musk',
    correct: 'C'
  }];
  
  //quiz-questions ended here
  document.getElementById("quiz-time-left") .innerHTML
  =' Time Left: 1 minutes 0 seconds';
 
  // Quiz main timer start here
var interval = null;
    var total_seconds = 60*1;
    var c_minutes = parseInt(total_seconds/60);
    var c_seconds = parseInt(total_seconds%60);
    function CheckTime(){
    
    document.getElementById("quiz-time-left") .innerHTML
    =' Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';
    if(total_seconds <=0){
    interval = null;
    setInterval('document.quiz.submit()' , 1);
    
    } else{
      total_seconds = total_seconds -1;
      c_minutes = parseInt(total_seconds/60);
      c_seconds = parseInt(total_seconds%60);
    
      interval = setInterval(CheckTime, 1000);
          
    }}
    
    



   
        
