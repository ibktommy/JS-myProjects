const daysInput = document.querySelector('#days')
const hoursInput = document.querySelector('#hours');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');
const timerBtn = document.querySelector('.btn');
const inputForm = document.querySelector('form');
let daysDOM = document.querySelector('.days p')
let hoursDOM = document.querySelector('.hours p');
let minutesDOM = document.querySelector('.minutes p');
let secondsDOM = document.querySelector('.seconds p');
const actionBtns = document.querySelector('.action-buttons');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const resumeBtn = document.querySelector('.resume-btn');

// Add event-functionality that runs when the form button is clicked
inputForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// Check if the timer values input are in 2 digits
	if (
		daysInput.value.length !== 2 ||
		hoursInput.value.length !== 2 ||
		minutesInput.value.length !== 2 ||
		secondsInput.value.length !== 2
	) {
		alert('All the time values must be in 2 digits!');
		return;
	}

	// Pass the input timer values to the display values
	daysDOM.innerHTML = daysInput.value;
	hoursDOM.innerHTML = hoursInput.value;
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
	// Check if the time values are '00' and reset them to all zeros, stop the rest of the codes from running, stop the countdown and reset the form
	if (
		secondsDOM.textContent === '00' &&
		minutesDOM.textContent === '00' &&
		hoursDOM.textContent === '00' &&
		daysDOM.textContent === '00'
	) {
		secondsDOM.innerHTML = '00';
		minutesDOM.innerHTML = '00';
		hoursDOM.innerHTML = '00';
		daysDOM.innerHTML = '00';

		// End countdown
		alert('Countdown ended!');
		inputForm.reset();
		timerBtn.disabled = false;
		timerBtn.classList.remove('disabled');
		actionBtns.classList.add('hide');
		clearCountDown = clearInterval(startCountDown);
		return;
	}

	// Check if hours, minutes and seconds values are '00', then call the daysCountdown function
	if (
		hoursDOM.textContent == '00' &&
		minutesDOM.textContent === '00' &&
		secondsDOM.textContent === '00'
	) {
		daysCountdown();
	}

	// Check if seconds and minutes values are '00', then call the hoursCountDown function
	if (secondsDOM.textContent === '00' && minutesDOM.textContent === '00') {
		hoursCountDown();
	}

	// Check if the seconds value is '00', then call the minutesCountDown function
	if (secondsDOM.textContent === '00' && minutesDOM.textContent !== '00') {
		minutesCountDown();
	}

	let secondsNumber = Number(secondsDOM.textContent);

	secondsNumber = secondsNumber - 1;
	secondsDOM.textContent = secondsNumber;

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
	minutesDOM.textContent = minutesNumber;

	if (minutesNumber > 9) {
		minutesDOM.innerHTML = minutesNumber.toString();
	} else if (minutesNumber <= 9) {
		minutesDOM.innerHTML = '0' + minutesNumber.toString();
	}
}

// Function that counts down the Hours value
function hoursCountDown() {
	minutesDOM.innerHTML = '59'; //Reset the value of minutes
	secondsDOM.innerHTML = '60'; //Reset the value of seconds

	let hoursNumber = Number(hoursDOM.textContent);

	hoursNumber = hoursNumber - 1;
	hoursDOM.textContent = hoursNumber;

	if (hoursNumber > 9) {
		hoursDOM.innerHTML = hoursNumber.toString();
	} else if (hoursNumber <= 9) {
		hoursDOM.innerHTML = '0' + hoursNumber.toString();
	}
}

// Function that counts down the Days Value
function daysCountdown() {
  hoursDOM.innerHTML = '23'; //Reset the value of Hours
	minutesDOM.innerHTML = '59'; //Reset the value of minutes
	secondsDOM.innerHTML = '60'; //Reset the value of seconds

  let daysNumber = Number(daysDOM.textContent);

  daysNumber = daysNumber - 1;

  if (daysNumber > 9) {
    daysDOM.innerHTML <= daysNumber.toString()
  } else if (daysNumber <= 9) {
    daysDOM.innerHTML = '0' + daysNumber.toString()
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

	daysDOM.innerHTML = '--'
	hoursDOM.innerHTML = '--';
	minutesDOM.innerHTML = '--';
	secondsDOM.innerHTML = '--';

	timerBtn.disabled = false;
	timerBtn.classList.remove('disabled');

	actionBtns.classList.add('hide');
});
