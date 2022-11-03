const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema(
  {
    name: {
      id: mongoose.Schema.Types.ObjectId,
      type: String,
      default: "",
      trim: true,
      unique: true,
    },
    CatId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("subcategory", subCategorySchema);
