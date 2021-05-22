const router = require('express').Router();
const blog = require('../models/blog-model');
router.get("/:postName",function(req,res){
    const postid = req.params.postName;
    blog.findOne({_id:postid},function(err,foundblog){
      if(!err)
      {
        res.render("post",{title:foundblog.postName,postbody:foundblog.postbody});
      }
    });
    // for(var i=0; i<blogcontent.length;i++)
    //    {
    //      const v = blogcontent[i]._id;
    //      if( posttitle === v)
    //       {
    //         res.render("post",{title:blogcontent[i].title,postbody:blogcontent[i].cont});
    //       }
    //    }
  
});
module.exports = router;