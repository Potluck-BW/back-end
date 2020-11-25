const db = require("../data/connection");

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function getUsers(){
  return db('users')
  .select('id', 'username')
}

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "password")
    .where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

module.exports = {
  add,
  getUsers,
  find,
  findBy,
  findById
};
