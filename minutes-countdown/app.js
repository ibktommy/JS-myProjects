// Set Variables that gets the timer values from the HTML code

const minutesValue = document.querySelector('.minutes p');
const secondsValue = document.querySelector('.seconds p');

// Function that counts down the Seconds value
function secondsCountDown() {
	// Check if the time values are '00' and reset them to all zeros, stop the countdown and then stop the rest of the codes from running
	if (
		secondsValue.textContent === '00' &&
		minutesValue.textContent === '00'
	) {
		secondsValue.innerHTML = '00';
		minutesValue.innerHTML = '00';
    clearCountDown = clearInterval(startCountDown)
		return;
	}

	// Check if the seconds value is '00', then call the minutesCountDown function
	if (secondsValue.textContent === '00' && minutesValue.textContent !== '00') {
		minutesCountDown();
	}

	let secondsNumber = Number(secondsValue.textContent);

	secondsNumber = secondsNumber - 1;
	secondsValue.textContent = secondsNumber;

	if (secondsNumber > 9) {
		secondsValue.innerHTML = secondsNumber.toString();
	} else if (secondsNumber <= 9) {
		secondsValue.innerHTML = '0' + secondsNumber.toString();
	}
}

// Function that counts down the Minutes value
function minutesCountDown() {
	secondsValue.innerHTML = '60'; //Reset the value of seconds

	let minutesNumber = Number(minutesValue.textContent);

	minutesNumber = minutesNumber - 1;
	minutesValue.textContent = minutesNumber;

	if (minutesNumber > 9) {
		minutesValue.innerHTML = minutesNumber.toString();
	} else if (minutesNumber <= 9) {
		minutesValue.innerHTML = '0' + minutesNumber.toString();
	}
}

// Call the secondsCountDown at an interval of 1 seconds
startCountDown = setInterval(secondsCountDown, 1000);
