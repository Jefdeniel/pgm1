/*
Programming 1: Essentials
Week: 1
Date: 23-09-2022
=========================
Recap
*/
let height = 1.72;
const firstName = "Philippe";
let isMarried = false;
console.log(typeof height);
console.log(typeof firstName);
console.log(typeof isMarried);

// make a new instance of the Date class
let now = new Date();
console.log(typeof now);
console.log(now instanceof Math);

// DataType conversie
let msg = "My age is " + 21;
msg = "test" - 15;
console.log(msg); // NaN

let v;
v = parseInt("-101", 10); // Hexadecimaal
console.log(v);
v = parseInt("101", 8); // Octaal
console.log(v);
v = parseInt("101", 2); // Binair
console.log(v);
v = parseInt("0x00fe66", 16); // Binair
console.log(v);
v = parseInt("3.42", 10); // Hexadecimaal
console.log(v);
v = parseFloat("3.42", 10); // Hexadecimaal maar nu met float, ko
console.log(v);
v = parseFloat("3.42 is de lengte", 10); // Hexadecimaal maar nu met float, ko
console.log(v);

// Block statement = groeperen van instructies die in sequentie worden uitgevoerd (aka na elkaar dus)
{
  const lastName = "De Niel";
  const nickName = "Jeffert";
  let age = 50;
}
console.log(age);

// age is not defined want het zit niet in de block statzement, moest het er wel in zitten dan kent hij de age wel
let p = 3;
{
  let p = -4;
}
console.log(p);

// conditional statements if...else
if (true) {
  console.log("it's true");
} else {
  console.log("it's NOT true");
}
let isALady = false;
if (isALady) {
  console.log("You are a lady");
} else {
  console.log("You are a boy");
}

let gender = 2;
if (gender == 0) {
  console.log("gender is not known!");
} else if (gender == 1) {
  console.log("You are a male");
} else if (gender == 2) {
  console.log("You are a female");
} else {
  console.log("Gender is not specified");
}

// Ternary Operator --> is eigenlijk een if...else statement maar dan in 1 zin, beter dus
let isALady = false;
let msg3 = isALady ? "You are a lady " : " ur a boi";
console.log(msg3);

// switch / case
let gender = 2;
switch (gender) {
  case 0:
    console.log("gender is not known");
    break;
  case 1:
    console.log("you are a male");
    break;
  case 2:
    console.log("you are a female");
    break;
  case 9:
    console.log("gender is not specified");
    break;
}
