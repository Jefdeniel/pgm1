/*
Maak een bestand function_hello.js aan in de reeds aangemaakt folder week-2.
    Schrijf een functie genaamd sayHello dat:
        gebruik maakt van return om de boodschap “Hello World” te retourneren
    Roep deze functie 2 keer aan
Voorbeeld:
sayHello(); // Hello World
*/

function sayHello() {
  let message = "";
  message += "hello world\n";
  message += "hello world\n";
  console.log(message);
}

sayHello();

function ZegHallo() {
  return "Hallo wereld";
}

let m = ZegHallo();
console.log(m);
m = ZegHallo();
console.log(m);
