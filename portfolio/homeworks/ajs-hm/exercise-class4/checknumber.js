const number = -123456;

document.querySelector("button").addEventListener("click", () => {
  checkNumber(number);
});

const isNumberEven = (number) => number % 2 === 0;
const isNumberOdd = (number) => number % 2 !== 0;

function checkNumber(num) {
  const arrayDigits = [...Math.abs(num).toString()].map(Number);
  console.log(`Number of digits is: ${arrayDigits.length}`);

  console.log(`The Number ${num} is even:`, isNumberEven(num));
  console.log(`The Number ${num} is odd:`, isNumberOdd(num));

  checkPositivity(num);
}

function checkPositivity(num) {
  if (num < 0) {
    console.log("This number is negative.");
  } else if (num > 0) {
    console.log("This number is positive.");
  } else {
    console.log("This number is 0.");
  }
}