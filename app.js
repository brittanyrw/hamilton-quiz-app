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
				$(".question-view").addClass("hide");
				$(".quiz-end").removeClass("hide");
				if (state.score < 5) {
					$(".score-display").text("Nice try, but you didn't bring the thunder. You won " + state.score + " votes out of " + state.questions.length + "! Jefferson wins this battle.");
				} else if (state.score == 5) {
					$(".score-display").text("Wow, you never back down! You won " + state.score + " votes out of " + state.questions.length + "! It's a tie with Jefferson this time!");
				} else if (state.score > 5 && state.score < 8) {
					$(".score-display").text("Let's raise a glass to freedom, you won " + state.score + " votes out of " + state.questions.length + "! You defeated Jefferson.");
				} else if (state.score >= 8) {
					$(".score-display").text("Wow, you amaze and astonish! You won " + state.score + " votes out of " + state.questions.length + "! You crushed Jefferson in this battle!");
				}	
			}
		});

		//when try again is clicked, bring up quiz start page
		$(".restart").click(function(event) {
			state.current = 0;
			state.score = 0;
			$(".quiz-end").addClass("hide");
			$(".score").addClass("hide");
			$(".feedback").html('');
			$(".remaining-questions").html('');
			$(".quiz-start").show();
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
		$(".feedback").append("<p>" + state.incorrectFeedback[Math.floor(Math.random()*state.incorrectFeedback.length)] + "</p>" + "<p>" + "The correct response is: " + state.questions[state.current].choices[state.questions[state.current].correct] + "</p>");
		$(".feedback p:nth-child(2)").addClass("bold");
		state.current++; 

	}

}


var state = {
	current: 0,
  questions: [
    {
		text: "Who wrote the Alexander Hamilton biography that inspired the musical?",
		choices: ["Ron Chernob", "Bob Chernob", "Ron Chernow", "Bob Chernew"],
		correct: 2
    },
    {
		text: "How many words are in the musical?",
		choices: ["20,500", "20,250", "21,000", "20,000"],
		correct: 1
    },{
    	text: "Complete the lyrics: I've been reading Common Sense by Thomas Paine, So men say that I'm intense or ___",
    	choices: ["I'm mundane", "I'm insane", "I'm inane", "I complain"],
    	correct: 1
    },{
		text: "Out of the following cast members, who is the youngest?",
		choices: ["Phillipa Soo", "Jasmine Cephas Jones", "Anthony Ramos", "Okieriete Onaodowan"],
		correct: 2
    },
    {
		text: "Which musical did Lin Manuel Miranda not appear in?",
		choices: ["21 Chump Street", "Bring It On", "Tick, Tick...Boom!", "Merrily We Roll Along"],
		correct: 1
    },
    {
		text: "Which award has Lin Manuel Miranda not won?",
		choices: ["Tony", "Grammy", "Pultizer Prize", "Nobel Prize"],
		correct: 3
    },{
    	text: "Fill in the blank: I imagine death so much it feels more like a memory. ___, on my feet, several feet ahead of me?",
    	choices: ["When will it get me", "How will it get me", "What will get me", "Is this where it gets me"],
    	correct: 3
    },{
    	text: "What were the Hamilton lottery mini performances called?",
    	choices: ["Lin4Ham", "Ham&Ham", "Ham4Ham", "Ham4You"],
    	correct: 2
    },{
    	text: "Complete the lyrics: And I'm never gonna stop until I make 'em, ___ and ___ 'em up and scatter their remains",
    	choices: ["Drop, beat", "Stop, burn", "Stop, beat", "Drop, burn"],
    	correct: 3
    },{
    	text: "In 2015, which Off-Broadway theater was the show performed?",
    	choices: ["The Players Theatre", "The Palace Theatre", "Public Theater", "Richard Rodgers Theatre"],
    	correct: 2
    }
  ],
  incorrectFeedback: ["Wrong. Try not to crack under the stress.","Incorrect. You are not bringing the thunder.","Wrong. You are throwing away your shot!", "Incorrect, do you need to take a break?"],
  correctFeedback: ["Correct! You are non-stop!","Correct! You are on your way to the room where it happens.","That's right, you get the job done!", "Yes, you're the smartest in the room!"],
  score: 0,
};







