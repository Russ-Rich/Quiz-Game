// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
	// Declare and initialize DOM elements
	const finalScoreElem = document.getElementById("finalScore");
	const finalMessageElem = document.getElementById("finalMessage");

	// Retrieve the most recent score from localStorage
	const mostRecentScore = localStorage.getItem("mostRecentScore");

	// Early exit if no recent score found
	if (!mostRecentScore) return;

	// Initialize the UI
	init();

	// Initialization function
	function init() {
		// Set the final score
		finalScoreElem.innerText = mostRecentScore;

		// Update the final message based on the score
		updateFinalMessage();
	}

	// Function to update the final message based on the score
	function updateFinalMessage() {
		let finalMessage;

		// Determine message based on score range
		if (mostRecentScore <= 25) {
			finalMessage = "You must've gone to Wharton, huh?";
		} else if (mostRecentScore <= 50) {
			finalMessage = "Ah, a solid B- effort. You Harvard yet?";
		} else if (mostRecentScore <= 75) {
			finalMessage = "Nice, Yale material... but not quite top of the class!";
		} else {
			finalMessage = "MIT called. They want their genius back!";
		}

		// Update the DOM
		finalMessageElem.innerText = finalMessage;
	}
});
