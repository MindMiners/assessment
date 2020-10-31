const express = require('express');
const controller = require('./webhookController');

const router = express.Router();

// simply for letting mailchimp validate the webhook
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// to send user details to the database
router.post('/', controller.updateUserDB, (req, res) => {
  const { type, data } = req.body;
  console.log(type, data)
  res.sendStatus(200);
});

module.exports = router;