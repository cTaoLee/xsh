var express = require('express');
var router = express.Router();

/* GET search page. */
router.get('/', function(req, res, next) {

	var ng = require('nodegrass');
	var iconv = require('iconv-lite');

	var url = "http://www.shuquge.com/modules/article/search.php";
	 	url = "http://127.0.0.1/php/";
	var reqheaders = {'Content-Type': 'application/x-www-form-urlencoded'};


var a = iconv.encode(req.query.value,'gbk');
a = new Buffer(a,'binary');
a = a.toString();

	var data = {searchkey: a};
	var charset = "gbk";
	var callback = function(r,status,headers){
		res.send(r);
	};

	ng.post(url,callback,reqheaders,data,charset);

});

module.exports = router;


// _sendReq