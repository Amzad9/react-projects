const mongoose = require("mongoose");
const cartSchema = require("../modal/cart");
// Add Category
exports.cart = async (req, res, next) => {
try {
  const cart = new cartSchema({
    userId:req.body.userId,
    items:req.body.items
  });
  const saveCart = await cart.save();
  res.status(200).json({success: true, cartItem: saveCart});
  } catch (error) {
    res.status(400).json({success: false, error: error});
  }
};

//# get all card
exports.cartList = async (req, res, next) => {
   try {
    const data = await cartSchema.find({}).populate([{path:"items", select: "name qty price createdAt"}]);
    res.status(200).json({success: true, cart: data});
   } catch (error) {
    res.status(400).json({success: false, error: error})
   }
};

exports.deleteCart = async (req, res, next) => {
  try {
    console.log(req.params)
    const result = await cartSchema.findByIdAndRemove(req.params.id);
    res.status(200).json({success: true, data: result});
  } catch (error) {
    res.status(400).json({success: false, error: error, message: error.message})
  }
};