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

function findSteps(id) {
  return db("steps")
    .select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions')
    .from('schemes as s')
    .join('steps as st', 'st.scheme_id', '=', 's.id')
    .where({ scheme_id: id })
    .orderBy("st.step_number");
}

// .where({ scheme_id: id })

// function findSteps(id) {
//   return db("steps")
//     .select("s.id", "s.scheme_name", "st.step_number", "st.instructions")
//     .from("schemes as s")
//     .join("steps as st")
//     .where("s.id", id);
// }

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
