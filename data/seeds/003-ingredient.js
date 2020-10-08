
exports.seed = function(knex) {
 const ingredient = [
   {
     ingredient_name: "water"
   },
   {
    ingredient_name: "beans"
  },
  {
    ingredient_name: "salt"
  }
 ]
 return knex("ingredient").insert(ingredient)
};
