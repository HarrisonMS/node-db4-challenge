const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();


// GETS /api/recipes all recipes (without detals about ingredients or steps)
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipies' });
      });
})

// GET /recipe/:id/shoppingList (a list of ingredients and quantites for a single recipe)
router.get('/:id/shoppingList', (req, res) => {

})

// GET


module.exports = router;