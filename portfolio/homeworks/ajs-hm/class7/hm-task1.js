console.log("===TASK 1 ===");

fetch("https://dummyjson.com/recipes?limit=0")
.then(response => response.json())
.then(data => { console.log(data);
   
    // All Desserts
    console.log(dessertsType = data.recipes.filter(s => s.mealType.includes("Dessert")));
    
    //  Get the names of recipes with more than 30 reviews [0].reviewCount
    console.log(more30review = data.recipes.filter(s => s.reviewCount > 30).map(s => s.name));

    //  All recipes that use Cinnamon as an ingredient [0].ingredients
    console.log(ciannamonInRecipe = data.recipes.filter(s => s.ingredients.includes("Cinnamon")));

    //  Recipes that are served as both Lunch and Dinner
    console.log(lunchDinner = data.recipes.filter(s => s.mealType.includes("Lunch")).filter(s => s.mealType.includes("Dinner")));
    
    // The ingredients needed for "Mango Salsa Chicken" dish
    const mangoIngredients = data.recipes.filter(s => s.name === "Mango Salsa Chicken")
    console.log(mangoIngredients[0].ingredients);

    // Calculate the average number of calories for all American cusine recipes [0].cuisine
    console.log(americanRecipes = data.recipes.filter(s => s.cuisine.includes("American")));

    //  The average cooking time of all pasta recipes recipes[0].tags, recipes[0].cookTimeMinutes
    console.log(timeCookPasta = data.recipes.filter(s => s.tags.some(tag => tag.toLowerCase().includes("pasta"))));
    const totalCookingTime = timeCookPasta.reduce((sum, recipe) => sum + recipe.cookTimeMinutes, 0);
    console.log(avgTootalCookingTime = totalCookingTime / timeCookPasta.length);

    //  Find the recipe with the lowest number of reviews recipes[0].reviewCount
    const lowRatingRecipe = data.recipes.sort((a, b) => a.reviewCount - b.reviewCount);
    console.log(`${lowRatingRecipe[0].name} ${lowRatingRecipe[0].reviewCount}`);
});

