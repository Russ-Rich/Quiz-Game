const mostRecentScore = localStorage.getItem('mostRecentScore')
const finalScore = document.querySelector('#finalScore')
const username = document.querySelector('#username')
const scoreBtn = document.querySelector('#scoreBtn')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
finalScore.innerText = mostRecentScore
console.log(finalScore.innerText)
username.addEventListener('keyup', () => {
    scoreBtn.disabled = !username.value
})
const score = {
        score: mostRecentScore,
        name: username.value
    }
console.log(highScores)
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }
  highScores.push(score)

    highScores.reverse()
    highScores.splice(4)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    console.log(highScores)
    window.location.assign('achievers.html')

}

if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
	localStorage.setItem("mostRecentScore", score);

	let finalMessage;
	if (score <= 25) {
		finalMessage = "Hey, better luck next time!";
	} else if (score > 25 && score <= 50) {
		finalMessage = "Not bad, you're getting there!";
	} else if (score > 50 && score <= 75) {
		finalMessage = "Nice, you're pretty smart!";
	} else {
		finalMessage = "Wow, you're a quiz genius!";
	}

	
	document.getElementById("finalMessage").innerText = finalMessage;

	return window.location.assign("score.html");
}

window.onload = function () {
	const mostRecentScore = localStorage.getItem("mostRecentScore");
	document.getElementById("finalScore").innerText = mostRecentScore;
};

