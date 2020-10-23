// Import MySQL connection.
const connection = require('./connection.js');

const orm = {
// Select all
    selectALL: (tablename, cb) => {
        connection.query('SELECT * FROM ??;',[tablename], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

// Insert One
    insertOne: (tablename, colname, burger_name, cb) => {
        connection.query('INSERT INTO ?? (??) VALUES (?)', [tablename, colname,burger_name], (err,res) => {
            if (err) throw err;
            cb(res);
        });
    },

// Update One
     updateOne: (tablename, colname, devoured, id, cb) => {
        connection.query('UPDATE ?? SET ?? = ? WHERE id = ?', [tablename, colname, devoured, id], (err, res) => {
          if (err) throw err;
          cb(res);
      });
  }
};
 
  // Export the orm object for the model (burger.js).
  module.exports = orm;
