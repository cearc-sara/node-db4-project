
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
    },
    {
      instructions_id: 3,
      ingredient_id: 4,
      amount: "12 oz"
    },
    {
      instructions_id: 4,
      ingredient_id: 5,
      amount: "4 oz"
    },
    {
      instructions_id: 5,
      ingredient_id: 9,
      amount: "as many as there are slices of meat"
    },
    {
      instructions_id: 6,
      ingredient_id: 10,
      amount: "45 mins"
    },
    {
      instructions_id: 7,
      ingredient_id: 6,
      amount: "one can per cup"
    },
    {
      instructions_id: 8,
      ingredient_id: 7,
      amount: "1 tsp"
    },
    {
      instructions_id: 9,
      ingredient_id: 8,
      amount: "1/2 cup"
    },
    {
      instructions_id: 10,
      ingredient_id: 7,
      amount: "1 tsp"
    }
  ]
  return knex("ingredients_list").insert(ingredients_list)
};
