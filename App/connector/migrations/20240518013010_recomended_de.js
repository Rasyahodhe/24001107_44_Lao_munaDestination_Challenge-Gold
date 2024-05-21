/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("recomend_des", (table) => {
    table.increments("recomended_id");
    table.integer("user_id").references("user_id").inTable("users");
    table
      .integer("destination_id")
      .references("destination_id")
      .inTable("destinations");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("recomend_des");
};
