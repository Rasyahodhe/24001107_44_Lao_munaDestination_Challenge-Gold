/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      name: "Rahim Hans",
      email: "rahim12ingkar@gmail.com",
      phone: "085307653425",
      username: "rahim_12",
      password: "rahim1212",
      confirm_password: "rahim1212",
    },
    {
      name: "Indra Putra",
      email: "indraputra@gmail.com",
      phone: "085264738654",
      username: "indra13p",
      password: "indra17",
      confirm_password: "indra17",
    },
    {
      name: "Indah Putri",
      email: "putriindahwangsa@gmail.com",
      phone: "084398710265",
      username: "indah02put",
      password: "indah123",
      confirm_password: "indah123",
    },
    {
      name: "Rio Ahmad Pamda ",
      email: "ahmadpamda@gmail.com",
      phone: "088728465832",
      username: "rioPahmad12",
      password: "rioA12pam",
      confirm_password: "rioA12pam",
    },
    {
      name: "Shinta Amalia Widya",
      email: "amaliashintawid19@gmail.com",
      phone: "086546356271",
      username: "widya0919",
      password: "widya0919",
      confirm_password: "widya0919",
    },
  ]);
};
