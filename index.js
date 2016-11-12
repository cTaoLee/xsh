var bodyParser = require("body-parser");
var express = require('express');
var jade = require('jade');

// create app 创建应用
var app = express();


// set views 设置模板
app.set('view engine','jade');
app.set('views',__dirname+"/views");


// set public dir 设置根访问文件夹
app.use(express.static('public'));


// http analytical post数据解析
app.use(bodyParser.urlencoded({ extended: false }));  


// 路由设置
var index = require('./routes/index');
var search = require('./routes/search');

app.use("/",index);
app.use("/search",search);



// 开始服务器
app.listen(3000,function(){
	console.log("server is run in 3000")
})
