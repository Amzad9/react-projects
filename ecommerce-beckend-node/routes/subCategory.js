const express = require('express');

const router = express.Router();

const subCategoryController = require('../controllers/subCategory');

router.post("/subcategory", subCategoryController.subCategory);
router.get("/subcategory", subCategoryController.subCategoryList);
router.get("/subcategory/:id", subCategoryController.subCategoryListById);
router.delete("/subcategory/:id", subCategoryController.deleteSubCategory);
router.put("/subcategory/:id", subCategoryController.updateSubCategory);
module.exports = router;