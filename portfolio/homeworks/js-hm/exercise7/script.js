let age; 
let inputNull = prompt("press enter");
let arrayFalse = [ 1, "Robi", 0 , -3, "", "Ada", age, 10 * "Ten", 9, inputNull ];
let i = 0;
while(i < arrayFalse.length){
  cheakItem = arrayFalse[i];
  if(Boolean(cheakItem) === false){
      arrayFalse.splice(i,1);
      i++;
  } else if (isNaN(Boolean(cheakItem))){
      arrayFalse.splice(i,1);
      i++;
  }else {
      i++;
  }
}
console.log(arrayFalse);
