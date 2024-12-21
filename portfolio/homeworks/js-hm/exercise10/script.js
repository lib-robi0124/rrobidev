function Academy(academyName = '', numberOfGroups = '', numberOfClassrooms = '') {
    this.academyName = academyName;
    this.numberOfGroups = numberOfGroups;
    this.numberOfClassrooms = numberOfClassrooms;
}
function Groups(name = '') {
    this.name = name;
    this.numberOfStudents = 0;
    this.students = [];
   this.addStudent = function (student) {
        this.students.push(student);
        this.numberOfStudents = this.students.length;
}
}
function Student(fName = '', lName = '', age = '', email = '', academy = '', group = '') {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.email = email;
    this.academy = academy;
    this.group = group;
}

let academySEDC = new Academy("Qinshift", 3, 5);
let g1 = new Groups("G1");
let g2 = new Groups("G2");
let g3 = new Groups("G3");

let student1 = new Student("Robert", "Ristovski", 52, "rrobi01@yahoo.com", academySEDC.academyName, g2.name);
let student2 = new Student("Sara", "Ristovska", 20, "rsara04@gmail.com", academySEDC.academyName, g1.name);
let student3 = new Student("Todorka", "Ristovska", 35, "toska@gmail.com", academySEDC.academyName, g3.name);

// Add students to groups
g2.addStudent(student1);
g1.addStudent(student2);
g3.addStudent(student3);

// Display output
console.log("Academy Name:", academySEDC.academyName);
console.log("Student 1's Academy:", student1.academy);
console.log(student1);
console.log("Number of Students in", g2.name + ":", g2.numberOfStudents);