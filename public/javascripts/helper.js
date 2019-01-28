$(document).ready(function()
{
	var path = document.location.pathname;

	var newpath = path.replace("/", "-").replace("/", "-").replace("/", "-").replace("/", "-");

	//handling last char in url - slash
	if(newpath.substring(newpath.length - 1) === "-")
	{
		//alert("ostatni znak to kreska");
		newpath = newpath.substring(0, newpath.length - 1);
	}

	$("#button-div").load("/texts/buttons" + newpath + ".txt", function(response, status, xhr)
	{
        if(status == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});

function openURL(url)
{
	document.location.href = url;
}