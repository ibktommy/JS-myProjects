// Set Variables that gets the timer values from the HTML code
const yearsValue = document.querySelector('.years p');
const monthsValue = document.querySelector('.months p');
const weeksValue = document.querySelector('.weeks p');
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
		daysValue.textContent === '00' &&
		weeksValue.textContent === '00' &&
		monthsValue.textContent === '00' &&
		yearsValue.textContent === '00'
	) {
		secondsValue.innerHTML = '00';
		minutesValue.innerHTML = '00';
		hoursValue.innerHTML = '00';
		daysValue.innerHTML = '00';
		weeksValue.innerHTML = '00';
		monthsValue.innerHTML = '00';
		yearsValue.innerHTML = '00';
		clearCountdown = clearInterval(startCountDown);
		return;
	}

	// Check if months, weeks, days, hours, minutes and seconds values are '00', then call the MonthsCountdown function
	if (
    monthsValue.textContent === '00' &&
		weeksValue.textContent === '00' &&
		daysValue.textContent === '00' &&
		hoursValue.textContent === '00' &&
		minutesValue.textContent === '00' &&
		secondsValue.textContent === '00'
	) {
		yearsCountdown();
	}

	// Check if weeks, days, hours, minutes and seconds values are '00', then call the MonthsCountdown function
	if (
		weeksValue.textContent === '00' &&
		daysValue.textContent === '00' &&
		hoursValue.textContent === '00' &&
		minutesValue.textContent === '00' &&
		secondsValue.textContent === '00'
	) {
		monthsCountdown();
	}

	// Check if days, hours, minutes and seconds values are '00', then call the WeeksCountdown function
	if (
		daysValue.textContent === '00' &&
		hoursValue.textContent === '00' &&
		minutesValue.textContent === '00' &&
		secondsValue.textContent === '00'
	) {
		weeksCountdown();
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

// Function that counts down the Hours value
function hoursCountDown() {
	minutesValue.innerHTML = '59'; //Reset the value of minutes
	secondsValue.innerHTML = '60'; //Reset the value of seconds

	let hoursNumber = Number(hoursValue.textContent);

	hoursNumber = hoursNumber - 1;
	hoursValue.textContent = hoursNumber

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
	daysValue.textContent = daysNumber;

	if (daysNumber > 9) {
		daysValue.innerHTML <= daysNumber.toString();
	} else if (daysNumber <= 9) {
		daysValue.innerHTML = '0' + daysNumber.toString();
	}
}

// Function that counts down the Weeks Value
function weeksCountdown() {
	daysValue.innerHTML = '6'; //Reset the value of Days
	hoursValue.innerHTML = '23'; //Reset the value of Hours
	minutesValue.innerHTML = '59'; //Reset the value of minutes
	secondsValue.innerHTML = '60'; //Reset the value of seconds

	let weeksNumber = Number(weeksValue.textContent);

	weeksNumber = weeksNumber - 1;
	weeksValue.textContent = weeksNumber;

	if (weeksNumber > 9) {
		weeksValue.innerHTML <= weeksNumber.toString();
	} else if (weeksNumber <= 9) {
		weeksValue.innerHTML = '0' + weeksNumber.toString();
	}
}

// Function that counts down the Months Value
function monthsCountdown() {
	weeksValue.innerHTML = '3'; //Reset the value of Weeks
	daysValue.innerHTML = '6'; //Reset the value of Days
	hoursValue.innerHTML = '23'; //Reset the value of Hours
	minutesValue.innerHTML = '59'; //Reset the value of minutes
	secondsValue.innerHTML = '60'; //Reset the value of seconds

	let monthsNumber = Number(monthsValue.textContent);

	monthsNumber = monthsNumber - 1;
	monthsValue.textContent = monthsNumber;

	if (monthsNumber > 9) {
		monthsValue.innerHTML <= monthsNumber.toString();
	} else if (monthsNumber <= 9) {
		monthsValue.innerHTML = '0' + monthsNumber.toString();
	}
}

// Function that counts down the Years Value
function yearsCountdown() {
  monthsValue.innerHTML = '11' //Reset the value of Months
	weeksValue.innerHTML = '3'; //Reset the value of Weeks
	daysValue.innerHTML = '6'; //Reset the value of Days
	hoursValue.innerHTML = '23'; //Reset the value of Hours
	minutesValue.innerHTML = '59'; //Reset the value of minutes
	secondsValue.innerHTML = '60'; //Reset the value of seconds

	let yearsNumber = Number(yearsValue.textContent);

	yearsNumber = yearsNumber - 1;
	yearsValue.textContent = yearsNumber;

	if (yearsNumber > 9) {
		yearsValue.innerHTML <= yearsNumber.toString();
	} else if (yearsNumber <= 9) {
		yearsValue.innerHTML = '0' + yearsNumber.toString();
	}
}

// Call the secondsCountDown at an interval of 1 seconds
startCountDown = setInterval(secondsCountDown, 1000);
