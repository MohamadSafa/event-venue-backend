const eventController = require('../Controllers/eventController');
const express = require('express');
const router = express.Router();

router.get('/getAll', eventController.getEvents);
router.get('/updateEventByVenueId/:id',eventController.updateEventByVenueId);
// router.get('/getEventsByTitle/:title',eventController.getEventByTitle);
router.post('/add', eventController.addEvent);
router.delete('/delete/:id/:ID',eventController.deleteEvent);

module.exports = router;    