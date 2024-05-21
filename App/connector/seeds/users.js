/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    {
      user_name: "rowValue1",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    {
      user_name: "rowValue1",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    {
      user_name: "rowValue1",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
  ]);
};
