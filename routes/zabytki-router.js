var express = require('express');
var router = express.Router();

var fs = require('fs');

var EMPTY = "EMPTY.txt";
var ENCODING = 'utf-8';
var TEXT_FOLDER_PATH = "../public/texts/";

var response;

//upgrade this in the future
// var app = "Odkryj Rudy";
// var section = "Zabytki"
// var screen = "";

//simply this code!

var appname = "Odkryj Rudy - ";
var screenname = appname + "Zabytki ";

var img_path = "/images/";

router.get('/', function(req, res, next) 
{
	res.render('zabytki', { title: screenname });
});

//shorter function for synchronized reading from file 
function readFile(file)
{
	var text = fs.readFileSync(TEXT_FOLDER_PATH + file, ENCODING);

	return text;
}

function fillAndOpenTemplate(name, h1, t1, h2, t2, h3, t3, h4, t4, h5, t5, img1, img2, img3, img4, img5)
{
	//h - header
	//t - text
	//img - image

	var header1 = readFile(h1);
	var text1 = readFile(t1);

	var header2 = readFile(h2);
	var text2 = readFile(t2);

	var header3 = readFile(h3);
	var text3 = readFile(t3);

	var header4 = readFile(h4);
	var text4 = readFile(t4);

	var header5 = readFile(h5);
	var text5 = readFile(t5);

	response.render('template', 
	{ 	
		title: screenname + name, 
		header1: header1, text1: text1, 
		header2: header2, text2: text2,
		header3: header3, text3: text3,
		header4: header4, text4: text4,
		header5: header5, text5: text5,
		image1: img_path + img1,
		image2: img_path + img2,
		image3: img_path + img3,
		image4: img_path + img4,
		image5: img_path + img5
	});
}

router.get('/opactwo/', function(req, res, next) 
{
	response = res;

	fillAndOpenTemplate(
		"Opactwo",
		'opactwo-1-h.txt', 'opactwo-1.txt',
		'opactwo-2-h.txt', 'opactwo-2.txt',
		'opactwo-3-h.txt', 'opactwo-3.txt',
		EMPTY, EMPTY,
		EMPTY, EMPTY,
		"opactwo_1.webp",
		"opactwo_2.webp",
		"opactwo_3.webp",
		"opactwo_4.webp",
		"opactwo_5.webp");
});

router.get('/szpitalik/', function(req, res, next) 
{
	response = res;

	fillAndOpenTemplate(
		"Szpitalik Juliusza Rogera",
		'szpitalik-1-h.txt', 'szpitalik-1.txt',
		'szpitalik-2-h.txt', 'szpitalik-2.txt',
		'szpitalik-3-h.txt', 'szpitalik-3.txt',
		EMPTY, EMPTY,
		EMPTY, EMPTY,
		"szpitalik_1.webp",
		"szpitalik_2.webp",
		"szpitalik_3.webp",
		"juliusz_roger.webp",
		EMPTY);
});

router.get('/cysters/', function(req, res, next) 
{

});

router.get('/stacja-kolei/', function(req, res, next) 
{

});

router.get('/unseren-helden/', function(req, res, next) 
{

});

router.get('/madgalenka/', function(req, res, next) 
{

});

module.exports = router;