const router = require("express").Router();
const blog = require('../models/blog-model');
const _ = require("lodash");

router.get("/",function(req,res){
    res.render("compose");
});
  
router.post("/",function(req,res){
    const blogitem = new blog({
      postName: _.capitalize(req.body.blogtitle),
      postbody: req.body.blogcontent
    });
    blogitem.save(function(err,result){
    res.redirect("/");
    });
});

module.exports = router;