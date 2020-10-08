
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl => {
      tbl.increments()
      tbl.string("name")
      .notNullable()
      .unique()
      .index()
  })
  .createTable("instructions", tbl => {
      tbl.increments()
      tbl.string("instruction_name")
      .notNullable()
      tbl.integer("recipe_id")
      .unsigned()
      .references("recipes.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
  })
  .createTable("ingredient", tbl => {
      tbl.increments()
      tbl.string("ingredient_name")
      .notNullable()
      .index()
  })
  .createTable("ingredients_list", tbl => {
      tbl.increments()
      tbl.float("amount")
      tbl.integer("ingredient_id")
      .unsigned()
      .references("ingredient.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
      tbl.integer("instructions_id")
      .unsigned()
      .references("instructions.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("ingredients_list")
  .dropTableIfExists("ingredient")
  .dropTableIfExists("instructions")
  .dropTableIfExists("recipes")
};
