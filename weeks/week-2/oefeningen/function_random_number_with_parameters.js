// schrijf een functie genaamd getRandomNumber dat
// gebruik maakt van return om een random gegereerd geetal te geven  en roep de functie 2x aan

function getRandomNumber() {
  const r = Math.round(Math.random() * 100);
  return r;
}

let g = getRandomNumber();
console.log(`the random number is ${g}`);
g = getRandomNumber();
console.log(`the random number is ${g}`);

// bovengrens en ondergrns voor random gegenereerd nummer en return om random getal te retourneren obv argumenten
// roep de functie 2x aan

function generateRandomNumber(a, b) {
  let v = Math.round(a + Math.random() * (b - a));
  return v;
}

let v = generateRandomNumber(20, 85);
console.log(v);
v = generateRandomNumber(5, 20);
console.log(v);
