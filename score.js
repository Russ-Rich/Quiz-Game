document.addEventListener("DOMContentLoaded", () => {
	const finalScoreElem = document.getElementById("finalScore");
	const usernameElem = document.getElementById("username");
	const scoreBtnElem = document.getElementById("scoreBtn");
	const finalMessageElem = document.getElementById("finalMessage");

	let highScores = getHighScores();
	let mostRecentScore = localStorage.getItem("mostRecentScore");

	init();

	function init() {
		finalScoreElem.innerText = mostRecentScore;
		usernameElem.addEventListener("keyup", handleUsernameChange);
		scoreBtnElem.addEventListener("click", saveHighScore);
	}

	function getHighScores() {
		return JSON.parse(localStorage.getItem("highScores")) || [];
	}

	function handleUsernameChange() {
		scoreBtnElem.disabled = !usernameElem.value;
	}

	function saveHighScore(event) {
		event.preventDefault();

		const score = {
			score: mostRecentScore,
			name: usernameElem.value,
		};

		highScores.push(score);
		highScores.sort((a, b) => b.score - a.score);
		highScores.splice(5);

		localStorage.setItem("highScores", JSON.stringify(highScores));
		window.location.assign("achievers.html");
	}

	if (!mostRecentScore) return;

	let finalMessage;
	if (mostRecentScore <= 25) {
		finalMessage = "Hey, better luck next time!";
	} else if (mostRecentScore <= 50) {
		finalMessage = "Not bad, you're getting there!";
	} else if (mostRecentScore <= 75) {
		finalMessage = "Nice, you're pretty smart!";
	} else {
		finalMessage = "Wow, you're a quiz genius!";
	}

	finalMessageElem.innerText = finalMessage;
});
