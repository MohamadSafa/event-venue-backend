const venueController = require('../Controllers/venueController');
const express = require('express');
const router = express.Router();

router.get('/getAll', venueController.getAllVenues);
router.get('/getOneVenueById/:id',venueController.getOneVenueById);
router.get('/getOneVenueByVenueId/:venue',venueController.getOneVenueByVenueId);
router.post('/add', venueController.addVenue);
router.put('/update/:name/:id',venueController.updateVenue);
router.delete('/delete/:id',venueController.deleteVenue);

module.exports = router;    