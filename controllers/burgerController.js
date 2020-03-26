const express = require('express');
const router = express.Router();

// 1. import model
const burger = require('../models/burger');

// 2. create all of the routes needed
router.get('/', (req, res) => {
  res.end('hey there! ' + res.statusCode);
});

router.post('/api/burgers', function(req, res) {
  // TODO: get burgers from DB
  
});

router.put('/api/burgers/:id', function(req, res) {
  // TODO: update burgers
});


// export
// =================================================
module.exports = router;