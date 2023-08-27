// Array of background images
const backgrounds = [
	"/images/globe-7510104_960_720",
	"/images/passport-2714675_960_720",
	"/images/vintage-4896141_960_720",
	"/images/phone-1869510_960_720",
	"/images/vintage-2792545_960_720.jpg",
	// Add more URLs here
];

// Function to change background image
const changeBackground = () => {
	// Get a random number based on the number of backgrounds we have
	const random = Math.floor(Math.random() * backgrounds.length);
	// Change the background image
	document.body.style.backgroundImage = `url(${backgrounds[random]})`;
};
// Call function when page loads
changeBackground();



let questions = [
	{
		question: "What is the world's most populated country?",
		choice1: "United States",
		choice2: "China",
		choice3: "Russia",
		choice4: "India",
		choice5: "Egypt",
		choice6: "Germany",
		answer: 2,
	},
	{
		question: "What is the capital of the Philippines?",
		choice1: "Jakarta",
		choice2: "Dili",
		choice3: "Manilla",
		choice4: "Marawi",
		choice5: "Berlin",
		choice6: "Cairo",
		answer: 3,
	},
	{
		question: "The Great Barrier Reef is off the coast of which country?",
		choice1: "Australia",
		choice2: "Fiji",
		choice3: "South Africa",
		choice4: "New Zealand",
		choice5: "Egypt",
		choice6: "Germany",
		answer: 1,
	},
	{
		question: "What is the world's Smallest Country?",
		choice1: "United States",
		choice2: "China",
		choice3: "Russia",
		choice4: "Georgia",
		choice5: "Vatican City",
		choice6: "Fiji",
		answer: 5,
	},
];
let currentQuestion = {};
let TrueAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const question = document.querySelector("#QuestionText");
const choices = Array.from(document.querySelectorAll(".ChoiceText"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#scorenumber");
const progressBarFull = document.querySelector("#progressBarFull");
const SCORE_POINTS = 25;
const MAX_QUESTIONS = 4;
GetStarted = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNewQuestion();
};

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem("mostRecentScore", score);
		
		

		return window.location.assign("score.html");
		changeBackground();
	} else {
		changeBackground();
	}

	questionCounter++;
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
	progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
	const questionsRandNumber = Math.floor(Math.random() * availableQuestions.length);
	currentQuestion = availableQuestions[questionsRandNumber];
	question.innerText = currentQuestion.question;
	choices.forEach((choice) => {
		const number = choice.dataset["number"];
		choice.innerText = currentQuestion["choice" + number];
	});
	availableQuestions.splice(questionsRandNumber, 1);

	TrueAnswers = true;
};
choices.forEach((choice) => {
	choice.addEventListener("click", (e) => {
		if (!TrueAnswers) return;
		TrueAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];
		let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
		if (classToApply === "correct") {
			incrementScore(SCORE_POINTS);
		}
		selectedChoice.parentElement.classList.add(classToApply);
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		}, 1000);
	});
});

incrementScore = (number) => {
	score += number;
	scoreText.innerText = score;
};
GetStarted();

let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

if (classToApply === "correct") {
	incrementScore(SCORE_POINTS);
	selectedChoice.classList.add("correct-text"); // This line is new
}

setTimeout(() => {
	selectedChoice.classList.remove("correct-text"); // This line is new
	getNewQuestion();
}, 1000);

