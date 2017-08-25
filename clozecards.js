var fs = require("fs");
var inquirer = require ("inquirer");

var cardNumber = 1;

function AddClozeCards(cardNum, front, back) {
	this.cardNum = cardNum;
	this.front = front;
	this.back = back;
	this.whole = this.back + this.front;
	this.partial = "__________" + this.front;
	cardNum++;
	return console.log(cardNum);

};

function AppendClozeTxtFile(front, back) { 
	fs.appendFile("clozecards.txt", back + " , " + front + " , ", function (err){
		if (err) {
			return console.log(err);
		}

	});
};

function createClozeCardPrompt () { 
	return inquirer.prompt ([
		{
			type: "input",
			name: "back",
			message: "To create a cloze flashcard, please enter a key term (ex: name, date, etc.)"
			 
		},
		{
			type: "input",
			name: "front",
			message: "To complete a cloze flashcard, please enter a partial statement which applies to the key term (ex: important fact, definition, etc.)"
		}

	]).then(function(flashcards){
		var newCard = new AddClozeCards(cardNumber, flashcards.back, flashcards.front);
		var appending = new AppendClozeTxtFile(flashcards.back, flashcards.front);
		
	});

	if (cardNumber <= 4) { 
		createClozeCardPrompt ();
	}

};

createClozeCardPrompt ();

// module.exports = clozecards;