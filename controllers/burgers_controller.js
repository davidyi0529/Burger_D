const express = require("express");                   
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectALL((data) => {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
    });
});

router.post('/burger/add', (req, res) => {
  burger.insertOne(req.body.burger_name, function() {
  // Send back the ID of the new quote
    res.redirect('/')
    });
});

router.post('/burger/eat', (req, res) => {
    burger.updateOne(req.body.id, function() {
  // Send back the ID of the new quote
    res.redirect('/')
    });
});

router.post('/burger/restore', (req, res) => {
    burger.restoreOne(req.body.id, function() {
  // Send back the ID of the new quote
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
