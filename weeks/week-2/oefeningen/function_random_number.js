/*
Maak een bestand function_random_number.js aan in de reeds aangemaakt folder week-2.
    Schrijf een functie genaamd getRandomNumber dat:
        gebruik maakt van return om de een random gegenereerd getal te retourneren
    Roep deze functie 2 keer aan
*/

//function getRandomNumber () {
//return Math.floor(Math.random() * 101);
//}
//console.log(getRandomNumber)

function getRandomNumber() {
  const r = Math.floor(Math.random() * 101);
  return r;
}

let g = getRandomNumber();
console.log(`The random value is ${g}`);
g = getRandomNumber();
console.log(`The random value is ${g}`);
