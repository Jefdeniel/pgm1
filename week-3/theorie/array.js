/* 
Programming 1: essentials 
Week: 3
Date 07/11/2022
================
Arrays 
*/

const persons = ["mieke", "jef", "stefaan", "james"];

let person = persons[2];
console.log(person);
persons[2] = "noah";
person = persons[2];
console.log(person);

let l = persons.length;
console.log(l);

persons[4] = "Olivier";
console.log(persons);

// add a new element to an array
persons.push("Nathalie");
console.log(persons);
persons.pop();
console.log(persons);

person = {
  firstName: "Mia",
  lastName: "Van Tielen",
  children: ["karen", "kristel"],
};
persons.push(person);
console.log(persons);

persons[persons.length - 1].children.push("luk");
console.log(persons);

persons.unshift("ismael");
console.log(persons);

const numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(1, 0, 9, 8, 7, 6);
console.log(numbers);
numbers.splice(1, 4);
console.log(numbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
const arr4 = [...arr1, ...arr2];
console.log(arr4);

const fruit = ["apples", "peren"];
fruit.pop();
console.log(fruit);
fruit.unshift();
console.log(fruit);

const cars = ["vw", "fiat", "audi"];
const carsFavo = cars.slice(1, 3);
console.log(carsFavo);

const os = ["linux", "macOS", "Amigo OS", "windows"];
const osStr = os.join(" | \t");
console.log(osStr);

const specialNumbers = [2, 4, 9];
const verySpecialNumbers = specialNumbers.map((elem) => {
  return Math.pow(elem, 2);
});
console.log(verySpecialNumbers);

const students = [
  {
    name: "Mieke",
  },
  {
    name: "Jef",
  },
];
const output = students.map((elem) => elem.name).join("\n");
console.log(output);
console.log(output);
