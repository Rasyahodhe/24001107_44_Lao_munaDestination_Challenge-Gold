/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("destinations").del();
  await knex("destinations").insert([
    {
      destination_name: "Pantai Meleura",
      location: "Lohia",
      facilities: "Gazebo,kantin,boat",
      describe: "asasd",
      explained: "asdasdasd",
      img_src: "asdasd",
    },
    {
      destination_name: "rowValue1",
      location: "asdasd",
      facilities: "arae parkir",
      describe: "leal",
      explained: "asasd",
      img_src: "asdasd",
    },
  ]);
};
