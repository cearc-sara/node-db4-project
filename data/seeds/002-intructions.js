
exports.seed = function(knex) {
  const instructions = [
    {
      recipe_id: 1,
      instruction_name: "Boil water" // id: 1
    },
    {
      recipe_id: 1,
      instruction_name: "Pour beans in pot" // id: 2
    },
    {
      recipe_id: 2,
      instruction_name: "cut meat into thin slices" // id: 3
    },
    {
      recipe_id: 2,
      instruction_name: "marinate slices of meat in the seasonings" // id: 4
    },
    {
      recipe_id: 2,
      instruction_name: "skewer slices of meat with skewer sticks for 1 hour" // id: 5
    },
    {
      recipe_id: 2,
      instruction_name: "put skewers in the air fryer" // id: 6
    },
    {
      recipe_id: 3,
      instruction_name: "pour cream soda into cups"// id: 7
    },
    {
      recipe_id: 3,
      instruction_name: "drizzler carmel sauce in cream soda" // id: 8
    },
    {
      recipe_id: 3,
      instruction_name: "apply whipped cream to the top of the soda" // id: 9
    },
    {
      recipe_id: 3,
      instruction_name: "drizzle carmel sauce on top of whipped cream" // id: 10
    }
  ]
  return knex("instructions").insert(instructions)
}
