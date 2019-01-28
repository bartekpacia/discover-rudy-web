var express = require('express');
var router = express.Router();

var appname = "Odkryj Rudy ";
var screenname = appname + "| Atrakcje";

router.get('/', function(req, res, next) 
{
	res.render('atrakcje', { title: screenname });
	console.log("atrakcje router!");
});



module.exports = router;