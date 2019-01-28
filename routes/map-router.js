var express = require('express');
var router = express.Router();

var screenname = "Mapa | Odkryj Rudy";

router.get('/', function(req, res, next)
{
	res.render('map', { title: screenname});
	console.log("map router!");
});

module.exports = router;