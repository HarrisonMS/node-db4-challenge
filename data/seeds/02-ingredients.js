
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: "instructions1" },
        { id: 2, name: "instructions2" },
        { id: 3, name: "instructions3" },
        { id: 4, name: "instructions4" },
        { id: 5, name: "instructions5" },
        { id: 6, name: "instructions6" },
        { id: 7, name: "instructions7" },
        { id: 8, name: "instructions8" },
        { id: 9, name: "instructions9" },
        { id: 10, name: "instructions10" }
      ]);
    });
};
