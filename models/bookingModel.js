const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const bookingSchema = new mongoose.Schema({
  Date_in: {
    type: Date,
    required: [true, "Please fill Date in"],
    default:new Date()
  },
  Date_out: {
    type: Date,
    required: [true, "Please fill Date out"],
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill user id"],
    default:new Date()

  },
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill room id"],
  }
});

const Booking = mongoose.model("booking", bookingSchema);
module.exports = Booking;
