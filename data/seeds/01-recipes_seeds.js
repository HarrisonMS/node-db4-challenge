
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, name: "recipe1" },
        { id: 2, name: "recipe2" },
        { id: 3, name: "recipe3" },
        { id: 4, name: "recipe4" },
        { id: 5, name: "recipe5" },
        { id: 6, name: "recipe6" },
        { id: 7, name: "recipe7" },
        { id: 8, name: "recipe8" },
        { id: 9, name: "recipe9" },
        { id: 10, name: "recipe10" }
      ]);
    });
};

