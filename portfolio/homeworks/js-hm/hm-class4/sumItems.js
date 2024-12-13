let arrayNumbers = [];
for (let i = 0; i < 5; i++) {
  let addToArrayNumbers = parseInt(prompt("Enter a number:"));
  arrayNumbers.push(addToArrayNumbers);
}
let sumArray = 0;
for (let i = 0; i < 5; i++) {
  sumArray = sumArray + arrayNumbers[i];
}
console.log(`The sum of array numbers is ${sumArray}`);
