const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/auth');

router.post('/events', calendarController.createEvent);

module.exports = router;
