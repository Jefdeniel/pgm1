/* 
programming 1: essentials 
week 2
date 4/11/2022
==================

functions */

// definieert een eenvoudige functue met de naam SayHello met als doel iets te schrijven in de terminal

function sayHello() {
  console.log(`greetings earthlings`);
}

// Spreek de functie aan > to call a function

sayHello();
sayHello();
sayHello();
sayHello();

// definieert een eenvoudige functie met de naam showMessage met als doel een boodschap te schrijven in de terminal die we meegeven aan deze functie

function showMessage(message) {
  console.log(`Your message: ${message}.`);
}

showMessage("Goeiendag iedereen");
showMessage("Goeiendag zebbies");
showMessage("Goeiendag omo's"); // belangrijk om er zeker een string van te maken met ""
showMessage() // je voegt niets toe dus het is undefined

//*definieer een functie met de naam addition met als doel de som te maken van 2 getallen

function addition (a,b){
  const sum = a + b;
  console.log(`de som van ${a} en ${b} is ${sum}.`)
}

addition(3,9) 
addition(2,-9)


// definieer een functie die 2 getallen emt elkaar vermenigvuldigd en het resultaat teruggeeft 

function multiply (c,d) {
  const mul = c*d;
  return mul
}

let m = multiply(3,4)
console.log(m)

function swap (person) {
  person = "john doe";
  return person
}

const personA = "Jane doe";
const personB = swap(personA);
console.log(personA, personB)

// pass by value

function doubleSalary(salary) {
  salary *=2;
  return salary
}

let s = 2500
console.log(`Your salary is ${s}.`)
s = doubleSalary(s)
console.log(`Your salary is ${s}`)

// Pass by reference

function doubleSalaryForPeron(person) {
  person.salary *= 2;
}
const person = {
  firstName = 'Jef';
  salary = 1000;
};
console.log(`Your salary is ${person.salary}.`);
doubleSalaryForPeron(person);
console.log(`Your salary is ${person.salary}.`);

function sr(v) {
  return v*v;
}

// anonieme functies = function expressions

const sq =function(v) {
  return v**2;
}

console.log(sq(5))

// arrow functions 

const sa = (v) => {
  return v*v;
}
console.log(sa(3))

// Addition of two values 

const add = (a,b) => {
  return a+b;
}

let v = (add(3,5))
console.log(v);


const addVeryShort = (a,b) => a+b;
v = addVeryShort(3,9);
console.log(v);


// rest parameter in function

function multiply(factor, ...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i] * factor;
  }
  return result
} 
console.log(multiply(3,2,1,1,2,3))

// IIFE => immediatly invoked function expression
(()=> {
  console.log("letsgo")
})();