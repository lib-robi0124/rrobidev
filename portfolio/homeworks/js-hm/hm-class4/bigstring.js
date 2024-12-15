let arrayOfStrings = ["Robert", "Hello", "Qinshift", "there", "students", "play", "of", "SEDC"];
let bigString = [];

for (let i = 0; i < arrayOfStrings.length; i++) {
  if (arrayOfStrings[i] === "Hello") {
  bigString.push(arrayOfStrings[i]);
      continue;
  } else  if (arrayOfStrings[i] === "there") {
    bigString.push(arrayOfStrings[i]);
        continue;
  } else  if (arrayOfStrings[i] === "students") {
    bigString.push(arrayOfStrings[i]);
        continue;
  } else  if (arrayOfStrings[i] === "of") {
    bigString.push(arrayOfStrings[i]);
        continue;
  } else  if (arrayOfStrings[i] === "SEDC") {
    bigString.push(arrayOfStrings[i]);
        continue;
  }
} 
console.log(bigString);