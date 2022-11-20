const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cart');
router.post("/cart", cartController.cart);
router.get("/cart", cartController.cartList);
router.delete("/cart/:id", cartController.deleteCart);

module.exports = router

