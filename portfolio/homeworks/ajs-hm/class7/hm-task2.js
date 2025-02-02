console.log("===TASK 2====");

fetch("https://dummyjson.com/carts?limit=0")
.then(response => response.json())
.then(data => { console.log(data);

console.log("All product titles in all carts");
console.log(titleCarts = data.carts.flatMap(s => s.products.map(s => s.title)));

console.log("The total quantity of all products purchased carts[0].totalQuantity");
console.log(totalQuantityProducts = data.carts.reduce((sum, cart) => sum + cart.totalQuantity, 0));

console.log("heck if there is any cart with a total value above $100,000 carts[0].products[0].price");
console.log(valueProductsInCarts = data.carts.filter(s => s.products.filter(s => s.price > 100000.00)));

console.log("The total revenue from all carts (sum of all discountedTotal values)  carts[0].discountedTotal");
console.log(totalDiscountedInCards = data.carts.reduce((sum, cart) => sum + cart.discountedTotal, 0));

console.log("The cart with the highest total value");
const highestValueCarts = data.carts.sort((a, b) => b.total - a.total);
console.log(highestValueCarts);
console.log(highestValueCarts[0]);

console.log("Find all products with a discount greater than 15% carts[0].products[0].discountPercentage");
console.log(discountProductsInCarts = data.carts.flatMap(s => s.products.filter(s => s.discountPercentage > 15.0)));

console.log("The user ID of the cart with the highest total quantity carts[0].totalQuantity");
console.log(userHighestTotalQuantity = data.carts.sort((a, b) => b.totalQuantity - a.totalQuantity));
console.log(userHighestTotalQuantity[0].id);

console.log("The most expensive product in all carts {(before discount) [carts[0].products[0].total / carts[0].products[0].quantity]}");
const expensiveProducts = data.carts.flatMap(s => 
    s.products.map(s => ({
        title: s.title,
        pricePerUnit: s.total / s.quantity})));
        
console.log(expensiveProducts);
const maxExpensiveProduct = expensiveProducts.sort((a, b) => b.pricePerUnit - a.pricePerUnit);
console.log(`${maxExpensiveProduct[0].title} ${maxExpensiveProduct[0].pricePerUnit}`);

console.log("The average discounted total per cart    carts[0].discountedTotal");
console.log(avgTotaldiscounted = data.carts.flatMap(s => s.products.map(s => s.discountedTotal)));
console.log(`${totalDiscountedInCards/avgTotaldiscounted.length}`);

console.log("The top 3 different most expensive products after discount {carts[0].products[0].discountedTotal / carts[0].products[0].quantity]}");
const expensiveProductCurrent = data.carts.flatMap(s =>
    s.products.map(s => ({
        title: s.title,
        pricePerUnit: s.discountedTotal / s.quantity })));
console.log(expensiveProductCurrent);
        
const max3expensiveProducts = expensiveProductCurrent.sort((a, b) => b.pricePerUnit - a.pricePerUnit);

const uniqueProducts = [];
const seenTitles = new Set();

for (const product of max3expensiveProducts) {
  if (!seenTitles.has(product.title)) {
    uniqueProducts.push(product);
    seenTitles.add(product.title);
  }
}

for (let i = 0; i < 3 && i < uniqueProducts.length; i++) {
  console.log(`${uniqueProducts[i].title} - $${uniqueProducts[i].pricePerUnit.toFixed(2)}`);
}

});
