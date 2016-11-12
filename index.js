var bodyParser = require("body-parser");
var express = require('express');
var jade = require('jade');

// create app
var app = express();


// set views
app.set('view engine','jade');
app.set('views',__dirname+"/views");


// set public dir
app.use(express.static('public'));


// http analytical 不写这个无法获取到post数据
app.use(bodyParser.urlencoded({ extended: false }));  



app.get("/",function(req,res){
	res.render('index');
});


app.listen(3000,function(){
	console.log("server is run in 3000")
})
