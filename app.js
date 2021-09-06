var currentQuestionNo = document.getElementById('currentQuestionNo')
var totalQuestionNo = document.getElementById('totalQuestionNo')
var questions = document.getElementById('questions')
var answerParent = document.getElementById('answerParent')
var progress = document.getElementById('progress')
var next = document.getElementById('next')

var question = [
    {
        question: 'HTML Stand For ___________',
        options: ['Hyper Text MarkUp Language','HyperType'],
        correctAnswer:'Hyper Text MarkUp Language'
    },
    {
        question: 'CSS Stand For ___________',
        options: ['Cascading Style Sheet','CSS'],
        correctAnswer:'Cascading Style Sheet'
    },
    {
        question: 'JS Stand For ___________',
        options: ['cadit style sheet','Java Script','CSS'],
        correctAnswer:'Java Script'
    },
    {
        question: 'Independence day of Pakistan',
        options: [11,14,13,12],
        correctAnswer:14
    },
       {
         question: 'HTML is Programing language',
        options: ['true','false'],
        correctAnswer:'false'
    },

]
var index = 0
var marks = 0
function startQuiz(){
    answerParent.innerHTML = ''
    currentQuestionNo.innerHTML = index+1
    totalQuestionNo.innerHTML = question.length
    questions.innerHTML = question[index].question
    for(var i=0; i < question[index].options.length; i++){
        answerParent.innerHTML += ` <div class="col-md-6 py-3 text-center">
        <div class="rounded shadow light p-3">
            <button onclick="checkAnswer('${question[index].options[i]}','${question[index].correctAnswer}')" class="btn btn-block btn-light px-5 rounded-pill">${question[index].options[i]}</button>
        </div> 
    
    </div> `

}
progress.value = index+1
progress.max = question.length

}

startQuiz()

function nextQuestion(){
   if(index != question.length-1){
       index++
       startQuiz()
   }else{
       alert(marks)
   }
}

function checkAnswer(optionValue,correctValue){
    if (optionValue == correctValue){
        marks++
        // console.log(marks)
    }
    nextQuestion()
}

