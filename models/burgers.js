const orm = require("../config/orm.js");

const burgers = {
all: function(table, cb) {
    orm.all(table, function(res) {
    cb(res);
    });
},

create: function(table, cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
    cb(res);
    });
},

update: function(table, objColVals, condition, cb) {
    orm.update(table, objColVals, condition, function(res) {
    cb(res);
    });
},
};

// Export the database functions for the controller (burgers-Controller.js).
module.exports = burgers;
      