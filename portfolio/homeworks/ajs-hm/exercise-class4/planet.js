const planetsUrl = "https://swapi.py4e.com/api/planets/?page=1&format=json";
const getPlanetsBtn = document.getElementById("get-planets-btn");

// Constructor function for Planet
function Planet(name, population, climate, gravity) {
  this.name = name;
  this.population = population;
  this.climate = climate;
  this.gravity = gravity;
}

// Event listener for the button
getPlanetsBtn.addEventListener("click", function () {
  fetch(planetsUrl)
    .then((response) => response.json())
    .then((data) => {
      // Clear previous data from the table
      const tableBody = document.querySelector("#planets tbody");
      tableBody.innerHTML = "";

      // Use the array function for mapping planets
      data.results.forEach((planetData) => {
        const planet = new Planet(
          planetData.name,
          planetData.population,
          planetData.climate,
          planetData.gravity
        );
        sendToPage(planet);
      });
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
});

// Function to add a planet to the table
function sendToPage(planet) {
  const tableBody = document.querySelector("#planets tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${planet.name}</td>
    <td>${planet.population}</td>
    <td>${planet.climate}</td>
    <td>${planet.gravity}</td>
  `;
  tableBody.appendChild(row);
}
