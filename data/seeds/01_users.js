const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    {username: "Don", password:bcrypt.hashSync("abc", 10)},
    {username: "Joe", password:bcrypt.hashSync("abc1", 10)},
  ]);
};