const mongoose = require("mongoose");
const pModal = require("../modal/product");
const imageKit = require("../modal/imagekit");

// add product
exports.product = (req, res, next) => {
  console.log(req.body)
  const admin = new pModal({
    name: req.body.name,
    category: req.body.category,
    images: req.body.imagekit,
    qty: req.body.qty,
    price: req.body.price,
    actualPrice: req.body.actualPrice,
    size: req.body.size,
    stats: req.body.stats,
    rating: req.body.rating,
    review: req.body.review,
    description: req.body.Description, 
  });
  admin
    .save()
    .then((data) => {
      res.json({ message: "Product Added Successfully", data });
    })
    .catch((error) => {
      return res.status(500).json({ error, message: "Internal error." });
    });
};

// fetch all data
exports.productList = async (req, res, next) => {
  try {
    let { limit = 10, page = 1, name, category, q } = req.query;
    const limitRecords = parseInt(limit);
    const skip = limit * (parseInt(req.query.page, 10) - 1);
    const totalRecord = await pModal.find().populate([{path:"category", select: "name createdAt"}]);
    console.log(totalRecord);

    const filter = {};
    let filterCategory = filter["category"];
    filterCategory = "";
    if(req.query.cat){
      filterCategory["name"] = new RegExp(req.query.cat, "i");
    }
    if(req.query.name){
      filter["name"] = new RegExp(req.query.name, "i");
    }
    const result = await pModal
      .find(filter).populate([{path:"category", select: "name createdAt"},{path:"images"}])
      .sort({ name: "asc" })
      .skip(skip)
      .limit(limitRecords);
    res
      .status(200)
      .json({ limit, page, result, totalRecord: totalRecord.length });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error, message: "Internal error." });
  }
};

// fetch by  id data
exports.productListById = async (req, res, next) => {
  try {
    const exist = await pModal.findOne({ _id: req.params.id });
    console.log(exist);  
    if(!exist){
      res.json({message: "Not exits"})
    }
    const result = await pModal.findById({_id:req.params.id});
    res.json({result, message: "Product found"})
  } catch (error) {
    res.status(500).json({error, message: error});
  }
};

// delete by id data
exports.deleteProduct = async (req, res, next) => {
 try {
  const deleteItem = await pModal.findByIdAndRemove(req.params.id);
  res.json({deleteItem, message: "Delete Item"});
 } catch (error) {
  res.status(500).json({error, message: error});
 }
};

// update user
exports.updateProduct = async (req, res, next) => {
 try {
  const body = req.body;
  const data = {
    title: body.title,
    description: body.description,
  };
  const updateItem = await pModal.findByIdAndUpdate(req.params.id, data, { new: true });
  res.json({update: updateItem, message: "Updated Item"});
 } catch (error) {
  res.status(500).json({error, message: error});
 }
};
