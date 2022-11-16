/* ARRAYS PART 2 */

const os = ["macOS", "Windows", "Linux"];
const osString = os.join(" | ");
console.log(osString);

// Reverse functions => return a reversed array of the original

const arr1 = ["one", "two", "three"];
const arr1Reversed = arr1.reverse();
console.log(arr1Reversed);

// Sort function

const arr2 = ["Jan", "dec", "jun", "aug"];
arr2.sort();
console.log(arr2);

const arr3 = [1, 3, 4, 1000, 21];
arr3.sort();
console.log(arr3);

arr3.sort((a, b) => {
  return -1; // -1 is eigenlijk het omgekeerde doen, 1 is dan weer normaal, wel cool
});
console.log(arr3);

// arrr.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
//   if (a == b) return 0;
// });
// console.log(arrr);

const arr4 = ["philippe", "jef", "stefaan", "thoms"];
arr4.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  if (a == b) return 0;
});
console.log(arr4);

// Find first value that contains search string
const arr5 = [
  "pollepel",
  "lepolo",
  "pollo",
  "pols",
  "polshoogte",
  "ik",
  "jij",
  "samen",
];

const searchStr = "hoog";

const findedValue = arr5.find((elem) => {
  return elem.indexOf(searchStr) !== -1;
});
console.log(findedValue);

// Filter function => return all occurences that contains the search string

const findedValues = arr5.find((elem) => {
  return elem.indexOf(searchStr) !== -1;
});
console.log(findedValue);

const students = [
  {
    id: 135871,
    fullname: "Mia De Pauw",
    earnings: 3000,
  },
  {
    id: 169,
    fullname: "Bart het paard",
    earnings: 999,
  },
  {
    id: 2000,
    fullname: "lol lollll olll",
    earnings: 22,
  },
];

students.sort((student1, student2) => {
  if (student1.fullname > student2.fullname) return 1;
  if (student1.fullname < student2.fullname) return -1;
  return 0;
});
console.log(students);

students.sort((student1, student2) => {
  if (student1.earnings > student2.earnings) return 1;
  if (student1.earnings < student2.earnings) return -1;
  return 0;
});
console.log(students);

const filteredStudents = students.filter((student) => {
  return student.earnings > 30;
});
console.log(filteredStudents);

const words = ["HTML", "css", "javascript", "bootstrap", "php"];

const filteredWords = words.filter((woordje) => woordje.length > 4);
console.log(filteredWords);
