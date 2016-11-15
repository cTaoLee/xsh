var express = require('express');
var router = express.Router();

/* GET search page. */
router.get('/', function(req, res, next) {


    var ng = require('nodegrass');
    var cheerio = require('cheerio');
    var querystring = require('querystring')

    var url = "http://m.biqudao.com/SearchBook.php";
    var data = querystring.stringify({
        keyword: req.query.value
    });
    var reqheaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
    };
    var charset = "utf8";
    var callback = function(r,status,headers){

        var $ = cheerio.load(r);
        var items = [];
        $('.mybook a').each(function (idx, element) {
            var $element = $(element);
            items.push({
                title: $element.find('.title').text(),
                href: $element.attr('href'),
                new:$element.find('.author').last().text()
            });

        });
        res.render('search',{lib:items});
    };

    ng.post(url,callback,reqheaders,data,charset);


});

module.exports = router;