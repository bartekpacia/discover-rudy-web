$(document).ready(function()
{
	$("#zabytki").on("click", function()
	{
		document.location.href = 'http://localhost:8888/zabytki';
	});

	$("#map").on("click", function()
	{
		document.location.href = 'http://localhost:8888/mapa';
	});

	$("#lasy").on("click", function()
	{
		document.location.href = 'http://localhost:8888/lasy-rudzkie';
	});

	$("#ciekawostki").on("click", function()
	{
		document.location.href = 'http://localhost:8888/ciekawe-miejsca';
	});

	$("#atrakcje").on("click", function()
	{
		document.location.href = 'http://localhost:8888/atrakcje';
	});

	$("#park").on("click", function()
	{
		document.location.href = 'http://localhost:8888/park';
	});
});