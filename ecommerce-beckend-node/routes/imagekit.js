const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const checkAuth = require("../middleware/verify_token")

const imagekitController = require('../controllers/imagekit');
const schemaKit = require("../modal/imagekit")

router.post("/upload",checkAuth, upload.single('imageKit'), async (req, res, next) => {
    console.log(req.file);
    let newProduct = new schemaKit({
      imageKit: req.file
   });
   console.log();
   await newProduct.save();
       res.send(newProduct);
});
router.get("/",checkAuth, async (req, res, next) => {
    await schemaKit.find({}).populate([{path:"createdBy", select: "name"}])
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;