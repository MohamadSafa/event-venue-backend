const venueController = require('../Controllers/venueController');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.get('/getAll', venueController.getAllVenues);
router.get('/getOneVenueById/:id',venueController.getOneVenueById);
router.get('/getOneVenueByVenueId/:venue',venueController.getOneVenueByVenueId);
router.post('/add', upload.single('image'), venueController.addVenue);
router.put('/update/:id',upload.single('image'), venueController.updateVenue);
router.delete('/delete/:id',venueController.deleteVenue);

module.exports = router;    