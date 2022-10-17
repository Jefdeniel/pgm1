function calculateDogYears(humanYears) {
  const dogYears = humanYears * 7;
  return dogYears;
}

function showMessage() {
  let message = `your dog is ${dogYears} years old in dog years`;
  console.log(message);
}

let humanYears = 7;
let dogYears = calculateDogYears(humanYears);
showMessage();
