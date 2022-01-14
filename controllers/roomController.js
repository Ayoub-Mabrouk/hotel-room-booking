const Room = require('../models/roomModel');
const Room_type = require('../models/room_typeModel');
const base = require('./baseController');
exports.getAllRooms = async (req, res, next) => {
    try {  
      const doc = await Room.find().populate({
          path:"room_type",
          model:"Room_type"
      })
  
      res.status(200).json({
        status: "success",
        results: doc.length,
        data: {
          doc
        },
      });
    } catch (error) {
      next(error);
    }
  };

// exports.createUser = base.createOne(Room);
// exports.getAllUsers = base.getAll(Room);
// exports.getUser = base.getOne(Room);

// // Don't update password on this 
// exports.updateUser = base.updateOne(Room);
// exports.deleteUser = base.deleteOne(Room);