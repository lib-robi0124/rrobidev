let btn = document.getElementById("save");
function Phonebook(fname, lname, phone) {
  this.name = `${fname} ${lname}`;
  this.phone = phone;
}
let numbers = [];

btn.addEventListener("click", function () {
  let firstName = document.getElementById("firstName").value;
  // validate isString and is not a number
  if ((typeof firstName === "string") !== isNaN(Number(firstName))) {
    alert("Please enter a valid First Name containing only alphabet.");
    return;
  }
  let lastName = document.getElementById("lastName").value;
  // validate isString and is not a number
  if ((typeof lastName === "string") !== isNaN(Number(lastName))) {
    alert("Please enter a valid Last Name containing only alphabet.");
    return;
  }
  let phoneNumber = document.getElementById("phoneNumber").value;
  // Validate the phone number
  if (!/^\d+$/.test(phoneNumber)) {
    alert("Please enter a valid phone number containing only digits.");
    return;
  }
  let user = new Phonebook(firstName, lastName, phoneNumber);
  let table = document.getElementById("phoneBook");
  numbers.push(user);
  table.lastElementChild.innerHTML = "";
  for (let item of numbers) {
    let row = document.createElement("tr");
    let colName = document.createElement("td");
    let colPhone = document.createElement("td");
    colName.innerText = item.name;
    colPhone.innerText = item.phone;
    row.appendChild(colName);
    row.appendChild(colPhone);
    table.lastElementChild.appendChild(row);
  }
});
// Reset button functionality
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("phoneNumber").value = "";
});
