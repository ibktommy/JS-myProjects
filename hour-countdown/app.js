const hoursValue = document.querySelector('.hours p');
const minutesValue = document.querySelector('.minutes p');
const secondsValue = document.querySelector('.seconds p');

// console.log(hoursValue);
// console.log(minutesValue);
console.log(secondsValue.textContent);

let startSecondsCountDown;


// Function to Coundown seconds
function secondsCountDown() {
  let secondsNumber = Number(secondsValue.textContent)

  secondsNumber = secondsNumber - 1

  secondsValue.textContent = secondsNumber.toString()  

  if (secondsValue.textContent === '0') {
    clearInterval(startSecondsCountDown)
  } 
}

startSecondsCountDown = setInterval(secondsCountDown, 1000);

