const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(schemesid) {
  return db("steps")
    .join("steps.scheme_id", "schemes.id")
    .select(
      "steps.id",
      "steps.instructions",
      "schemes.id as schemesid",
      "schemes.scheme_name"
    )
    .where({ scheme_id: schemes.id });
}

function add(schemeData) {
  return db("schemes").insert(schemeData);
}

function addStep(stepData, id) {
  return (
    db("steps")
      // .where({id})
      .insert(stepData, id)
  );
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del();
}
