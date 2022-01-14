const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const authController = require('./../controllers/authController');

// router.route('/createBooking').post(bookingController);


// Protect all routes after this middleware
router.use(authController.protect);
router.route('/getAllRooms').get(roomController.getAllRooms);

// Only admin have permission to access for the below APIs 
router.use(authController.restrictTo('admin'));

// router
//     .route('/')
//     .get(bookingController.getAllBookings);


// router
//     .route('/:id')
//     .get(bookingController.getBooking)
//     .patch(bookingController.updateBooking)
//     .delete(bookingController.deleteBooking);

module.exports = router;