const array1 = new Array(Element0, element1, element2);
const array2 = Array(element0, element1);
const array3 = [element0, element1, element2];

const arrayLenght = 6;

const colors = ["red", "green", "blue"];
for (let [index, element] of colors.entries()) {
  const currentColor = element;
  console.log(`Index ${index} with color ${currentColor}`);
}

let person = new Object();
person.firstname = "Jef";
person.lastname = "De Niel";
person.age = 22;

const age = person.age 
console.log(age) // output is 22
console.log(person.hair) //output is undefined

const hair = person.hair 
person.hair = "blond";
console.log(hair) //output blond

person["height"] = 1.72
let height = person["height"];
console.log(height)

height = person.height;
console.  