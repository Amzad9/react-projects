const mongoose = require("mongoose");
const orderSchema = require("../modal/order");
// Add Category
exports.order = async (req, res, next) => {
try {
  const order = new orderSchema({
    userId:req.body.userId,
    items:req.body.items
  });
  const saveOrder = await order.save();
  res.status(200).json({success: true, orderItem: saveOrder});
  } catch (error) {
    res.status(400).json({success: false, error: error});
  }
};

//# get all card
exports.orderList = async (req, res, next) => {
   try {
    const data = await orderSchema.find({});
    res.status(200).json({success: true, cart: data});
   } catch (error) {
    res.status(400).json({success: false, error: error})
   }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    console.log(req.params)
    const result = await orderSchema.findByIdAndRemove(req.params.id);
    res.status(200).json({success: true, data: result});
  } catch (error) {
    res.status(400).json({success: false, error: error, message: error.message})
  }
};