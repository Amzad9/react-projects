const mongoose = require("mongoose");
const cSchema = require("../modal/category");
// Add Category
exports.category = async (req, res, next) => {
    console.log(req.body);
  const category = new cSchema({
    name:req.body.name,
  });
  await category
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.categoryList = async (req, res, next) => {
await cSchema.find({}).populate([{path:"subCategory", select: "name createdAt"}])
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error);
  });
};


exports.categoryListById = async (req, res, next) => {
  await cSchema.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
  };


  exports.deleteCategory = async (req, res, next) => {
    await cSchema.findByIdAndRemove(req.params.id).then((result) => {
      res.json(result);
    });
  };

  exports.updateCategory = async (req, res, next) => {
    const body = req.body;
    const data = {
      name:req.body.name,
    };
    await cSchema
      .findByIdAndUpdate(req.params.id, data, { new: true })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  