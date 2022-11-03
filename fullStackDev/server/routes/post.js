const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Post = require("../modal/post");

router.get("/", (req, res) => {
  res.send("we are on the host");
});

  router.post("/", (req, res) => {
  console.log('req.body===',req.body);
  const post = new Post({
    // _id : new mongoose.Types.ObjectId,
    title: req.body.title,
    discription: req.body.discription,
  });
  console.log(post);
  post.save().then(post => {
    console.log(post);
    res.json(post)
  })

//   try {
//     const savepost = await post.save(callback);
//     console("savepost", savepost)
//     res.json(savepost);
//   } catch (err) {
//     res.json({ message: err });
//     console.log("err", err)
//   }
//   post.save()
//   .then(data => {
//       res.status(200).json(data);
//     }
//   ).catch(error => {
//       res.status(400).json({
//         "message": error
//       });
//     }
//   );


// res.end(JSON.stringify(post));  

});

module.exports = router;
