const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');
const timerBtn = document.querySelector('.btn');
const inputForm = document.querySelector('form');
let minutesDOM = document.querySelector('.minutes p');
let secondsDOM = document.querySelector('.seconds p');
const actionBtns = document.querySelector('.action-buttons');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const resumeBtn = document.querySelector('.resume-btn');

// Add event-functionality that runs when the form button is clicked
inputForm.addEventListener('submit', (e) => {
	e.preventDefault()

	if (
		minutesInput.value.length !== 2 ||
		secondsInput.value.length !== 2
	) {
		alert('All the time values must be in 2 digits!');
		return;
	}

	minutesDOM.innerHTML = minutesInput.value;
	secondsDOM.innerHTML = secondsInput.value;

	// Call the secondsCountDown at an interval of 1 seconds
	startCountDown = setInterval(secondsCountDown, 1000);

	timerBtn.disabled = true;
	timerBtn.classList.add('disabled');

	actionBtns.classList.remove('hide');
});

// Function that counts down the Seconds Value
function secondsCountDown() {
	// Check if the time values are '00' and stop the Countdown then reset them to all zeros then stop the rest of the codes from running
	if (
		secondsDOM.textContent === '00' &&
		minutesDOM.textContent === '00'
	) {
		secondsDOM.innerHTML = '00';
		minutesDOM.innerHTML = '00';
    clearCountDown = clearInterval(startCountDown)
		return;
	}

	// Check if seconds and minutes values are '00', then call the minutes CountDown function
	if (secondsDOM.textContent === '00' && minutesDOM.textContent !== '00') {
		minutesCountDown();
	}

	let secondsNumber = Number(secondsDOM.textContent);

	secondsNumber = secondsNumber - 1;

	if (secondsNumber > 9) {
		secondsDOM.innerHTML = secondsNumber.toString();
	} else if (secondsNumber <= 9) {
		secondsDOM.innerHTML = '0' + secondsNumber.toString();
	}
}

// Function that counts down the Minutes value
function minutesCountDown() {
	secondsDOM.innerHTML = '60'; //Reset the value of seconds

	let minutesNumber = Number(minutesDOM.textContent);

	minutesNumber = minutesNumber - 1;

	if (minutesNumber > 9) {
		minutesDOM.innerHTML = minutesNumber.toString();
	} else if (minutesNumber <= 9) {
		minutesDOM.innerHTML = '0' + minutesNumber.toString();
	}
}

// Pause the Countdown
pauseBtn.addEventListener('click', () => {
	clearCountDown = clearInterval(startCountDown);
	pauseBtn.classList.add('hide');
	resumeBtn.classList.remove('hide');
});

// Resume the Countdown
resumeBtn.addEventListener('click', () => {
	startCountDown = setInterval(secondsCountDown, 1000);
	resumeBtn.classList.add('hide');
	pauseBtn.classList.remove('hide');
});

// Reset the Countdown and Form
resetBtn.addEventListener('click', () => {
	inputForm.reset();
	clearCountDown = clearInterval(startCountDown);

	minutesDOM.innerHTML = '--';
	secondsDOM.innerHTML = '--';

	timerBtn.disabled = false;
	timerBtn.classList.remove('disabled');

	actionBtns.classList.add('hide');
});
