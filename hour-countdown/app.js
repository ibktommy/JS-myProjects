const hoursValue = document.querySelector('.hours p');
const minutesValue = document.querySelector('.minutes p');
const secondsValue = document.querySelector('.seconds p');

// console.log(hoursValue);
// console.log(minutesValue);
console.log(secondsValue.textContent);

let startSecondsCountDown;
let startMinutesCountDown;

// Function to Coundown seconds
function secondsCountDown() {
	let secondsNumber = Number(secondsValue.textContent);

	secondsNumber = secondsNumber - 1;

	if (secondsNumber > 9) {
		secondsValue.innerHTML = secondsNumber.toString();
	} else if (secondsNumber <= 9) {
		secondsValue.innerHTML = '0' + secondsNumber.toString();
	}

	if (secondsValue.textContent === '00') {
		// Wait for a seconds so as to show the "00" value of seconds before calling the minutesCountDown-function
		setTimeout(() => {
			minutesCountDown();
		}, 1000);
	}
}
startSecondsCountDown = setInterval(secondsCountDown, 1000);

// Function to Countdown minutes
function minutesCountDown() {
	secondsValue.innerHTML = '10'; //Reset the value of seconds

	let minutesNumber = Number(minutesValue.textContent);

	minutesNumber = minutesNumber - 1;

	if (minutesNumber > 9) {
		minutesValue.innerHTML = minutesNumber.toString();
	} else if (minutesNumber <= 9) {
		minutesValue.innerHTML = '0' + minutesNumber.toString();
	}
}
