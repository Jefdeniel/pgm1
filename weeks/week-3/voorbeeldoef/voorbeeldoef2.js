const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false

//  Je kan gebruik maken van Object.keys(objectName) om de sleutels van een object terug te krijgen.

/* method 1

export const isEqual = (firstObject; secondObject) => {
  const firstObject = Object.keys(firstObject);
  const secondObject = Object.keys(secondObject);

  if (firstObject.length !== secondObject.length) {
    return false; 
  }
  for (const prop in firstObject) {
    if (firstObject.hasOwnProperty(prop) && (firstObject[prop] !== secondObject[prop])) {
      return false;
  }
}
return true;
}
*/

const isEqual = (firstObj, secondObj) => {
  return Object.keys(firstObj).every((key) => firstObj[key] === secondObj[key]);
};
