/* Met window.alert() kunnen we tekst weergeven via een dialoogcenster.
Schrijf een functie calculateBMI() om de BMI te berekenen.
Schrijf een functie bmiToString(bmi) om op basis van de BMI-waarde een tekst terug te geven volgens de volgende vergelijkingen:
Als BMI kleiner dan 18.5 geef dan de tekst ondergewicht terug.
Als BMI groter dan 25 geef dan de tekst overgewicht terug.
Als BMI groter of gelijk aan 18.5 en kleiner of gelijk aan 25 geef dan de tekst een gezond gewicht terug. */

const height = window.prompt("define your height (m)");
const weight = window.prompt("define your weight (kg)");

function calculateBMI(h, w) {
  return (w / h ** 2).toFixed(1);
}

function bmiToString(bmi) {
  let output = `Je BMI is ${bmi}, `;
  if (bmi < 18.5) {
    output += "ondergewicht";
  } else if (bmi >= 25) {
    output += "gezond gewicht";
  } else if (bmi <= 30) {
    output += "overgewicht";
  } else if (bmi > 30) {
    output += "zwaarlijvig";
  }
  return output;
}
const bmi = calculateBMI(height, weight);
console.log(bmiToString(bmi));

// alert("Als gewicht kleinr is dan 18.5 dan heb je ondergewicht");
// alert("als je BMI groter is dan 25 dan heb je overgewicht");
// alert(
//   "als je BMI groter of gelijk aan 18.5 of geljk aan 25 dan heb je een gezond gewicht"
// );
