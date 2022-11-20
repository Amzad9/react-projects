const mongoose = require("mongoose");
const express = require('express');
const ImageKit = require("imagekit");
const imagekitSchema = require("../modal/imagekit");

const imagekit = new ImageKit({
  publicKey: "",
  privateKey: "",
  urlEndpoint: ""
});

exports.imageUpload = async(req, res, next) => {
  await imagekit.upload({
    file : req.body.file, //required
    fileName : req.body.file.filename,   //required
}, function(error, result) {
    if(error) console.log(error);
    else console.log(result);
});
  
  //   let newImage = new imagekitSchema({
  //       prodId: req.body.prodId,
  //       images: req.file
  //  });
  //  await newImage.save();
  //  res.send(newImage);
}
exports.imageGetAll = async(req, res, next) => {
    try {
        const imagesAll = await imagekitSchema.find({}).populate([{path: 'prodId'}])
        res.json(imagesAll)
    
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}