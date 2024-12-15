let numberArray = [2, 5, 1, 6, 3, 7];
let maxItem = numberArray[0];
let minItem = numberArray[0];
let sumMaxMin = 0;
      for (let i = 1; i < numberArray.length; i++) {
          if (maxItem < numberArray[i]) {
              maxItem = numberArray[i];
          }
        }
        console.log(`Biggest number in array is ${maxItem}`);
     
        for (let i = 1; i < numberArray.length; i++) {
        if (minItem > numberArray[i]) {
            minItem = numberArray[i];
         }
       }
        console.log(`Smallest number in array is ${minItem}`);
sumMaxMin = maxItem + minItem;
console.log(`Sum of Max i Min is ${sumMaxMin}`);
