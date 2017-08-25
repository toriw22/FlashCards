var fs = require("fs");
var inquirer = require ("inquirer");

function AppendClozeTxtFile(front, back) { 
	fs.appendFile("flashcards.txt", back + " , " + front + " , ", function (err){
		if (err) {
			console.log(err);
			return err;
		}

	});
};

function createClozeCardPrompt () { 
	
	return inquirer.prompt ([
		{
			type: "input",
			name: "back[0]",
			message: "To create a cloze flashcard, please enter a key term (ex: name, date, etc.)"
			 
		},
		{
			type: "input",
			name: "front[0]",
			message: "To complete a cloze flashcard, please enter a partial statement which applies to the key term (ex: important fact, definition, etc.)"
		},
		{
			type: "input",
			name: "back[1]",
			message: "To create a cloze flashcard, please enter a key term (ex: name, date, etc.)"
			 
		},
		{
			type: "input",
			name: "front[1]",
			message: "To complete a cloze flashcard, please enter a partial statement which applies to the key term (ex: important fact, definition, etc.)"
		},
		{
			type: "input",
			name: "back[2]",
			message: "To create a cloze flashcard, please enter a key term (ex: name, date, etc.)"
			 
		},
		{
			type: "input",
			name: "front[2]",
			message: "To complete a cloze flashcard, please enter a partial statement which applies to the key term (ex: important fact, definition, etc.)"
		},
		{
			type: "input",
			name: "back[3]",
			message: "To create a cloze flashcard, please enter a key term (ex: name, date, etc.)"
			 
		},
		{
			type: "input",
			name: "front[3]",
			message: "To complete a cloze flashcard, please enter a partial statement which applies to the key term (ex: important fact, definition, etc.)"
		},
		{
			type: "input",
			name: "back[4]",
			message: "To create a cloze flashcard, please enter a key term (ex: name, date, etc.)"
			 
		},
		{
			type: "input",
			name: "front[4]",
			message: "To complete a cloze flashcard, please enter a partial statement which applies to the key term (ex: important fact, definition, etc.)"
		}

	]).then(function(flashcards){
		for (i = 0; i < 5; i++) {
			var appending = new AppendClozeTxtFile(flashcards.back[i], flashcards.front[i]);	
		}
	});
	
};

createClozeCardPrompt ();