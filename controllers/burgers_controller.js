var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Create routes and set up logic where required.
router.get("/", function (req, res) { // when in root address, render(index.handlebar) with All (selectAlL) burgerObject data
  burger.selectAll(function(data) {
    var burgerObject = {
      burgers: data     // IS THIS the data in burgers table?
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});
// Add new burger to the db WHEN POST request by AJAX from burger.js in public/assets/js folder.
router.post("/api/burgers", function (req, res) {
  // creating columns "burger_name" and devoured, their values are req.body.burger_name and req.body_devoured
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new burger
    res.json({ 
      id: result.insertId,
      message: "Success! Data inserted"
      });
  });
});
// Set burger devoured status to true.
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne({ devoured: req.body.devoured }, condition, function(result) { //objColVal, condition
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404.
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// Delete burger from db.
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.deleteOne(condition, function(result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404.
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;