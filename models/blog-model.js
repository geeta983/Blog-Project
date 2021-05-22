const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    postName : String,
    postbody : String
});
  
const blog = new mongoose.model("blog",blogSchema);

module.exports = blog;