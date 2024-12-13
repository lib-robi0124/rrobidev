let arrayNumbers = [];
for (let i = 0; i < 5; i++) {
  let addToArrayNumbers = parseInt(prompt("Enter a number:"));
  arrayNumbers.push(addToArrayNumbers);
}
let sumArray = 0;
for (let i = 0; i < 5; i++) {
  sumArray = sumArray + arrayNumbers[i];
}
alert(`Your array for sum is ${arrayNumbers}`);

alert(`The sum of array numbers is ${sumArray}`);
