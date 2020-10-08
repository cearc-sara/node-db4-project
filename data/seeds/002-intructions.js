
exports.seed = function(knex) {
  const instructions = [
    {
      recipe_id: 1,
      instruction_name: "Boil water"
    },
    {
      recipe_id: 1,
      instruction_name: "Pour beans in pot"
    }
  ]
  return knex("instructions").insert(instructions)
}
