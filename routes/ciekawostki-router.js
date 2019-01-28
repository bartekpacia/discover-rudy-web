var express = require('express');
var router = express.Router();

var appname = "Odkryj Rudy ";
var screenname = appname + "| Ciekawe miejsca";

router.get('/', function(req, res, next) 
{
	res.render('ciekawostki', { title: screenname });
	console.log("ciekawe router!");
});



module.exports = router;