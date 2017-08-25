function readTxtFile() { 
	fs.readFile("basiccards.txt", "utf8", function (err, data) {
		if (err) {
			return console.log (err);
		}
		data.split(" , ");
		console.log(data);

	});
};