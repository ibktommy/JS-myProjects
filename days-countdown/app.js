// Set Variables that gets the timer values from the HTML code
const daysValue = document.querySelector('.days p');
const hoursValue = document.querySelector('.hours p');
const minutesValue = document.querySelector('.minutes p');
const secondsValue = document.querySelector('.seconds p');

// Create a variable that contains the setInterval callback function
let startCountDown;

// Function that counts down the Seconds value
function secondsCountDown() {
	// Check if the time values are '00' and reset them to all zeros then stop the rest of the codes from running
	if (
		secondsValue.textContent === '00' &&
		minutesValue.textContent === '00' &&
		hoursValue.textContent === '00' &&
		daysValue.textContent === '00'
	) {
		secondsValue.innerHTML = '00';
		minutesValue.innerHTML = '00';
		hoursValue.innerHTML = '00';
		daysValue.innerHTML = '00';
		clearCountdown = clearInterval(startCountDown);
		return;
	}

	// Check if hours, minutes and seconds values are '00', then call the daysCountdown function
	if (
		hoursValue.textContent === '00' &&
		minutesValue.textContent === '00' &&
		secondsValue.textContent === '00'
	) {
		daysCountdown();
	}

	// Check if seconds and minutes values are '00', then call the hoursCountDown function
	if (secondsValue.textContent === '00' && minutesValue.textContent === '00') {
		hoursCountDown();
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
	secondsValue.innerHTML = '59'; //Reset the value of seconds

	let minutesNumber = Number(minutesValue.textContent);

	minutesNumber = minutesNumber - 1;
	minutesValue.textContent = minutesNumber;

	if (minutesNumber > 9) {
		minutesValue.innerHTML = minutesNumber.toString();
	} else if (minutesNumber <= 9) {
		minutesValue.innerHTML = '0' + minutesNumber.toString();
	}
}

// Function that counts down the Hours value
function hoursCountDown() {
	minutesValue.innerHTML = '59'; //Reset the value of minutes
	secondsValue.innerHTML = '60'; //Reset the value of seconds

	let hoursNumber = Number(hoursValue.textContent);

	hoursNumber = hoursNumber - 1;
	hoursValue.textContent = hoursNumber;

	if (hoursNumber > 9) {
		hoursValue.innerHTML = hoursNumber.toString();
	} else if (hoursNumber <= 9) {
		hoursValue.innerHTML = '0' + hoursNumber.toString();
	}
}

// Function that counts down the Days Value
function daysCountdown() {
	hoursValue.innerHTML = '23'; //Reset the value of Hours
	minutesValue.innerHTML = '59'; //Reset the value of minutes
	secondsValue.innerHTML = '60'; //Reset the value of seconds

	let daysNumber = Number(daysValue.textContent);

	daysNumber = daysNumber - 1;
	daysValue.textContent =  daysNumber;

	if (daysNumber > 9) {
		daysValue.innerHTML <= daysNumber.toString();
	} else if (daysNumber <= 9) {
		daysValue.innerHTML = '0' + daysNumber.toString();
	}
}

// Call the secondsCountDown at an interval of 1 seconds
startCountDown = setInterval(secondsCountDown, 1000);
