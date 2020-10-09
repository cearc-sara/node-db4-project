
exports.seed = function(knex) {
 const ingredient = [
   {
     ingredient_name: "water" // id: 1
   },
   {
    ingredient_name: "beans" // id: 2
  },
  {
    ingredient_name: "salt" // id: 3
  },
  {
    ingredient_name: "flat iron steak" // id: 4
  },
  {
    ingredient_name: "seasonings" // id: 5
  },
  {
    ingredient_name: "cream soda" // id: 6
  },
  {
    ingredient_name: "carmel sauce" // id: 7
  },
  {
    ingredient_name: "whipped cream" // id: 8
  },
  {
    ingredient_name: "skewers" // id: 9
  },
  {
    ingredient_name: "air fryer" // id: 10
  }
 ]
 return knex("ingredient").insert(ingredient)
};
