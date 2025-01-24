const dataUrl = "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json";
const getDataBtn = document.querySelector("#getData");
const academyParagraph = document.querySelector("#academy-paragraph");
const studentContainer = document.querySelector("#student-container");

getDataBtn.addEventListener("click", function () {
    fetch(dataUrl)
        .then(function (response) {
            return response.json(); // Directly return the parsed JSON
        })
        .then(function (studentData) {
            console.log(studentData);
            academyParagraph.textContent = studentData.academy;
            generateStudentList(studentData.students); // Pass `students` directly to the function
        })
        .catch(function (error) {
            console.log("ERROR: ", error);
        });
});

function generateStudentList(studentArray) {
    studentContainer.innerHTML = ""; // Clear existing content
    const ol = document.createElement("ol"); // Create an ordered list
    for (const item of studentArray) {
        const li = document.createElement("li");
        li.textContent = item; // Set the text content to the item itself
        ol.appendChild(li);
    }
    studentContainer.appendChild(ol); // Append the list to the container
}