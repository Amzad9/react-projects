const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config({ path: './.env' })
const app = express();
app.use(bodyParser.json());


//admin
const adminLogin = require("./routes/admin");
const adminRoutes = require('./routes/product');
const categoryRoutes = require("./routes/category");
const subCategoryRoutes = require("./routes/subCategory");

const imageupload = require("./routes/imagekit");

app.use("/api", adminLogin);
app.use("/api/product/", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", subCategoryRoutes);

app.use("/api/image", imageupload);

//user 
const userLogin = require("./routes/user");
app.use("/api", userLogin);
// cart api
const cart = require("./routes/cart");
app.use("/api", cart);

//order api
const order = require("./routes/order");
app.use("/api", order);

app.use((req, res, next)=>{
 res.status(404).send("<h1>Page not found</h1>")
});

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((e) => {
      console.log('not connected');
});

app.listen(process.env.PORT, ()=> {
    console.log(`Listening on port ${process.env.PORT} `);
});

