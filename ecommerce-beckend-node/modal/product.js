
const mongoose = require("mongoose");


let Variants = new mongoose.Schema({
    color: String,
});
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
    coverImage:{
        type: String,
        default: ""
    },
    imageKit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "imagekit",
        default: null,
    },
    qty: {
        type: Number,
        required: [true, "qty is required"],
        default: 1
    },
    price:{
        type: Number,
        required: [true, "price is required"],
    },
    actualPrice:{
     type: Number,
     required: [true, "actualPrice is required"],
    },
    variant:{
        type: mongoose.Schema.Types.Mixed,
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