const express = require("express")

const Recipes = require("./recipesDB")

const router = express.Router()

router.get("/", (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
        res.status(200).json({ recipes: recipe })
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.get("/:id/shoppingList", (req, res) => {
    const {id} = req.params
    Recipes.getShoppingList(id)
    .then(recipe => {
        res.status(200).json({ ingredients: recipe })
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.get("/:id/instructions", (req, res) => {
    const {id} = req.params
    Recipes.getInstructions(id)
    .then(instructions => {
        if(instructions.length){
            res.status(200).json({ instructions: instructions })
        } else {
            res.status(404).json({ message: "could not find instructions for given recipe" })
        }
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})
module.exports = router