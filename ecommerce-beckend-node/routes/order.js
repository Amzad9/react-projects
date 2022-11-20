const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order');
router.post("/order", orderController.order);
router.get("/order", orderController.orderList);
router.delete("/order/:id", orderController.deleteOrder);

module.exports = router