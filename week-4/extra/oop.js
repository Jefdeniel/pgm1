function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addChild = function () {};
  this.toString = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("Mia", "De Pauw");
console.log(person1);
console.log(person1.toString());

const person2 = new Person("Jef", "De Niel");
console.log(person2);
