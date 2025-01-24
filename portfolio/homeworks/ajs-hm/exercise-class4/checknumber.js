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

  checkisPositive(num);
}

const checkisPositive = (num) => {
  if (num > 0) return  console.log(`This number ${num}is positive.`);;
  return console.log(`This number ${num} is negative.`);
};
