const dataUrl = "https://swapi.dev/api/people/1/?format=json";
const getDataBtn = document.querySelector("#getData");
const starwarsParagraph = document.querySelector("#starwars-paragraph");


getDataBtn.addEventListener("click", function () {
    fetch(dataUrl)
        .then(function (response) {
            return response.json(); // Directly return the parsed JSON
        })
        .then(function (personData) {
            console.log(personData);
            starwarsParagraph.textContent = personData.name;
            generatePersonList(personData);
        })
        .catch(function (error) {
            console.log("ERROR: ", error);
        });
});

function generatePersonList(personData) {
    const table = document.querySelector("#persons");
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
  
    // Clear previous table data
    tableHead.innerHTML = "";
    tableBody.innerHTML = "";
  
    // Create table header row
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
      <th>Height</th>
      <th>Weight</th>
      <th>Hair Color</th>
      <th>Eye Color</th>
    `;
    tableHead.appendChild(headerRow);
  
    // Create table body row
    const bodyRow = document.createElement("tr");
    bodyRow.innerHTML = `
      <td>${personData.height}</td>
      <td>${personData.mass}</td>
      <td>${personData.hair_color}</td>
      <td>${personData.eye_color}</td>
    `;
    tableBody.appendChild(bodyRow);
  }