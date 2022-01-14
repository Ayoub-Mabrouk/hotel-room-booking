const Booking = require("../models/bookingModel");
const base = require("./baseController");

exports.reserve = async (req, res, next) => {
  let reserveObj = { ...req.body,user_id : req.user._id };
  const doc = await Booking.create(reserveObj);
  res.status(201).json({
    status: "success",
    data: {
      doc
    },
  });
};
exports.createBooking = base.createOne(Booking);
exports.getAllBookings = base.getAll(Booking);
exports.getBooking = base.getOne(Booking);

// Don't update password on this
exports.updateBooking = base.updateOne(Booking);
exports.deleteBooking = base.deleteOne(Booking);
