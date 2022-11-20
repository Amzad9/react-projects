const mongoose = require("mongoose");

const imageKitSchema = mongoose.Schema({
  prodId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: [true, "ItemId is required"], 
        ref:'product'
    },
    images: {
      type:Object,
      required:true
       },

      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
        default: null,
      },
      updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
        default: null,
      },
},{
    timestamps: true,
  })

  module.exports = mongoose.model("imagekit", imageKitSchema);
