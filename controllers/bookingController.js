const Booking = require('../models/bookingModel');
const base = require('./baseController');

exports.showUserId=async (req, res, next)=>{
    res.status(201).json({
        status: 'success',
        data: {
            doc:req.user
        }
    });
}
exports.createBooking = base.createOne(Booking);
exports.getAllBookings = base.getAll(Booking);
exports.getBooking = base.getOne(Booking);

// Don't update password on this 
exports.updateBooking = base.updateOne(Booking);
exports.deleteBooking = base.deleteOne(Booking);