var fs = require("fs");
var inquirer = require("inquirer");
var num = 1;
var newCards = require("./basicCards");
var newClozeCards = require("./clozeCards");


function pullQuestions(filename) { 
	fs.readFile(filename, "utf8", function (err, data) {
		if (err) {
			return console.log (err);
		}
		var frontBack = data.split(" , ");
		return inquirer.prompt([ 
			{
				type: "input",
				name: "answer[1]",
				message: "________ " + frontBack[0]
				 
			},
			{
				type: "input",
				name: "answer[3]",
				message: "________ " + frontBack[2]
				 
			},
			{
				type: "input",
				name: "answer[5]",
				message: "________ " + frontBack[4]
				 
			},
			{
				type: "input",
				name: "answer[7]",
				message: "________ " + frontBack[6]
				 
			},
			{
				type: "input",
				name: "answer[9]",
				message: "________ " + frontBack[8]
				 
			},
			{
				type: "input",
				name: "answer[11]",
				message: frontBack[10]
				 
			},
			{
				type: "input",
				name: "answer[13]",
				message: frontBack[12]
				 
			},
			{
				type: "input",
				name: "answer[15]",
				message: frontBack[14]
				 
			},
			{
				type: "input",
				name: "answer[17]",
				message: frontBack[16]
				 
			},
			{
				type: "input",
				name: "answer[19]",
				message: frontBack[18]
				 
			}
		]).then(function(checkAnswers){
			function checking(number) { 
				if (checkAnswers.answer[number] == frontBack[number]) {
					console.log("That is correct!");
				}
				else {
					console.log("That is incorrect! " + frontBack[number] + " " + frontBack[number-=1]);
				};
			};	
			
			checking(num);
			num+=2;
			checking(num);
			num+=2;
			checking(num);
			num+=2;
			checking(num);
			num+=2;
			checking(num);
			num+=2;
			checking(num);
			num+=2;
			checking(num);
			num+=2;
			checking(num);
			num+=2;
			checking(num);
			num+=2;
			checking(num);
		});
	});
};

console.log("It is Player 1's turn to create the flashcards.");
newCards.newBasicCards().then(function() {
	newClozeCards.newClozeCards().then(function(){
	console.log("Now it is Player 2's turn to answer the flashcards.");
	pullQuestions("flashcards.txt");
});
}); 




// ========================================================
// =======this is how i would functionize an use a loop to run through the questions if inquirer allowed it ==========
// ========================================================


// function askQuestions (frontBack) { 
// 	for (i = 0; i < frontBack.length; i+=2) { 	
// 		return inquirer.prompt ([ 
// 			{
// 				type: "input",
// 				name: "answer",
// 				message: frontBack[i]
				 
// 			}
// 		]).then(function(answers){
// 			for (j = 1; j < frontBack.length; j+=2) { 
// 				if (answers.answer == frontBack[j]) {
// 					console.log("That is correct!");
// 				}
// 				else {
// 					console.log("Sorry! That is incorrect! " + frontBack[j] + " " + frontBack[i]);
// 				}
// 			};	
// 		});
// 	};
	
// };






