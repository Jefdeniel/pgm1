/* 
Programming 1: essentials 
Week: 3
Date 07/11/2022
================
Recap Objects
*/

// Objects initializers = Literal Object
let person = {
  firstName: "Jef",
  lastName: "De Niel",
  age: 22,
  eMail: "jefdeniel@icloud.com",
  isMarried: false,
  children: ["Linus", "Lester"],
  height: 1.72,
  socials: {
    linkedIn:
      "https://www.linkedin.com/learning/git-essential-training-the-basics",
    instagram:
      "https://www.instagram.com/direct/t/340282366841710300949128147461629980626",
  },
  sleep() {
    console.log(`${this.firstName} is sleeping`);
  },
  running() {
    return `${this.firstName} is running`;
  },
};
// call the cuntion sleep
person.sleep();

const m = person.isMarried;
console.log(m);
// change status isMarried
person.isMarried = !person.isMarried;
console.log(person.isMarried);

console.log(person.running());

const person1 = person;
person1.firstName = "claudia";
console.log(person);

// Make a copy of a person

const person2 = JSON.parse(JSON.stringify(person)); // Voor sem2
person2.firstName = "Eveline";
console.log(person.firstName);
console.log(person2.firstName);

// Other way to make a custom object

const person3 = new Object(); // Hier maak je een nieuw object aan zoals we bij date doen
person3.firstName = "Leptjup";
person3.jump = function () {
  console.log(`${this.firstName} is jumping`);
};
