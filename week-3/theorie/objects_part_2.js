/* 
Programming 1: essentials 
Week: 3
Date 07/11/2022
================
Objects part 2
*/

// Objects initializers = Literal Object

const parking = {
  name: "reep",
  availableCapacity: 350,
  totalCapacity: 500,
  get capacity() {
    return this.totalCapacity;
  },
  set capactity(x) {
    this.totalCapacity = x;
  },
};
// Change the capactiy via setter
parking.capacity = parking.totalCapacity + 100;
// Get the capactit via getter
const c = parking.capacity;
console.log(c);

parking.blah = "test";
delete parking.blah;
console.log(parking.blah);
console.log(parking);

// Compare objects
const person3 = {
  firstName: "Jef",
};
const person4 = {
  firstName: "Jef",
};
console.log(person1 == person2);
const person3 = person4;
console.log(person1 == person2);
