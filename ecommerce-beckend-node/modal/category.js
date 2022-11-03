const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
      name: {
        type: String,
        trim: true,
      },
      subCategory: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "subcategory",
        }
      ]
}, {
    timestamps: true,
  })

module.exports = mongoose.model('category', categorySchema);