const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    items: [
      {
        quantity: String,
        name: String,
        price: Number,
        image: String
      }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);