console.log("===TASK 1 ===");

fetch("https://dummyjson.com/recipes?limit=0")
.then(response => response.json())
.then(data => { console.log(data);
   
    console.log("All Desserts");
    console.log(dessertsType = data.recipes.filter(s => s.mealType.includes("Dessert")));
    
    console.log("Get the names of recipes with more than 30 reviews [0].reviewCount");
    console.log(more30review = data.recipes.filter(s => s.reviewCount > 30).map(s => s.name));

    console.log("All recipes that use Cinnamon as an ingredient [0].ingredients");
    console.log(ciannamonInRecipe = data.recipes.filter(s => s.ingredients.includes("Cinnamon")));

    console.log("Recipes that are served as both Lunch and Dinner");
    console.log(lunchDinner = data.recipes.filter(s => s.mealType.includes("Lunch")).filter(s => s.mealType.includes("Dinner")));
    
    console.log("The ingredients needed for 'Mango Salsa Chicken' dish");
    const mangoIngredients = data.recipes.filter(s => s.name === "Mango Salsa Chicken")
    console.log(mangoIngredients[0].ingredients);

    console.log("Calculate the average number of calories for all American cusine recipes [0].cuisine");
    console.log(americanRecipes = data.recipes.filter(s => s.cuisine.includes("American")));

    console.log("The average cooking time of all pasta recipes recipes[0].tags, recipes[0].cookTimeMinutes");
    console.log(timeCookPasta = data.recipes.filter(s => s.tags.some(tag => tag.toLowerCase().includes("pasta"))));
    const totalCookingTime = timeCookPasta.reduce((sum, recipe) => sum + recipe.cookTimeMinutes, 0);
    console.log(avgTootalCookingTime = totalCookingTime / timeCookPasta.length);

    console.log("Find the recipe with the lowest number of reviews recipes[0].reviewCount");
    const lowRatingRecipe = data.recipes.sort((a, b) => a.reviewCount - b.reviewCount);
    console.log(`${lowRatingRecipe[0].name} ${lowRatingRecipe[0].reviewCount}`);
});

