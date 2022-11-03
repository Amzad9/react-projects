const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//import routes

const postRoute = require('./routes/post');
app.use("/posts", postRoute);



mongoose.connect(
    'mongodb://localhost:27017/data',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    () => {
      console.log("mongdb is connected");
    }
  );

const PORT = 3002;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});


