const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db.select("*").from("schemes");
}

// function findById(id) {
//   return db("schemes").where({ id }).first();
// }
function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps() {
  return;
}

function add() {
  return;
}

function update() {
  return;
}

function remove() {
  return;
}
