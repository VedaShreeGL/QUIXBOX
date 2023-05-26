const playbutton=document.getElementById("play");
const appi=document.getElementById("App");
const coni=document.getElementById("con");

    playbutton.addEventListener("click",function(){
        appi.style.display="none";
        coni.style.display="block";

   });

   const questions=[
    {
        question: "which property is used to specify the stack order of an element?",
        answer:[
            {text:"Z-index" , correct:true},
            {text:"object-fit", correct:false},
            {text:"keyframes",correct:false},
            {text:"Float", correct:false},
        ]
    },
    {
        question:"HTML stand for?",
        answer:[
            {text:"Hyperlink markup Language" ,correct:false},
            {text:"Hypertext Markup Language",correct:true},
            {text:"Hyper Markup Language",correct:false},
            {text:"Hyperlink Text Language" ,correct:false},
        ]
        
    },
    {
        question:"Which of the following value of cursor shows it as a pointing hand?",
        answer:[
            {text:"wait" ,correct:false},
            {text:"no-drop",correct:false},
            {text:"default" ,correct:false},
            {text:"pointer",correct:true},
        ]

    },
    {
        question:"Which of the following is not a flex property?",
        answer:[
            {text:"flex-direction" ,correct:false},
            {text:"flex-wrap",correct:false},
            {text:"flex-item" ,correct:false},
            {text:"grid-area",correct:true},
        ]


    },
    {
        question:"How do we write comment in javascript?",
        answer:[
            {text:"//",correct:true},
            {text:"##",correct:false},
            {text:"$$",correct:false},
            {text:"()",correct:false},
        ]

    }
   ];
   const questionElement=document.getElementById("question");
   const answerButton=document.getElementById("answer-buttons");
   const nextButton=document.getElementById("next-btn");
   const greeting=document.getElementById("greet");

   let currentQuestionIndex=0;
   let score=0;

   function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
   }

   function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
   }
   function resetState(){
   nextButton.style.display="none";
   while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
   }
   }
   function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block"
   }
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    
    // if(score>=4){
    //    greeting.innerHTML=`congragulations`;
    // }else{
    //     greeting.innerHTML=`Try Again`;
    // }
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

   function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
   }
   nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
   })

   startQuiz();

