const db = require("../data/db-config")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(id){
    return db("ingredient")
    .join("ingredients_list", "ingredient.id", "=", "ingredients_list.ingredient_id")
    .join("instructions", "instructions.id", "=", "ingredients_list.instructions_id")
    .join("recipes", "recipes.id", "=", "instructions.recipe_id")
    .select("ingredient.ingredient_name", "ingredients_list.amount", "recipes.name")
    .where({"recipes.id": id})
}
// select ingredient.ingredient_name, ingredients_list.amount
// from ingredient
// join ingredients_list on ingredient.id = ingredients_list.ingredient_id
// join instructions on instructions.id = ingredients_list.instructions_id
// join recipes on recipes.id = instructions.recipe_id
// where recipes.id = 1;


function getInstructions(id){
    return db("instructions")
    .join("recipes", "recipes.id", "=", "instructions.recipe_id")
    .select("instructions.instruction_name", "recipes.name")
    .where("recipes.id", id)
}



// select recipes.name, 
// instructions.instruction_name, 
// ingredients_list.amount, 
// ingredient.ingredient_name
// from recipes
// join instructions on instructions.recipe_id = recipes.id
// join ingredients_list on instructions.id = ingredients_list.instructions_id 
// join ingredient on ingredients_list.ingredient_id = ingredient.id
// where recipes.id = 2;