function hotOrCold() {

	var secretNumber = Math.floor(Math.random()*100+1);
	var guess = -1;
	var difference;
	var previousGuesses = [];

	function showGuesses() {
		console.log('Your previous guesses were: ')
		for (var i = 0; i < previousGuesses.length; i++) {
			console.log(previousGuesses[i]);
		}
	}

	function feedback(){ //Feedback for user to determine whether their guess was hot or cold.
		if (secretNumber === guess) {
			console.log('Congratulations! You got it!');
			showGuesses();
		}
		else if (guess === undefined) {
			console.log("Guess a number between 1 - 100");
		}
		else if(difference < 10) {
			console.log('You are very hot, your previous guess was: ' + guess);
		}
		else if(difference < 20) {
			console.log('You are kinda hot, your previous guess was: ' + guess);
		}
		else if(difference < 30) {
			console.log('Less than warm, your previous guess was: ' + guess);
		}
		else if (difference < 40) {
			console.log('Getting kinda cold, your previous guess was: ' + guess);
		}
		else {
			console.log('Getting pretty cold, your previous guess was: ' + guess);
		}
	}

	console.log("You have started the hot and cold game!");
	console.log('Secret number: ' + secretNumber);
	
	while (guess != secretNumber) {
		guess = parseInt(prompt('Guess a number between 1 - 100'));
		previousGuesses.push(guess);
		difference = Math.abs(guess - secretNumber);
		feedback();
	}
}
