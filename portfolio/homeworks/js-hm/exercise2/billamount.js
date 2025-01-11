let count = 0;

// Function to add expense
function collect() {
    ++count;
    let description = document.getElementById("description").value;
    let amountValue = document.getElementById("amount").value;
    let option = document.getElementsByTagName("option");
    let optionValue;
    for (let i = 0; i < option.length; i++) {
        if (option[i].selected) {
            optionValue = option[i].value;
        } 
    }

    if (description != "") {
        let row = document.createElement("tr");
        let t = document.getElementById("addTo");
        t.appendChild(row);

        row.innerHTML = "<td >" + description + "</td>" +
                        "<td class='sumOff'>" + amountValue + "</td>" +
                        "<td>" + optionValue + "</td>" +
                        "<td><button onclick='confirm1(this)'>Confirm</button><button onclick='revert1(this)'>Remove</button></td>";
        update_sum();
    }
}

// Function to update total sum
function update_sum() {
    let cellPrice = document.getElementsByClassName("sumOff");
    let sum = 0;
    for (let i = 0; i < cellPrice.length; i++) {
        sum += parseInt(cellPrice[i].innerHTML);
    }
    let fullSum = document.getElementById("middle");
    fullSum.innerHTML = sum;
}

// Function to confirm an expense (change row color and disable buttons)
function confirm1(e) {
    e.parentNode.parentNode.style.backgroundColor = "lightgreen";
    e.disabled = true;
    e.nextElementSibling.disabled = true;
}

// Function to revert an expense (move to history list and remove from table)
function revert1(e) {
    let row = e.parentNode.parentNode;
    let createLi = document.createElement("li");
    let listRem1 = document.getElementById("listRem");
    let descript = row.children[0].textContent;
    createLi.innerHTML = row.children[1].innerHTML + "" + descript;
    listRem1.appendChild(createLi);
    row.parentNode.removeChild(row);
    update_sum();
}
