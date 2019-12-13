
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { id: 1, step_number: 1, instructions:"instructions for recipe step1", recipes_id: 1 },
        { id: 2, step_number: 2, instructions:"instructions for recipe step2", recipes_id: 2},
        { id: 3, step_number: 3, instructions:"instructions for recipe step3", recipes_id: 3 },
        { id: 4, step_number: 4, instructions:"instructions for recipe step4", recipes_id: 4 },
        { id: 5, step_number: 5, instructions:"instructions for recipe step5", recipes_id: 5 },
        { id: 6, step_number: 6, instructions:"instructions for recipe step6", recipes_id: 6 },
        { id: 7, step_number: 7, instructions:"instructions for recipe step7", recipes_id: 7},
        { id: 8, step_number: 8, instructions:"instructions for recipe step8", recipes_id: 8 },
        { id: 9, step_number: 9, instructions:"instructions for recipe step9", recipes_id: 9},
        { id: 10, step_number: 10, instructions:"instructions for recipe step10", recipes_id: 10 }
      ]);
    });
};
