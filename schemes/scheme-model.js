const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add
};

function find() {
  return db('schemes');
};

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
};

function findSteps() {

}

function add(schemeData) {
  return db('schemes')
  .insert(schemeData)
};