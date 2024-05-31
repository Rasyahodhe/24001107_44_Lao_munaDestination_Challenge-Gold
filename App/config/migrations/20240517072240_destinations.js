/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("destinations", (table) => {
    table.increments("destination_id");
    table.string("destination_name").notNullable();
    table.string("location").notNullable();
    table.string("facilities").notNullable();
    table.string("type").notNullable();
    table.string("describe").notNullable();
    table.text("explained").notNullable();
    table.string("img_src").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("destinations");
};
