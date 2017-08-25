var fs = require("fs");
var inquirer = require("inquirer");


console.log("Player 1 begins by entering flashcard data.");

function AppendTxtFile(question, answer) { 
	fs.appendFile("flashcards.txt", answer + " , " + question + " , ", function (err){
		if (err) {
			console.log(err);
			return err;
		}

	});
};

function createCardPrompt () { 
	return inquirer.prompt ([
		{
			type: "input",
			name: "question[0]",
			message: "To create a flashcard, please enter a question."
			 
		},
		{
			type: "input",
			name: "answer[0]",
			message: "To complete a flashcard, please answer the question."
		},
		{
			type: "input",
			name: "question[1]",
			message: "To create a flashcard, please enter a question."
			 
		},
		{
			type: "input",
			name: "answer[1]",
			message: "To complete a flashcard, please answer the question."
		},
		{
			type: "input",
			name: "question[2]",
			message: "To create a flashcard, please enter a question."
			 
		},
		{
			type: "input",
			name: "answer[2]",
			message: "To complete a flashcard, please answer the question."
		},
		{
			type: "input",
			name: "question[3]",
			message: "To create a flashcard, please enter a question."
			 
		},
		{
			type: "input",
			name: "answer[3]",
			message: "To complete a flashcard, please answer the question."
		},
		{
			type: "input",
			name: "question[4]",
			message: "To create a flashcard, please enter a question."
			 
		},
		{
			type: "input",
			name: "answer[4]",
			message: "To complete a flashcard, please answer the question."
		}

	]).then(function(flashcards){
		for (i = 0; i < 5; i++) {
			var appending = new AppendTxtFile(flashcards.answer[i], flashcards.question[i]);
		};
	});

};

createCardPrompt ();
