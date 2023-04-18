
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    images: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "imagekit",
    },
    qty: {
        type: Number,
        required: [true, "qty is required"],
        default: 1
    },
    price:{
        type: Number,
        required: [false, "price is required"],
    },
    actualPrice:{
     type: Number,
     required: [false, "actualPrice is required"],
    },
    size:{
        type: mongoose.Schema.Types.Mixed,
    },
    rating:{
      type: Number,
    },
    stats: {
        type: mongoose.Schema.Types.Mixed,
        default: true,
    },
    review:{
     type: String,
    },
    description: {
        type: String,
        required: false
    },
} ,{
    timestamps: true
   });
module.exports = mongoose.model('product', productSchema);