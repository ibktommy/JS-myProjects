const hoursValue = document.querySelector('.hours p');
const minutesValue = document.querySelector('.minutes p');
const secondsValue = document.querySelector('.seconds p');

// console.log(hoursValue);
// console.log(minutesValue);
console.log(secondsValue.textContent);

let startSecondsCountDown;

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
		clearInterval(startSecondsCountDown);
	}
}

startSecondsCountDown = setInterval(secondsCountDown, 1000);
