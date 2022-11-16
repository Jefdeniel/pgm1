// Schrijf een JavaScript programma om de rollNumber eigenschap van het volgende object te verwijderen. Druk ook het object af voor of na het verwijderen van de eigenschap.

// delete student.rollNumber

// console.log(student)

let student = {
  name: "Irena Svalkova",
  class: "PGM-1",
  rollNumber: 12,
};
console.log(student);
delete student.rollNumber;
console.log(student);
