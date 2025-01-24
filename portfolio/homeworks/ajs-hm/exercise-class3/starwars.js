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
    const tableBody = document.querySelector('#persons tbody');
    const row = document.createElement('tr');
  
row.innerHTML= `
         <td>${personData.height}</td>
         <td>${personData.mass}</td>
         <td>${personData.hair_color}</td>
         <td>${personData.eye_color}</td> 
    `;
    tableBody.appendChild(row);
   
}