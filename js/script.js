/* === GENERAL NOTES ===
1. I'd like to add more info vars. "Eg. Monday 21st Feb, 21:43"

*/

$(".response").hide(); // stop anything being shown until data ready

$(document).ready(function() {
	// global vars for outputting current weather to html
	var output = document.getElementById("out");
	var tempKelvin;
	var celcius = true;

	////////

	/* Function to handle Celsius and Farenheit switch
		if celcius is true
			$("temp").text(tempKelvin - XYZ)
			celsius = false
		else
			$("temp").text(tempKelvin - 273.15)
			celsius = true
	*/

	function formatWeatherData (resultsArray) {
		console.log(resultsArray);
		// format data ///
		// description (needs to be title case?)
		// temp [2]
		tempKelvin = resultsArray[2];	// store original temp as global for later conversion
		resultsArray[2] = (resultsArray[2] - 273.15).toPrecision(1) + "°"; // convert celcius
		// icon assign [3] / based on description. FUNCTION NEEDED
		var iconURL = "http://openweathermap.org/img/w/" + resultsArray[3] + ".png"; // use [3] for big pic logic
		// sunrise [4] / convert from unix, Needs refining to be just hrs and mins
		resultsArray[4] = new Date(resultsArray[4] * 1000);
		// sunset [5] /  convert from unix, Needs refining to be just hrs and mins
		resultsArray[5] = new Date(resultsArray[5] * 1000);
		// windspeed [6]
		resultsArray[6] = (resultsArray[6] * 2.2369).toPrecision(1) + " mph";
		// direction [7] / calculate compass direction. FUNCTION NEEDED

		// then pass to DOM /// (future refining: wrap in dive and loop over?)
		$("#city").text(resultsArray[0]);
		$("#description").text(resultsArray[1]);
		$("#temp").text(resultsArray[2]);
		$("<img class= response src=" + iconURL + ">").appendTo($("#imgWrap"));
		$("#sunrise").text(resultsArray[4]);
		$("#sunset").text(resultsArray[5]);
		$("#windSpeed").text(resultsArray[6]);

		$(".response").show();		// once data ready, show
	}



	function callWeatherAPI(latitude, longitude) {
		var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=44db6a862fba0b067b1930da0d769e98";
		console.log(url);
		$.getJSON(url, function (weatherResponse){
			var resultsForFormatting = [];
			resultsForFormatting.push(weatherResponse.name,
									  weatherResponse.weather[0]["description"],
									  weatherResponse.main["temp"],
									  weatherResponse.weather[0]["icon"],
									  weatherResponse.sys["sunrise"],
									  weatherResponse.sys["sunset"],
									  weatherResponse.wind["speed"],
									  weatherResponse.wind["deg"]
									  );
			// pass to function for formatting
			formatWeatherData(resultsForFormatting);
		});
	}

  	function success(position) {
    	var latitude  = position.coords.latitude;
    	var longitude = position.coords.longitude;

    	output.innerHTML = '<p><small>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</small></p>';

    	// call weather API
    	callWeatherAPI(latitude, longitude);
  	};

  	function error() {
    	output.innerHTML = "Unable to retrieve your location";
  	};



  	output.innerHTML = "<p>Locating…</p>";

  	if (!navigator.geolocation){
		output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
		return;
  	}

  	navigator.geolocation.getCurrentPosition(success, error);



});