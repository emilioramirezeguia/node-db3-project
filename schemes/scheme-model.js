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

function findById(id) {
  return db("schemes").where({ id }).first();
}

// // Another way of finding by id
// function findById(id) {
//   return db.select("*").from("schemes").where({ id: id }).first();
// }

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

// // Another way of finding steps by scheme id
// function findSteps(id) {
//   return db
//     .select(
//       "steps.id",
//       "schemes.scheme_name",
//       "steps.step_number",
//       "steps.instructions"
//     )
//     .from("steps")
//     .join("schemes", "steps.scheme_id", "=", "schemes.id")

//     .where({ "schemes.id": id })
//     .orderBy("steps.step_number");
// }

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then((schemeID) => {
      return findById(schemeID);
    });
}

function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id })
    .then((count) => {
      return findById(id);
    });
}

function remove() {
  return;
}
