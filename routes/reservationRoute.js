const reservationController = require('../Controllers/reservationController');
const express = require('express');
const router = express.Router();

router.get('/getAll', reservationController.getReservations);
router.get('/getReservationsByUserName/:id',reservationController.updateReservationByUserName);
router.get('/getReservationsByUserId/:id',reservationController.getReservationByUserId);
router.get('/getReservationsByEventIdUserId/:id',reservationController.getReservationByEventIDAndUserId);
router.post('/add',reservationController.addReservation);
router.delete('/delete/:id',reservationController.deleteReservation);

module.exports = router;