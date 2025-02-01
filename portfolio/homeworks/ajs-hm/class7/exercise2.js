console.log("Exercise 2");

fetch("https://dummyjson.com/products/category/laptops")
.then(response => response.json())
.then(laptops => {
    console.log(laptops);
   
 // * All laptops in stock ordered by price descending
    console.log(laptopsSort = laptops.products.sort((a, b) => b.prices - a.prices));
     
});

// * The first grocery item
fetch("https://dummyjson.com/products/category/groceries")
.then(response => response.json())
.then(grocery => {
    console.log(grocery);
    console.log(firstGroceries = grocery.products[0])    
});
// * Index of the first "Samsung" smartphone
fetch('https://dummyjson.com/products/category/smartphones')
.then(response => response.json())
.then(smartphones => {
    console.log(smartphones);
      console.log(firstSamsung = smartphones.products.find(s => s.title.includes("Samsung")));
// * Check if there is any item from the brand "Sony"
    console.log(someSony = smartphones.products.some(s => s.title === "Sony"));
// * Average price of all IPhone smartphones
    console.log(avgPriceIphones = smartphones.products.find(s => s.title.includes("iPhone")));
    
});
// * The name of the highest rated skincare product
fetch('https://dummyjson.com/products/category/skin-care')
.then(response => response.json())
.then(skincare => {
    console.log(skincare);
    const ratingSkincare = skincare.products.sort((a, b) => b.rating - a.rating);
    console.log(skincare.products[0].title);
});
// * The average discount percentage of products with a rating above 4.5
fetch('https://dummyjson.com/products?limit=0')
.then(response => response.json())
.then(products => {
    console.log(products);
    const above45products = products.products.filter(s => s.rating > 4.5);
    for (let i = 0; i < above45products.length; i++) {
        console.log(above45products[i].discountPercentage);        
    }});
   // * Find the product with the highest price
   const maxPriceProduct = products.products.sort((a, b) => b.price - a.price);
   console.log(maxPriceProduct[0]);
// * The product with the lowest price
const minPriceProduct = products.products.sort((a, b) => a.price - b.price);
console.log(maxPriceProduct[0]);

    
    
