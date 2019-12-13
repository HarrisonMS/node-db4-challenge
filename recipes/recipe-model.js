const db = require("../data/db-config")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};

function getRecipes() {
    return db("recipes").then((recipes) => {
        console.log(recipes)
    })
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredients")
        .select("ingredients.name")
        .where({ recipe_id })
        .join("ingredients", "ingredients.id", "recipe.ingredients_id")
}

function getInstructions(recipe_id) {
    return db
        .select("steps_number")
        .from("recipes")
        .join("steps_number", "recipes.id", "steps_number.recipes_id")
        .where("recipes_id", "=", recipe_id)

}