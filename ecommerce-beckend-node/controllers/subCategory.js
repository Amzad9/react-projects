const mongoose = require("mongoose");
const subCategory = require("../modal/subCategory");
const category = require("./../modal/category");
// Add Category
exports.subCategory = async (req, res, next) => {
    try {
      console.log(req.body.CatId);
      const subCat = new subCategory({
            _id: new mongoose.Types.ObjectId,
            name:req.body.name,
            CatId: req.body.CatId,
      });
     const result = await subCat.save();
     const catId = await category.findOneAndUpdate({_id:req.body.CatId}, { $addToSet: { subCategory: result._id } });
     return res.json(result);
    } catch (error) {
     return res.status(500).json({error,  message: "Internal error." })
    }
};

exports.subCategoryList = (req, res, next) => {
 subCategory.find({}).populate([{path:"CatId", select: "name createdAt"}])
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    res.status(500).json({error,  message: "Internal error." })
  });
};


exports.subCategoryListById = async (req, res, next) => {
  await subCategory.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({error,  message: "Internal error." })
    });
  };


  exports.deleteSubCategory = async (req, res, next) => {
    await subCategory.findByIdAndRemove(req.params.id).then((result) => {
      res.json(result);
    }).catch((error) => {
      res.status(500).json({error,  message: "Internal error." })
    });
  };

  exports.updateSubCategory = async (req, res, next) => {
    const body = req.body;
    const data = {
      name:req.body.name,
    };
    await subCategory
      .findByIdAndUpdate(req.params.id, data, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json({error,  message: "Internal error." })
      });
  };
  