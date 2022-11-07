/*  Schrijf een JavaScript programma waarin student informatie wordt beschreven d.m.v. een object initalizer(opens new window). Een student bevat:

familienaam (string)
voornaam (string)
geslachtscode (number)
geboortedatum (number t.o.v. 1970)
cursussen (array van objecten)
cursus (object)
naam (string)
docenten (array van string objecten)
Print alle eigenschappen naar de console om het volgende resultaat te genereren: 

======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: Olivier Pieters
Gender: Male
Day of birth: Fri Dec 12 1975
======================================================
COURSES
======================================================
Course: Computer Systems
Lecturers: Thibault Fouquaert, Lennart Dubois
------------------------------------------------
Course: Web Design
Lecturers: Mathieu Spillebeen
------------------------------------------------
Course: Programming
Lecturers: Thibault Fouquaert, Philippe De Pauw - Waterschoot
====================================================== */

const student = {
  lastName: "De Niel",
  firstName: "Jef",
  genderCode: 1,
  dayOfBirth: 962229600000, // Tijd uitgedrukt in miliseconden vanaf geboortedag
  courses: [
    {
      name: "Computer Systems",
      lecturers: ["Stefaan De Volder", "Snaar de websteen"],
    },
    {
      name: "pgm1",
      lecturers: ["hoho", "hehe"],
    },
    {
      name: "Web Design",
      lecturers: ["Thomas Roels", "ZZebbie zebsgeeen"],
    },
  ],
};

function generateStringForGender(genderCode) {
  switch (genderCode) {
    case 0:
      return "not known";
    case 1:
      return "male";
    case 2:
      return "female";
    case 9:
      return "unspecified";
  }
}

function generateStringForCourses(courses) {
  let output = "";
  for (let i = 0; i < courses.length; i++) {
    output += `
    Course: ${courses[i].name}
    Lecturers: ${generateStringForLecturers(courses[i].lecturers)}
    `;
  }
  return output;
}

function generateStringForLecturers(lecturers) {
  let output = "";
  for (let elem of lecturers) {
    output += `${elem} `;
  }
  return output;
}

let output = `
======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: ${student.firstName} ${student.lastName}
Gender: ${generateStringForGender(student.genderCode)}
Day of birth: ${new Date(student.dayOfBirth).toDateString()}
======================================================
COURSES
======================================================
${generateStringForCourses(student.courses)}
====================================================== `;

console.log(output);
