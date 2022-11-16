// Dot notatie is heel belangrijk

// let person = new Object();
// person.firstName = "Philippe";
// person.lastName = "De Pauw - Waterschoot";
// person.age = 32;

// describe a person => literal object
const person = {
  firstName: "Jef", // EIGENSCHAP OBJECT IS VIA DUBBELE PUNT
  height: 1.72,
  weight: 65,
  dob: new Date(2000, 29, 06).getTime(),
  jump: function () {
    console.log("jump around");
  },
  fight: () => {
    console.log("finish him");
  },
  eat() {
    console.log("eating cookies");
  },
};

// console.log(person.weight);

// person.lastName = "De Niel";
// console.log(person);

// const h = person.height;
// console.log(h);

// const fName = person["firstName"]; // Dit is een associatieve array, vooral eenvoudig wanneer er spaties inzitten
// console.log(fName);

// person["race car"] = "red bull";
// console.log(person);

// person["666"] = "devil"; // person.666 gaat niet omdat het een cijfer is
// console.log(person["666"]);

// Methods = functions = actions

person.jump();
person.fight();
person.eat();

// loop doorheend e eigenschappen van een object mbbv een lus

for (let prop in person) {
  console.log(`${prop} with value ${person[prop]}`);
}

// Date object  --> je moet een nieuwe isntantie maken hiervoor

const date = new Date(person.dob);
console.log(date.toDateString());

// number object

let v = Number.MIN_VALUE;
console.log(v);
let w = Number.MAX_VALUE;
console.log(w);

v = 32.189454834;
v = v.toFixed(2);
console.log(v);

// String objec t

let str = "          john   ";
str = str.trim();
console.log(str);

str = str.charAt(3);
console.log(str);

str = "ik wil echt heel dood fox soms maar soms ook niet";
const words = str.split(" ");
for (let i = 0; i < words.length; i++) {
  console.log(`${words[i]}`);
}

const paragraph = "ik wil fox dooood";
let result = "";
for (let i = 0; i < paragraph.length; i++) {
  result = paragraph.charAt(i) + result;
}
console.log(result);

// Basic loops

strr = "";
for (let j = 1000; j >= 0; j--) {
  strr += j + "\t";
}
console.log(strr);

// Zoek naar een woord in een string (google search)

let searchTerm = "fox";
const position = paragraph.toLowerCase().indexOf(searchTerm.toLowerCase());
if (position === -1) {
  console.log(`"no result for search string ${searchTerm}"`);
} else {
  console.log(
    `We have an occurence for search string ${searchTerm} at index ${position}`
  );
}

// number object

const pi = Math.PI;
console.log(pi.toFixed(4));
const angleDegrees = 45;
const angleRadians = ((2 * pi) / 360) * angleDegrees; // Hoek van 45 graden uitgedrukt in radialen
console.log(angleRadians);

const vSin = Math.sin(angleRadians);
console.log(vSin);

// creating an object with Object Literals

const cat = {
  age: 2,
  amountOfLegs: 4,
  race: "fergal",
  lives: 7,
  gender: "male",
  eat: (n) => {
    if (n > 300) {
      console.log("dat is te veel");
    } else {
      console.log("dat is al veel beter");
    }
  },
  jump(h) {
    if (this.lives - 1 > 0) {
      console.log("you are death");
    } else if (h > 10) {
      this.lives--;
      console.log(`${this.lives} levens blijven nog over`);
    } else {
      console.log("ik heb niets gebroken");
    }
  },
};

cat.eat(400);
cat.jump(1);
cat.jump(5);
cat.jump(10);
cat.jump(15);

// describe a new Car via Object literal
const car = {
  brand: "Audi",
  weels: 4,
  amountOfFuel: 20,
  isAutomatic: false,
  engine: {
    cylinder: 6,
    hoursePower: 305,
  },
  toString() {
    //doel is om string representatie weer te geven van je object
    return `${this.brand}`;
  },
  tune() {
    this.engine.cylinder++;
    this.hoursePower = 305 + (this.engine.cylinder - 7) * 20;
  },
};
console.log(car.toString());

// Bij arrow functions hoef je niet "this" te gebruiken

car.engine.cylinder = 7;
console.log(car);
car.tune();
console.log(car);
car.tune();
console.log(car);
car.tune();
console.log(car);

const car1 = car;
console.log(car1);
console.log(car);
car1.color = "gray";
console.log(car);
