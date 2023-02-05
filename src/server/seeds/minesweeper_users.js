/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, first_name: 'Alex', last_name: 'Moran', username: 'moranalex'},
    {id: 2, first_name: 'George', last_name: 'Costanza', username: 'gconstanza'},
    {id: 3, first_name: 'Jerry', last_name: 'Seinfeld', username: 'jseinfeld'}
  ]);
};
