/* Maak een bestand fahrenheit_to_celsius.js aan in de reeds aangemaakt folder week-2.
Schrijf een functie genaamd convertFahrenheitToCelsius dat:
1 argument bevat: de temperatuur uitgedrukt in Fahrenheit
converteer de temperatuur van Fahrenheit (°F) naar Celsius (°C) volgens de formule Celsius = (fahrenheit - 32) / 1.8
maak gebruik van return om het aantal graden Celsius te retourneren
schrijf de geretourneerde waarde naar de console zoals: “Temperature of 71°F equals to 21.6°C!”
Roep deze functie 2 keer aan, steeds met een andere waarde voor het argument */

function convertFahrenheitToCelsius(fahrenheit) {
  const celcius = (fahrenheit - 32) / 1.8;
  return celcius.toFixed(1);
}

let f = 71;
c = convertFahrenheitToCelsius(f);
console.log(`Een temperatuur van ${f} fahrenheit is gelijk aan ${c} `);
