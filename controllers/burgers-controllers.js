const express = require("express");

const router = express.Router();

// Import the model (burgers.js) to use its database functions.
const burgers = require("../models/burgers");

// Create all our routes aynd set up logic within those routes where required.
router.get("/", function(req,res) {
    burgers.all("burgers",function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.create("burgers",[
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertID });
        console.log(result)
    });
});

router.put("/api/burgers", function(req, res) {
    const condition = "id = " + req.body.burger_id;

    console.log("condition", condition);

    burgers.update("burgers",{
        devoured: req.body.devoured
        }, condition, function(result) {
            if (result.changedRows === 0) {
              // If no rows were changed, then the ID must not exist, so 404
              return res.status(404).end();
            } else {
            res.status(200).end();
        }
    });
});


// Export routes for server.js to use.
module.exports = router;