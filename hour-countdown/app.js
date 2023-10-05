const hoursValue = document.querySelector('.hours p');
const minutesValue = document.querySelector('.minutes p');
const secondsValue = document.querySelector('.seconds p');

// console.log(hoursValue);
// console.log(minutesValue);
console.log(secondsValue.textContent);

let startCountDown;

// Function to Coundown seconds
function secondsCountDown() {
  if (secondsValue.textContent === '00' && minutesValue.textContent === '00') {
    hoursCountDown()
  }

  if (secondsValue.textContent === "00" && minutesValue.textContent !== '00') {
    minutesCountDown()
  }

	let secondsNumber = Number(secondsValue.textContent);

	secondsNumber = secondsNumber - 1;

	if (secondsNumber > 9) {
		secondsValue.innerHTML = secondsNumber.toString();
	} else if (secondsNumber <= 9) {
		secondsValue.innerHTML = '0' + secondsNumber.toString();
	}
}

// Function to Countdown minutes
function minutesCountDown() {
	secondsValue.innerHTML = '60'; //Reset the value of seconds

	let minutesNumber = Number(minutesValue.textContent);

	minutesNumber = minutesNumber - 1;

	if (minutesNumber > 9) {
		minutesValue.innerHTML = minutesNumber.toString();
	} else if (minutesNumber <= 9) {
		minutesValue.innerHTML = '0' + minutesNumber.toString();
	}
}

// Function to Coundown Hours
function hoursCountDown() {
  minutesValue.innerHTML = '59'; //Reset the value of minutes
  secondsValue.innerHTML = '60'; //Reset the value of seconds

  let hoursNumber = Number(hoursValue.textContent);

  hoursNumber= hoursNumber- 1

  if (hoursNumber > 9) {
		hoursValue.innerHTML = hoursNumber.toString();
	} else if (hoursNumber <= 9) {
		hoursValue.innerHTML = '0' + hoursNumber.toString();
	}
}


startCountDown = setInterval(secondsCountDown, 1000);
