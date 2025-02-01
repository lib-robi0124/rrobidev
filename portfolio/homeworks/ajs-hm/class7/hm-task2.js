console.log("===TASK 2====");

fetch("https://dummyjson.com/carts?limit=0")
.then(response => response.json())
.then(data => { console.log(data);

// All product titles in all carts
console.log(titleCarts = data.carts.flatMap(s => s.products.map(s => s.title)));

// The total quantity of all products purchased carts[0].totalQuantity
console.log(totalQuantityProducts = data.carts.reduce((sum, cart) => sum + cart.totalQuantity, 0));

// Check if there is any cart with a total value above $100,000 carts[0].products[0].price
console.log(valueProductsInCarts = data.carts.filter(s => s.products.filter(s => s.price > 100000.00)));

// The total revenue from all carts (sum of all discountedTotal values)  carts[0].discountedTotal
console.log(totalDiscountedInCards = data.carts.reduce((sum, cart) => sum + cart.discountedTotal, 0));

// The cart with the highest total value
const highestValueCarts = data.carts.sort((a, b) => b.total - a.total);
console.log(highestValueCarts);
console.log(highestValueCarts[0]);

// Find all products with a discount greater than 15% carts[0].products[0].discountPercentage
console.log(discountProductsInCarts = data.carts.flatMap(s => s.products.filter(s => s.discountPercentage > 15.0)));

// The user ID of the cart with the highest total quantity

// * The most expensive product in all carts (before discount)
// * The average discounted total per cart
// * The top 3 most expensive products after discount

});
