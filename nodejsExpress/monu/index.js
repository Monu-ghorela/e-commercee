const express = require("express");
const cors = require("cors");
const app = express();
const routepost = require("./upload");
const image = require("./fetchImage")
app.use(cors())
app.use(express.json())
app.use("/", routepost)
app.use("/", image)
require("./db/mongoose");
const Product = require("./db/postmodel");
const User = require("./db/users");

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  console.log(result)
  delete result.password;
  resp.send(result)
});
app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        await resp.send(user);
        console.log("found");
        // await resp.send(user.password)
      } else {
        console.log("not found");
        await resp.send("result not found");
      }
    }
  } else {
    resp.send("result not found");
  }
});
app.post("/Products", async (req, resp) => {
  let product = new Product(req.body);
  const result = await product.save();
  resp.send(result)
  console.warn("product api");
})
app.get("/Productlist", async (req, resp) => {
  let product = await Product.find();
  if (product.length > 0) {
    resp.send(product);
  } else {
    resp.send("no user found");
  }
});
app.delete("/Product/:id", async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
  //   resp.send("working");
});
app.get("/Product/:id", async (req, resp) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send("not working");
  }
});
app.put("/product/:id", async (req, resp) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});
app.get("/search/:key", async (req, resp) => {
  let result = await Product.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      {
        price: { $regex: req.params.key },
      },
      {
        category: { $regex: req.params.key },
      },
    ],
  });
  if (result) {
    resp.send(result);
    console.log(result);
  } else {
    resp.send("not working");
  }
});

app.listen(6000);
