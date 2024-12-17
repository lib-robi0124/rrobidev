let arrayNumbers = [];
i = 0;
while (i < 5) {
    let addToArrayNumbers = parseInt(prompt("Enter a number:"));
  if(!isNaN(addToArrayNumbers)){
   arrayNumbers.push(addToArrayNumbers);
   i++;    
  }
  else{
  alert("This is not a number, please enter a number");
  }
}
let sumArray = 0;
for (let i = 0; i < 5; i++) {
  sumArray = sumArray + arrayNumbers[i];
}
alert(`Your array for sum is ${arrayNumbers}`);

alert(`The sum of array numbers is ${sumArray}`);
