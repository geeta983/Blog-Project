const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const about = require('./routes/about');
const contact = require('./routes/contact');
const compose = require('./routes/compose');
const posts = require('./routes/post');
const blog = require('./models/blog-model');
const keys = require('./config/keys');
const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));


mongoose.connect(keys.mongodb.dbURI, {
useNewUrlParser: true, 
useUnifiedTopology: true
});


app.get("/",function(req,res){
  blog.find({},function(err,foundblogs){
    res.render("home",{posts:foundblogs});
  });
  
});


app.use('/about',about);
app.use('/contact',contact);
app.use('/compose',compose);
app.use('/posts',posts);



app.listen(process.env.PORT || 3000,function(){
  console.log("Server running on port 3000");
});

