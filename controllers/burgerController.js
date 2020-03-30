const express = require('express');
const router = express.Router();
// const chalk = require('chalk');
const _ = require('lodash');

// 1. import model
const burger = require('../models/burger');

// 2. create all of the routes needed
router.get('/', (req, res) => {
  // res.end('hey there! ' + res.statusCode);
  burger.all(function(data) {
    let handlebarsObject = {
      burgers: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

// GET ALL BURGERS
// =================================================
router.get('/api/burgers', function(req, res) {
  burger.all(function(data) {
    console.log(`list of burgers i need to load`);
    
    console.log(data);
    // debug(data);
    // res.end("hi");
    res.send(data);
  });
});

// CREATE
// =================================================
router.post("/api/burgers", function(req, res) {
  // console.log(req);
  
  burger.create(["name", "hasBeenEaten"], 
  [req.body.name, req.body.hasBeenEaten], 
  function(result) {
    // Send back the ID of the new quote
    // console.log(result.insertId);

    // console.log(`Success, the new burger id is: ${chalk.cyanBright(result.insertId)}`);
    
    res.json({ id: result.insertId });
  });
});


// UPDATE
// =================================================
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      hasBeenEaten: req.body.hasBeenEaten
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});


// export
// =================================================
module.exports = router;