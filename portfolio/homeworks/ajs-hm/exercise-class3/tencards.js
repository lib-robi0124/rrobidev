const cardsUrl = "https://dummyjson.com/products/?limit=10";
const getCardsBtn = document.getElementById("get-cards-btn");
const cardsContainer = document.getElementById("cards-container");

function Cards(title, image, description) {
    this.title = title;
    this.image = image;
    this.description = description;
}

getCardsBtn.addEventListener("click", function () {
    // Clear previous cards
    cardsContainer.innerHTML = "";

    fetch(cardsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (cardsData) {
            console.log(cardsData);
            for (let i = 0; i < cardsData.products.length; i++) {
                const title = cardsData.products[i].title;
                const description = cardsData.products[i].description;
                const image = cardsData.products[i].thumbnail;
                const productCard = new Cards(title, image, description);
                sendToPage(productCard);
            }
        })
        .catch(function (error) {
            console.log("ERROR: ", error);
        });
});

function sendToPage(productCard) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "17rem";

    card.innerHTML = `
        <img src="${productCard.image}" class="card-img-top" alt="${productCard.title}">
        <div class="card-body">
            <h5 class="card-title">${productCard.title}</h5>
            <p class="card-text">${productCard.description}</p>
        </div>
    `;

    cardsContainer.appendChild(card);
}
