var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var pizza = require("../models/pizza.js");


router.get("/", function(req, res) {
    pizza.selectAll(function(data) {
      var hbsObject = {
        pizza: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
router.post("/api/pizza", function(req, res) {
  pizza.insertOne("pizza_name", req.body.pizza_name, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
  
router.put("/api/pizza/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  pizza.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      /*if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }*/
      res.status(200).end();

      res.render("/");

    }
  );
});

// Export routes for server.js to use.
module.exports = router;