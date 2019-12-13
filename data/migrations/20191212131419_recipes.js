
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments();

        tbl.string("name", 255)
            .notNullable() 
    })
    .createTable("ingredients", tbl => {
        tbl.increments();

        tbl.string("name", 255)
            .notNullable()
    })
    .createTable("instructions", tbl => {
        tbl.increments();
        tbl.integer("step_number").notNullable()
        tbl.string("instructions", 255).notNullable();

        tbl.integer("recipes_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
    })
    .createTable("recipe_ingredients", tbl => {
        tbl.primary(["recipe_id", "ingredient_id"]);

        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes");

        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("ingredients");
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExist('recipe_ingredients')
    .dropTableIfExist('instructions')
    .dropTableIfExist('ingredients')
    .dropTableIfExist('recipes')
};
