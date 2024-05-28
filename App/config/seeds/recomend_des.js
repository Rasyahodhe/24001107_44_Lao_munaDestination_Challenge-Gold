/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recomend_des").del();
  await knex("recomend_des").insert([
    { destination_id: 1, user_id: 1 },
    { destination_id: 2, user_id: 3 },
    { destination_id: 3, user_id: 2 },
    { destination_id: 1, user_id: 4 },
  ]);
};
