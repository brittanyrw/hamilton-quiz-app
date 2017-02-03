$(document).ready(function() {
		// hide quiz start view when submit button is clicked, show quiz question page
		$(".start").click(function(event) {
			$(".quiz-start").hide();
			$(".question-view").removeClass("hide");
			event.preventDefault();
			showQuestion();
		});

		$('.choices').on('click','li',function(){
			if(!$('li.chosen').length){
				var guess = $(this).attr('id');
				$(this).addClass('chosen');
				checkAnswer(guess);
				$(".next-question").removeClass("hide");
			} 
		});

		//when next is clicked, hide next button, hide feedback, clear feedback
		
		$(".next-question").click(function(event) {
			if ((state.current) != state.questions.length) {
				$(".next-question").addClass("hide");
				$(".feedback").html('');
				$(".score").addClass("hide");
				$(".remaining-questions").html('');
				showQuestion();
				//when last question is reached, show quiz end page
			} else {
				$(".quiz-end").removeClass("hide");
			}
		});

		
		
	});

function showQuestion(){
	var currentQuestionNumber = (state.current + 1)
	$(".question-header").text(state.questions[state.current].text); 
	$(".question-number").text(currentQuestionNumber); 
	$(".question-image").attr( "src", state.questions[state.current].image);
	$(".remaining-questions").append("<p>" + (state.questions.length-currentQuestionNumber) + " question(s) remaining." + "</p>");
	$(".choices").html('');
	for (var i = 0; i < state.questions[state.current].choices.length; i++) {
		$(".choices").append('<li id="'+i+'">'+state.questions[state.current].choices[i]+'</li>');
	}
}

function checkAnswer(guess){
	$(".score").removeClass("hide");
	if (guess == state.questions[state.current].correct) {
		$(".feedback").append(
		"<p>" + state.correctFeedback[Math.floor(Math.random()*state.correctFeedback.length)] + "</p>"); 
		state.score++;
		state.current++;
	} else {
		$(".feedback").append(
		"<p>" + state.incorrectFeedback[Math.floor(Math.random()*state.incorrectFeedback.length)] + "</p>");
		state.current++; 
	}

}

var state = {
	current: 0,
  questions: [
    {
		image: "https://placehold.it/350x150/888888/FFFFFF",
		text: "Who wrote the Alexander Hamilton biography that inspired the musical?",
		choices: ["Ron Chernob", "Rob Chernob", "Ron Chernow", "Ron Chernew"],
		correct: 2
    },
    {
		image: "https://placehold.it/350x150/13E9E9/FFFFFF",
		text: "How many words are in the musical?",
		choices: ["20,500", "20,250", "21,000", "20,000"],
		correct: 1
    },
    {
		image: "https://placehold.it/350x150/888888/FFFFFF",
		text: "Out of the following cast members, who is the youngest?",
		choices: ["Phillipa Soo", "Jasmine Cephas Jones", "Anthony Ramos", "Okieriete Onaodowan"],
		correct: 2
    },
    {
		image: "https://placehold.it/350x150/13E9E9/FFFFFF",
		text: "Which musical did Lin Manuel Miranda not appear in?",
		choices: ["21 Chump Street", "Bring It On", "Tick, Tick...Boom!", "Merrily We Roll Along"],
		correct: 1
    },
    {
		image: "https://placehold.it/350x150/888888/FFFFFF",
		text: "Which award has Lin Manuel Miranda not won?",
		choices: ["Tony", "Grammy", "Pultizer Prize", "Nobel Prize"],
		correct: 3
    },{
    	image: "https://placehold.it/350x150/13E9E9/FFFFFF",
    	text: "Place holder question",
    	choices: ["A", "B", "C", "D"],
    	correct: 1
    },{
    	image: "https://placehold.it/350x150/888888/FFFFFF",
    	text: "Place holder question",
    	choices: ["A", "B", "C", "D"],
    	correct: 1
    },{
    	image: "https://placehold.it/350x150/13E9E9/FFFFFF",
    	text: "Place holder question",
    	choices: ["A", "B", "C", "D"],
    	correct: 1
    },{
    	image: "https://placehold.it/350x150/888888/FFFFFF",
    	text: "Place holder question",
    	choices: ["A", "B", "C", "D"],
    	correct: 1
    },{
    	image: "https://placehold.it/350x150/13E9E9/FFFFFF",
    	text: "Place holder question",
    	choices: ["A", "B", "C", "D"],
    	correct: 1
    }
  ],
  incorrectFeedback: ["Incorrect.","That's wrong!","That's not correct."],
  correctFeedback: ["Correct! You are non-stop!","That's right!","Yes, that is correct."],
  score: 0,
};







