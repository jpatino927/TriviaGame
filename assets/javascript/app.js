$(document).ready(function(){
var questions = [
    { 
        question: "T-Rex was a mammal?",
        choices: ["True", "False"],
        answer: "False",
        img: "https://media.giphy.com/media/zHmxB9luQaEXC/giphy.gif"
    },

    {
        question: "The name of a flying dinosaur",
        choices: ["butterfly", "eagle", "seachicken", "pterodactyl"],
        answer: "pterodactyl",
        image: ""
    },

    {
        question: "The name of a hard shell dinosaur",
        choices: ["dinotank","dinolosauri", "teratruck", "ankylosauria"],
        answer: "ankylosauria",
        image: ""
    },

    {
        question: "The name of a dinosaur with tree horns",
        choices: ["triceratops", "goatdino", "bulleratops", "rhinoceros"],
        answer: "triceratops",
        image: ""
    },

    {
        question: "What type of dinosaur was little foot's mom",
        choices: ["longasour", "hadrosaurids", "diplodocidae", "stegosauria"],
        answer: "diplodocidae",
        image: ""
    },
    {
        question: "What was the name of an aquatic dinosaur",
        choices: ["mosasaurs", "mochasaur", "molesaur", "guacasaur"],
        answer: "mosasaurs",
        image: ""
     },
     {
        question: "What was the life span of a T-Rex dinosaur",
        choices: ["one month", "one hundred years", "fifty years", "thirty years"],
        answer: "thirty years",
        image: ""
     }
]

var counter = 30;
var timer;
var trivia = {
    questions: questions,
    currentQuestion: 0,
    counter: counter,
    correct: 0,
    incorrect:0,
    timeup: function(){
        clearInterval(timer);
        trivia.counter = 30;
        $("counter-number").html(trivia.counter);
        $("#trivia-area").html("<h2>Out of time</h2>")
        $("#trivia-area").append("<h3>The correct answer " + questions[this.currentQuestion].answer + "</h3>");

        if(this.currentQuestion === questions.length - 1){
            //show results when the question hits the end of the array
            setTimeout(this.results, 3 * 1000)
        }
        else {
            setTimeout(this.nextQuestion, 3 * 1000)
        }
    },
    answeredIncorrect: function(){
        clearInterval(timer)
        this.incorrect++;
        $("#trivia-area").html("<h2>Incorrect!</h2>")
        $("#trivia-area").append("<h3>The correct answer " + questions[this.currentQuestion].answer + "</h3>");
        $("#trivia-area").append("<img src=''/>");

        
        if(this.currentQuestion === questions.length - 1){
            //show results when the question hits the end of the array
            setTimeout(this.results, 3 * 1000)
        }
        else {
            setTimeout(this.nextQuestion, 3 * 1000)
        }
    },
  
    answeredCorrect: function(){
        clearInterval(timer)
        this.correct++;
        $("#trivia-area").html("<h2>Correct!</h2>")
        $("#trivia-area").append("<img src=''/>");
        if(this.currentQuestion === questions.length - 1){
            //show results when the question hits the end of the array
            setTimeout(this.results, 3 * 1000)
        }
        else {
            setTimeout(this.nextQuestion, 3 * 1000)
        }
    },
    clicked: function(event){
        clearInterval(timer)
       
        if($(event.target).attr("data-name") === questions[this.currentQuestion].answer){
            this.answeredCorrect()
        }
        else {
            this.answeredIncorrect()
            
        }
    },
    countdown: function(){
        trivia.counter -= 1
        $("#counter-number").text(trivia.counter)
        if(trivia.counter === 0){
            trivia.timeup();
        }

    },
    loadQuestion: function(){
        timer = setInterval(this.countdown, 1000)
        $("#trivia-area").html("<h2>" + questions[this.currentQuestion].question + "</h2>")

        for(var index = 0; index < questions[this.currentQuestion].choices.length; index++)
        {
            $("#trivia-area").append("<button class='choice-button' id='button' data-name='" + 
            questions[this.currentQuestion].choices[index] + "'>" + questions[this.currentQuestion].choices[index] + "</button>" )
        }

    },
    nextQuestion: function(){
        trivia.counter = 30;
        trivia.counter -= 1;
        
        $('#counter-number').text(trivia.counter)
        trivia.currentQuestion += 1;
        trivia.loadQuestion();
    },

    results: function(){
        clearInterval(timer);
        trivia.counter = 30;
        $("#trivia-area").html("<h2>All done</h2>")
        $("#counter-number").text(trivia.counter);
        $("#trivia-area").append("<h3>Correct Answer: " + trivia.correct + "</h3>");
        $("#trivia-area").append("<h3>Incorrect Answer: " + trivia.incorrect + "</h3>")
        $("#trivia-area").append("<h3>Unanswered:" + (questions.length - (trivia.correct + trivia.incorrect) + "</h3>"))
    }

}

$(document).on("click", ".choice-button", function(event) {
    trivia.clicked(event)
});



$(document).on("click", "#start", function(){
    $("#sub-wrapper").prepend("<h1>Time Remaining: <span id='counter-number'>30</span> Seconds</h1>")
    trivia.loadQuestion()
})

// array var a = [1,2,3] 
// a[0] 0 is an index

// object var object = { x: 177} 
// object["x"] -> 177 "x" is a key

})

