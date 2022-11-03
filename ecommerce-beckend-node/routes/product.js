const express = require('express');

const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const checkAuth = require("../middleware/verify_token")

const productController = require('../controllers/product')

router.post("/", checkAuth,upload.single('image'), productController.product, (req,res, next)=>{
    next();
});
router.get("/", checkAuth, productController.productList);
router.get("/:id", checkAuth, productController.productListById);
router.delete("/:id",checkAuth, productController.deleteProduct);
router.put("/:id",checkAuth, productController.updateProduct);
module.exports = router;