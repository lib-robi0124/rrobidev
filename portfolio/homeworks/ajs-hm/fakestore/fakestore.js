// create button event to fetch all products
// show them in product cart
// create button ADD to Cart
// create event ADD to Cart buttonand push to array
// when you choice category item
// -- clean products , fetch by category 

//** BASE const */
const BASE_API_URL = "https://fakestoreapi.in/api/products"; //** make base url  */
let currentPage = 1; //** starting page for all products next / prev request */
let categoryProduct = []; //** Store filtered products by category */
let cart = []; //** Cart to store products that are added to the cart */

//** GET elements */
const elements = {
    productsBtn: document.getElementById("productsBtn"),
    productgrid: document.getElementById("product-grid"),
    cartBtn: document.getElementById("cartBtn"),
    loader: document.getElementById("loader"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    cartModal: document.getElementById("cartModal"),
    cartProductsGrid: document.getElementById("cartProductsGrid"),
};

//** FUNC needed */
function Productscards(image, title, price, category, id) {  //** construction func for store before show cads */
    this.image = image;
    this.title = title;
    this.price = price;
    this.category = category;
    this.id = id;
    };

    async function fetchByCategory(category) {             //** func to fetch filter categories item  */ 
        elements.loader.style.display = "block";
        try {
            const url = `${BASE_API_URL}?limit=150`;      //** Fetch all products initially */
            const response = await fetch(url);
            const data = await response.json();
            categoryProduct = data.products.filter(product => product.category === category);
            currentPage = 1;
            showProductCards(categoryProduct);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            elements.loader.style.display = "none";
        }
    };

    async function getAllProducts() {                       //** func for All Products with limit 8 */   
        elements.loader.style.display = "block";
        try {
            const url = `${BASE_API_URL}?page=${currentPage}&limit=8`;
            const response = await fetch(url);
            const data = await response.json();
            showProductCards(data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            elements.loader.style.display = "none";
        }
    };

    function showProductCards(data) {                   //** func to show product card in HTML */
        elements.productgrid.innerHTML = '';
        const productsToShow = data.slice(0, 8);        //** show by 8 and next */
        productsToShow.forEach(product => {
            const card = new Productscards(product.image, product.title, product.price, product.category, product.id);
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-3');
            productCard.innerHTML = `
                <div class="card mb-3">
                    <img src="${card.image}" class="card-img-top" alt="${card.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">Price: $${card.price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${card.id}, '${card.title}', ${card.price}, '${card.image}')">Add to Cart</button>
                    </div>
                </div>`;
            elements.productgrid.appendChild(productCard);
        });
    };

    function addToCart(id, title, price, image) {               //** Add product to cart*/ 
        cart.push({ id, title, price, image });
        categoryProduct = categoryProduct.filter(item => item.id !== id);
        showProductCards(categoryProduct);
        updateCartButton();                             
    };

    function displayCart() {                    //** Display cart products */
        elements.cartModal.style.display = 'block';
        elements.cartProductsGrid.innerHTML = '';
        cart.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'border-bottom', 'py-2');
            productCard.innerHTML = `
                <div class="d-flex align-items-center">
                    <img src="${product.image}" style="height: 50px; width: 50px; object-fit: cover; margin-right: 10px;">
                    <div>
                        <p class="m-0">${product.title}</p>
                        <p class="m-0">$${product.price}</p>
                    </div>
                    <button class="btnR btn-danger ml-3" onclick="removeFromCart(${product.id})">Remove</button>
                </div>`;
            elements.cartProductsGrid.appendChild(productCard);
        });
    };

    function removeFromCart(id) {                      //** remove button in cart products */
        cart = cart.filter(item => item.id !== id);
        updateCartButton();
        displayCart();
    };

    function updateCartButton() {                   //** update number(text) of products in cart */
        elements.cartBtn.innerText = `Cart (${cart.length})`;
    };

    function closeCart() {                      //** Purchase or close cart*/
        elements.cartModal.style.display = 'none';
    };

    function purchaseItems() {                  //** purchase items */
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert(`Thank you for your purchase of ${cart.length} items!`);
        cart = [];
        updateCartButton();
        closeCart();
    };

    //**  Event listeners for buttons */
    const categories = ['tv', 'audio', 'laptop', 'mobile', 'gaming'];
    categories.forEach(cat => {
        document.getElementById(`${cat}Btn`).addEventListener("click", () => fetchByCategory(cat));
    });

        elements.productsBtn.addEventListener("click", getAllProducts);
        elements.nextBtn.addEventListener("click", () => currentPage++ && getAllProducts());
        elements.prevBtn.addEventListener("click", () => { if (currentPage > 1) currentPage-- && getAllProducts(); });
        elements.cartBtn.addEventListener("click", displayCart);
