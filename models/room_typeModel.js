const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const room_typeSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Please fill Date in"],
  },
  max_capacity: {
    type: Number,
    required: [true, "Please fill Date out"],
  },
  price:{
    type:Number
  }
});

const Room_type = mongoose.model("Room_type",room_typeSchema);
module.exports = Room_type;
