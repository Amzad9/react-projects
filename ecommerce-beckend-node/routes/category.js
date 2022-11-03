const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category');

router.post("/category", categoryController.category);
router.get("/category", categoryController.categoryList);
router.get("/category/:id", categoryController.categoryListById);
router.delete("/category/:id", categoryController.deleteCategory);
router.put("/category/:id", categoryController.updateCategory);
module.exports = router;