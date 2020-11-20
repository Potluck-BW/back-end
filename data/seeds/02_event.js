exports.seed = async function(knex) {
  await knex("event").truncate()
  await knex("event").insert([
    { title: "1", date: "dec", description: "potluck1", users_id: 1},
    { title: "2", date: "jan", description: "potluck2", users_id: 2},
  ]);
};