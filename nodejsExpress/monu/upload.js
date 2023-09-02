const express = require("express");
const cors = require("cors");
const multer = require("multer");
const PostController = require("./PostController");
const routepost = express();
const bodyParser = require('body-parser')
routepost.use(bodyParser.json());
routepost.use(bodyParser.urlencoded({
  extended: false
}));

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      cb(null, file.originalname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("image");

routepost.post(
  "/api",
  upload, PostController.Createpost,

  (req, resp) => {
    const file = req.file;

    if (file) {
      resp.send("file upload");
    } else {
      resp.send("error");
    }
    console.log("imgae Upload")
  }
);
console.log("hii")
module.exports = routepost;
