const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  // findSteps,
  add,
  // addStep,
  update
};

function find() {
  return db('schemes');
};

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
};

// function findSteps() {
//   return db('schemes')
//   .where({steps})
// }

function add(schemeData) {
  return db('schemes')
  .insert(schemeData)
};

// function addStep(id, stepData) {
//   return db('steps')
//     .where({id})
//   .insert(stepData)
// }

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes)
}