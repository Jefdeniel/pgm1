const year = 2013
let isLeapYear = false


if (year % 4 === 0 ) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

console.log(`the year ${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}`)

if (year % 4 === 0) &&