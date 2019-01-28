var map;

var url_base = "http://localhost:8888/"
var blue_icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

var coords_origin = {lat: 50.19276, lng: 18.44816};
var coords_opactwo = {lat: 50.194446, lng: 18.448287}; //50.194446, 18.448287
var coords_szpital = {lat: 50.191484, lng: 18.445920} //50.191484, 18.445920
var coords_stacja_kolei = {lat: 50.189900, lng: 18.463977} //50.189900, 18.463977
var coords_cysters = {lat: 50.194124, lng: 18.449342} //50.194124, 18.449342
var coords_unseren_helden = {lat: 50.191198, lng: 18.445905} //50.191198, 18.445905
var coords_magdalenka = {lat: 50.259650, lng: 18.416034} //50.259650, 18.416034

function initMap()
{
	var options = {
		zoom: 16,
		center: coords_origin,
		mapTypeId: 'satellite'
	};

	map = new google.maps.Map(document.getElementById('google-map'), options);

	var markers = [
	{
		name: "Zespół Klasztorno-Pałacowy",
		coords: coords_opactwo,
		icon: blue_icon,
		url: "zabytki/opactwo"
	},

	{
		name: "Szpital Juliusza Rogera",
		coords: coords_szpital,
		icon: blue_icon,
		url: "zabytki/szpitalik"
	},

	{
		name: "Stacja Kolei Wąskotorowej + Stacyjkowo",
		coords: coords_stacja_kolei,
		icon: blue_icon,
		url: "null"  //add 
	},
	{
		name: "Dąb Cysters",
		coords: coords_cysters,
		icon: blue_icon,
		url: "null" //add
	}];

	//adding markers
	for(i = 0; i < markers.length; i++)
	{
		addMarker(markers[i].name, markers[i].coords, markers[i].icon, url_base + markers[i].url);
	}

	var infowindow = new google.maps.InfoWindow(
	{
		content: "nothing" 
	});			

	function addMarker(name, coords, icon, url)
	{
		var marker = new google.maps.Marker(
		{
			position: coords,
			icon: icon,
		 	map: map
		});

		var infowindow_content = "<h5>" + name + "</h5>";
		var infowindow_button = '<button id="window-button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary mdl-color-text--white">Dowiedz się więcej</button>';
		marker.addListener('click', function()
		{
			infowindow.setContent(infowindow_content + infowindow_button);
			infowindow.open(map, marker);

			$("#window-button").on('click', function()
			{
				openUrl(url);
			});
		})
	}

	zoom();
}

function zoom()
{
	var search = location.search;
	var search_value = search.substring(search.indexOf("=") + 1);

	//improve this!
	if(search_value == "opactwo")
	{
		map.setCenter(coords_opactwo);
		map.setZoom(19);
	}
}

function openUrl(url)
{
	window.open(url, '_blank'); 
}