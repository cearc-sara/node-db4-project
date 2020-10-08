
exports.seed = function(knex) {
  const ingredients_list =[
    {
      instructions_id: 1,
      ingredient_id: 1,
      amount: "3 cups"
    },
    {
      instructions_id: 2,
      ingredient_id: 2,
      amount: "3 cups"
    }
  ]
  return knex("ingredients_list").insert(ingredients_list)
};
