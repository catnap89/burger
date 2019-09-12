// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", "id", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.insertOne("burgers", ['burger_name'], name, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) { // table, objColVals, condition, cb
      var condition = "id=" + id;
      orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    }//,
    // delete: function(condition, cb) {
    //     orm.deleteOne("burgers", condition, function(res) {
    //         cb(res);
    //     });
    // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;