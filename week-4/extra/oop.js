/* Object oriented programming (OOP)

constructor functions */

function Person(firstName, lastName, isMarried) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isMarried = isMarried;
  this.children = [];
  this.addChild = function (fullname) {
    this.children.push(fullname);
  };

  this.toString = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("Mia", "De Pauw");
console.log(person1);
person1.addChild("Sander");
console.log(person1.toString());
console.log(person1.toString());

const person2 = new Person("Jef", "De Niel");
console.log(person2);

console.log(person1 == person2);

// Blog post

function Post(title, synopsis, body) {
  this.title = title;
  this.synopsis = synopsis;
  this.body = body;

  this.toString = function () {
    return `${this.title}`;
  };
}

const post1 = new Post(
  "Grote test",
  "ja ja ja ja aj aja ja",
  "elzkufhzeiubfelkz fkjzeeiofze kljbze haze u"
);

console.log(post1);
console.log(post1.toString);
