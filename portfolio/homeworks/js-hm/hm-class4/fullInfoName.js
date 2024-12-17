let arrayFirstName = ["Robert", "Sara" , "Toska"];
let arraySecondName = ["Ristovski", "Ada", "Giceva"];
let fisrtSecondName = [];
let firstname;
let secondName;
for ( i=0; i < arrayFirstName.length; i++) {
  firstname = arrayFirstName[i];
  fisrtSecondName.push(firstname);
  secondName = arraySecondName[i];
  fisrtSecondName.push(secondName);
 }
console.log(fisrtSecondName);
let fullInfoNames = [];
let item=0;
let itemFullInfoName;
let j;
for ( i=1; i < fisrtSecondName.length; i++) {
  j=i-1
  if (j % 2 == 0){
  itemFullInfoName = fisrtSecondName[j] + " " + fisrtSecondName[i];
 item++;
console.log(`${item}. ${itemFullInfoName}`);
}
}