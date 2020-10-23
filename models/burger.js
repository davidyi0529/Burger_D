// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');                                                                 

const burger = {
    selectALL: (cb) => {
        orm.selectALL('burgers',(res) => {
          cb(res);
      });
    },

    insertOne: (burger_name, cb) => {
        orm.insertOne('burgers', 'burger_name', burger_name, (res) => {
            cb(res);
        });
    },

    updateOne: (burger_id, cb) => {
        orm.updateOne('burgers', 'devoured', true, burger_id, (res) => {
            cb(res)
        });
    },
    
    restoreOne: (burger_id, cb) => {
        orm.updateOne('burgers', 'devoured', false, burger_id, (res) => {
            cb(res)
        });
    }

};

  // Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
