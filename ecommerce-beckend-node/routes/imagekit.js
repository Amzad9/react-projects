const express = require('express');
const router = express.Router();
const multer = require('multer');
// const upload = multer({ dest: '/uploads' })

const checkAuth = require("../middleware/verify_token")

const imagekitController = require('../controllers/imagekit');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
  if(file.mimetype === "image/jpg"  || 
     file.mimetype ==="image/jpeg"  || 
     file.mimetype ===  "image/png"){
  cb(null, true);
 }else{
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"),false);
}
}

const upload = multer({storage: storage, fileFilter: fileFilter});
router.post("/upload", upload.single('file'), imagekitController.imageUpload );
router.get("/images", imagekitController.imageGetAll );
module.exports = router;
