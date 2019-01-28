var express = require('express');
var router = express.Router();

var appname = "Odkryj Rudy ";
var screenname = appname + "";

router.get('/', function(req, res, next) 
{
	res.render('index', { title: screenname });
});

router.get('/park', function(req, res, next) 
{
	res.render('park', { title: screenname });
});


module.exports = router;