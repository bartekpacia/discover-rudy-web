var express = require('express');
var router = express.Router();

var appname = "Odkryj Rudy ";
var screenname = appname + "- Lasy Rudzkie";

router.get('/', function(req, res, next) 
{
	res.render('wtf', { title: screenname });
});



module.exports = router;