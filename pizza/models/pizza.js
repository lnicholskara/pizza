var orm = require("../config/orm.js");

var pizza = {
  selectAll: function(cb) {
    orm.selectAll("pizza", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("pizza", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("pizza", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = pizza;