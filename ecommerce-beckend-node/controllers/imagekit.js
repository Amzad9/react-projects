// const mongoose = require("mongoose");
// const express = require('express');
// const multer = require('multer');

// const imagekitSchema = require("../modal/imagekit");


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now()+'-'+file.originalname);
//     }
// });

// const upload = multer({ storage });


// exports.imageUpload = async(req, res, next) => {
//     upload.single('imagekit');
//     console.log(req.body, req.file);
//     res.send('ok');
// }