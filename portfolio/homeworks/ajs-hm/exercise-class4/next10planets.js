const basePlanetsUrl = "https://swapi.py4e.com/api/planets/?format=json";
      let currentPage = 1;
      
      const getPlanetsBtn = document.getElementById("get-planets-btn");
      const navigationButtons = document.getElementById("navigation-buttons");
      
      // Constructor function for Planet
      function Planet(name, population, climate, gravity) {
        this.name = name;
        this.population = population;
        this.climate = climate;
        this.gravity = gravity;
      }
      
      // Function to fetch and display planets based on the page
      function fetchPlanets(page) {
        const planetsUrl = `${basePlanetsUrl}&page=${page}`;
      
        fetch(planetsUrl)
          .then((response) => response.json())
          .then((data) => {
            // Clear previous data from the table
            const tableBody = document.querySelector("#planets tbody");
            tableBody.innerHTML = "";

             // Populate table with planets
             data.results.forEach((planetData) => {
                const planet = new Planet(
                  planetData.name,
                  planetData.population,
                  planetData.climate,
                  planetData.gravity
                );
                sendToPage(planet);
              });
        
              // Update navigation buttons
              updateNavigationButtons(page, data.next, data.previous);
            })
            .catch((error) => {
              console.error("ERROR:", error);
            });
        }
          
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
      
      // Function to update navigation buttons
      function updateNavigationButtons(page, hasNext, hasPrevious) {
        navigationButtons.innerHTML = "";
      
        if (hasPrevious) {
          const prevButton = document.createElement("button");
          prevButton.textContent = "PREVIOUS 10";
          prevButton.addEventListener("click", () => {
            currentPage--;
            fetchPlanets(currentPage);
          });
          navigationButtons.appendChild(prevButton);
        }
      
        if (hasNext) {
          const nextButton = document.createElement("button");
          nextButton.textContent = "NEXT 10";
          nextButton.addEventListener("click", () => {
            currentPage++;
            fetchPlanets(currentPage);
          });
          navigationButtons.appendChild(nextButton);
        }
      }
            
    
      // Event listener for the GET planets button
      getPlanetsBtn.addEventListener("click", () => {
        fetchPlanets(currentPage);
      });
      