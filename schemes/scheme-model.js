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

function findSteps(id) {
  return db("steps")
    .join("schemes", "steps.scheme_id", "=", "schemes.id")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where({ "schemes.id": id })
    .orderBy("steps.step_number");
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
