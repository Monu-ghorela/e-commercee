const POST = require("./db/postmodel");
const Createpost = async (req, resp)=>{
  try {
    const post = new POST({
      name:req.body.name,
      price:req.body.price,
      category:req.body.category,

      image: req.file.originalname,
    });
    const POSt = await post.save();
    console.log(POSt)
    resp.send(POSt)
  } catch {
    resp.send("error")
  }
};
module.exports = { Createpost }
