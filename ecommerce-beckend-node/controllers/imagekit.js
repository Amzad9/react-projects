const mongoose = require("mongoose");
const express = require('express');
const ImageKit = require("imagekit");
const imagekitSchema = require("../modal/imagekit");

const imagekit = new ImageKit({
  publicKey: "public_AoEYWWuLTJl0UZP9+YSzZh1+B6g=",
  privateKey: "private_QCtw0Tk4dZyJkC0h6Z+MtDoLVtw=",
  urlEndpoint: "https://ik.imagekit.io/mrvx50jqc"
});

exports.imageUpload = async(req, res, next) => {
console.log(req.file)
imagekit.upload({
    file: req.file.buffer.toString("base64"), //required
    fileName : req.file.originalname, 
  }, async function (error, result) {
    if (error) console.log(error);
    else {
        console.log(result.url); // works
        let newImage = new imagekitSchema({
          prodId: req.body.prodId,
          images: result.url
     });
      await newImage.save();
      res.send(newImage);
    }
  });
}
exports.imageGetAll = async(req, res, next) => {
    try {
        const imagesAll = await imagekitSchema.find({});
        res.json(imagesAll)
    
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}