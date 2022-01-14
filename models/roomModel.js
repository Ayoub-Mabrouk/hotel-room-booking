const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const roomSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: [true, "Please fill Date in"],
  },
  room_type: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Date out"],
  }
});

const Room = mongoose.model("Room",roomSchema);
module.exports = Room;
