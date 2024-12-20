function phoneBook(fName = '', lName = '', phoneNumber = '') {
    this.fName = fName;
    this.lName = lName;
    this.phoneNumber = phoneNumber;
    this.displayPhoneBook = function () {
        console.log(`${this.fName} ${this.lName} ${this.phoneNumber}`);
    };
}

// Loop to get user input and display phone book entries
for (let i = 0; i < 3; i++) {
    let fName = prompt('Please enter first name');
    let lName = prompt('Please enter last name');
    let phoneNumber = prompt('Please enter phone number');
    
    let book = new phoneBook(fName, lName, phoneNumber);
    book.displayPhoneBook();
}

// result
/*
Robert Ristovski 070358459
Todorka Ristovska 071237225
Sara Ristovska 075341441
*/