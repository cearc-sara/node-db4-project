
exports.seed = function(knex) {
  const recipes = [
    {
      name: "Devon's Famous Chili"
    },
    {
      name: "Alex's famous Jerky"
    },
    {
      name: "Sara's famous Butter Beer"
    }
  ]
  return knex("recipes").insert(recipes)
};
