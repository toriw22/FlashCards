var fs = require("fs");
var inquirer = require("inquirer");

function AddCards(question, answer) {
	this.question = question;
	this.answer = answer;
}

function AppendTxtFile(question, answer) { 
	fs.appendFile("basiccards.txt", question + " , " + answer + " , ", function (err){
		if (err) {
			return console.log(err);
		}

	});
};
function readTxtFile() { 
	fs.readFile("basiccards.txt", "utf8", function (err, data) {
		if (err) {
			return console.log (err);
		}
		console.log(data);

	});
};

function createCardPrompt () { 
	return inquirer.prompt ([
		{
			type: "input",
			name: "question",
			message: "To create a flashcard, please enter a question."
			 
		},
		{
			type: "input",
			name: "answer",
			message: "To complete a flashcard, please answer the question."
		}

	]).then(function(flashcards){
		var newCard = new AddCards(flashcards.question, flashcards.answer);
		var appending = new AppendTxtFile(flashcards.question, flashcards.answer);
		
	});

};

createCardPrompt ();

// module.exports