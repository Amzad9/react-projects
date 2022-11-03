const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  email: {
    type: String,
    require: [true, "Email is required."],
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty."],
  },
  contact: {
    type: String,
    unique: true,
    required: [true, "Phone number required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("admin", adminSchema);
