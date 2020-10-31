const express = require('express');
const controller = require('./mainController');

const router = express.Router();

// to send user details to the database
router.post('/', controller.postUserDB, controller.postUserMC, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
