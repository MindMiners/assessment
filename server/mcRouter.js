const express = require('express');

const router = express.Router();

// to send user details to the database
router.get('/', (req, res) => {
  console.log('hello world');
  res.sendStatus(200);
});

// to send user details to the database
router.post('/', (req, res) => {
  const { type, data } = req.body;
  console.log(type, data)
  res.sendStatus(200);
});

module.exports = router;