$(".response").hide(); // stop anything being shown until data ready

$(document).ready(function() {
	// global vars for outputting current weather to html
	var output = document.getElementById("out");
	var tempKelvin;
	var celsius = true;

	////////

  function assignBackgroundImage(weatherID, iconID) {
    console.log("test yo");
    var $bg = $("#bg");
    // switch statement
    if (iconID.indexOf("d") > -1) {
      // daytime pics
      switch (weatherID) {
        case 201:
          $bg.css("background-image", "url(https://i.ytimg.com/vi/KEpC3f-Fea0/maxresdefault.jpg)");
          break;
        case 600:
        case 601:
        case 602:
        case 620:
        case 621:
        case 622:
          $bg.css("background-image", "url(http://4.bp.blogspot.com/-SEALwNf2yIE/Uv67lquTiuI/AAAAAAAAK9Y/cjYwNSjdn2o/s1600/IMG_1804%5B1%5D.JPG)");
          break;
        case 230:
        case 202:
        case 231:
          $bg.css("background-image", "url(http://www.skringers.com/wp-content/uploads/Thunderstorm-Wallpaper.jpg)");
          break;
        case 762:
          $bg.css("background-image", "url(http://cdn.theatlantic.com/assets/media/img/photo/2011/06/volcanic-ash-and-pumice-from-puyehue/p02_15041586/main_1200.jpg)");
          break;
        case 221:
          $bg.css("background-image", "url(http://crenk.com/wp-content/uploads/2013/09/Nighttime-thunderstorm-over-the-Grand-Canyon.jpg)");
          break;
        case 210:
          $bg.css("background-image", "url(http://emanbilisim.com/weather4/javascript-premium-weather-widget/bins/assets/bg-thunderstorm-day.jpg)");
          break;
        case 701:
        case 711:
        case 721:
        case 741:
          $bg.css("background-image", "url(http://everystockphoto.s3.amazonaws.com/ryton_willows_mist_323363_o.jpg)");
          break;
        case 313:
        case 314:
        case 321:
        case 531:
          $bg.css("background-image", "url(http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/08/Rain-Drops-on-Glass-Wallpapers.jpg)");
          break;
        case 800:
        case 951:
          $bg.css("background-image", "url(http://img11.deviantart.net/786e/i/2009/089/d/c/clear_sky_by_sed_rah_stock.jpg)");
          break;
        case 905:
        case 957:
        case 958:
        case 959:
          $bg.css("background-image", "url(http://miriadna.com/desctopwalls/images/max/Wind-lanscape.jpg)");
          break;
        case 803:
          $bg.css("background-image", "url(http://nathalie-aucuit.e-monsite.com/medias/images/cumulus-fractus.jpg)");
          break;
        case 503:
        case 504:
        case 511:
          $bg.css("background-image", "url(http://openwalls.com/image/7973/heavy_rain_1920x1200.jpg)");
          break;
        case 904:
          $bg.css("background-image", "url(http://preview.turbosquid.com/Preview/2014/08/01__17_25_29/cracked-ground-1.jpg5843ef6e-99bb-41ec-b7f1-5f31d332de0dOriginal.jpg)");
          break;
        case 300:
        case 310:
        case 311:
          $bg.css("background-image", "url(http://s9.postimg.org/ewb5oidha/lightrain.jpg)");
          break;
        case 901:
          $bg.css("background-image", "url(http://static2.businessinsider.com/image/519b9fbf69bedda634000012/these-are-the-2013-atlantic-hurricane-and-tropical-storm-names.jpg)");
          break;
        case 615:
        case 616:
          $bg.css("background-image", "url(http://unofficialalpine.com/wp-content/uploads/2016/01/Rain-drops-on-glass-and-snow1241.jpg)");
          break;
        case 802:
          $bg.css("background-image", "url(http://www.carlwozniak.com/clouds/Graphics/New%20Pix/clouds13.jpg)");
          break;
        case 804:
          $bg.css("background-image", "url(http://www.imageafter.com/dbase/images/nature_elements/b20nature_elements124.jpg)");
          break;
        case 211:
          $bg.css("background-image", "url(http://www.iorise.com/blog/wp-content/uploads/2013/06/Thunderstorm-near-Coffee-Bay-on-the-Wild-Coast-region-of-South-Africa.jpg)");
          break;
        case 200:
          $bg.css("background-image", "url(http://www.skringers.com/wp-content/uploads/Thunderstorm-Wallpaper.jpg)");
          break;
        case 302:
        case 232:
          $bg.css("background-image", "url(http://www.savetherain.org/fp/users/1/pages/1/save-the-rain_bg-001.jpg)");
          break;
        case 520:
          $bg.css("background-image", "url(http://www.weather.gov/images/dvn/Climate/155406169_2bcb8c025f_ok.jpg)");
          break;
        case 731:
        case 751:
        case 761:
          $bg.css("background-image", "url(https://craftodyssey.files.wordpress.com/2015/07/dust-cloud.jpg)");
          break;
        case 801:
          $bg.css("background-image", "url(https://crystalseye.files.wordpress.com/2011/08/dsc_0724.jpg)");
          break;
        case 500:
          $bg.css("background-image", "url(https://eurowanderlust.files.wordpress.com/2013/07/dsc_0029.jpg)");
          break;
        case 501:
          $bg.css("background-image", "url(https://fallforward.files.wordpress.com/2010/04/rain.jpg)");
          break;
        case 903:
          $bg.css("background-image", "url(https://herewego2011.files.wordpress.com/2011/01/frozen-lake.jpg)");
          break;
        case 781:
        case 900:
        case 902:
        case 962:
          $bg.css("background-image", "url(https://i.ytimg.com/vi/6h8043y-PwI/maxresdefault.jpg)");
          break;
        case 611:
        case 612:
        case 906:
          $bg.css("background-image", "url(https://i.ytimg.com/vi/AhBFanbd6Ng/maxresdefault.jpg)");
          break;
        case 771:
        case 960:
        case 961:
          $bg.css("background-image", "url(http://25.media.tumblr.com/tumblr_m8hzilM0cM1rati4no1_1280.jpg)");
          break;
        case 212:
          $bg.css("background-image", "url(https://localtvkstu.files.wordpress.com/2014/09/28-september-2014-thunderstorm-9-e1432057541566.jpg)");
          break;
        case 502:
        case 312:
        case 521:
          $bg.css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/b/b9/What_a_little_Rain-X_can_do_for_you_(3908431451).jpg)");
          break;
        case 301:
        case 522:
          $bg.css("background-image", "url(https://www.caminodesantiago.me/wp-content/uploads/rain1.jpg)");
          break;
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
          $bg.css("background-image", "url(https://www.komar.de/fileadmin/media/Fototapeten_Bilder/8-515_Ocean_Breeze_hd.jpg)");
          break;
      }   
    } else {
      // night time pics
      // 28
      switch (weatherID) {
        case 600:
        case 601:
        case 602:
        case 620:
        case 621:
        case 622:
          $bg.css("background-image", "url(http://4.bp.blogspot.com/-yT0PqtolOws/URWoUKuVdcI/AAAAAAAAAuA/buj_KI_rj_o/s1600/Nemo+round+2+029b.jpg)");
          break;
        case 960:
        case 961:
          $bg.css("background-image", "url(http://cdn2.epictimes.com/wp-content/uploads/2015/05/Storm-Clouds-Lightning_HD_Background_chillcover.com_.jpg)");
          break;
        case 771: //squall
          $bg.css("background-image", "url(http://cdn.c.photoshelter.com/img-get2/I0000eabftCNSBBk/fit=1000x750/Squall-Line-Approaches-Kansas-City.jpg)");
          break;
        case 201:
        case 202:
          $bg.css("background-image", "url(https://i.ytimg.com/vi/QG0h4xE2YCM/maxresdefault.jpg)");
          break;
        case 803:
        case 802:
        case 804:
        case 801:
          $bg.css("background-image", "url(http://eskipaper.com/images/night-clouds-moon-1.jpg)");
          break;
        case 300:
        case 301:
          $bg.css("background-image", "url(http://images2.fanpop.com/image/photos/10000000/The-Morning-After-a-RainStorm-black-10095861-1280-862.jpg)");
          break;
        case 701:
        case 711:
        case 721:
        case 741:
          $bg.css("background-image", "url(http://orig11.deviantart.net/23d7/f/2013/166/f/9/blue_mist_wallpaper_by_cronosdage-d69663l.jpg)");
          break;
        case 904:
          $bg.css("background-image", "url(http://preview.turbosquid.com/Preview/2014/08/01__17_25_29/cracked-ground-1.jpg5843ef6e-99bb-41ec-b7f1-5f31d332de0dOriginal.jpg)");
          break;
        case 901:
          $bg.css("background-image", "url(http://static2.businessinsider.com/image/519b9fbf69bedda634000012/these-are-the-2013-atlantic-hurricane-and-tropical-storm-names.jpg)");
          break;
        case 615:
        case 616:
          $bg.css("background-image", "url(http://unofficialalpine.com/wp-content/uploads/2016/01/Rain-drops-on-glass-and-snow1241.jpg)");
          break;
        case 230:
          $bg.css("background-image", "url(http://wallpapertop.xyz/images/110511-rain-thunder-and-lightning-storm.jpg)");
          break;
        case 310:
        case 311:
        case 302:
        case 321:
        case 531:
        case 503:
        case 504:
        case 511:
        case 520:
        case 500:
        case 501:
        case 502:
        case 521:
        case 522:
          $bg.css("background-image", "url(http://www.esiweb.org/rumeliobserver/wp-content/uploads/2013/11/rain1.jpg)");
          break;
        case 212:
          $bg.css("background-image", "url(http://www.goodwp.com/images/201105/goodwp.com_17783.jpg)");
          break;
        case 762:
          $bg.css("background-image", "url(http://www.wired.com/wp-content/uploads/2015/12/AP_600570587579-1024x683.jpg)");
          break;
        case 905:
        case 957:
        case 958:
        case 959:
          $bg.css("background-image", "url(https://c1.staticflickr.com/9/8405/8650183860_cd10070790_b.jpg)");
          break;
        case 313:
        case 314:
        case 312:
          $bg.css("background-image", "url(https://caravangirlblog.files.wordpress.com/2013/06/rain-3.jpg)");
          break;
        case 731:
        case 751:
        case 903:
          $bg.css("background-image", "url(https://craftodyssey.files.wordpress.com/2015/07/dust-cloud.jpg)");
          break;
        case 903:
          $bg.css("background-image", "url(https://herewego2011.files.wordpress.com/2011/01/frozen-lake.jpg)");
          break;
        case 781:
        case 900:
        case 902:
        case 962:
          $bg.css("background-image", "url(https://i.ytimg.com/vi/6h8043y-PwI/maxresdefault.jpg)");
          break;
        case 611:
        case 612:
        case 906:
          $bg.css("background-image", "url(https://i.ytimg.com/vi/AhBFanbd6Ng/maxresdefault.jpg)");
          break;
        case 232:
        case 231:
        case 200:
          $bg.css("background-image", "url(https://i.ytimg.com/vi/QG0h4xE2YCM/maxresdefault.jpg)");
          break;
        case 211:
          $bg.css("background-image", "url(https://i.ytimg.com/vi/lxSzLIbhB_A/maxresdefault.jpg)");
          break;
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
          $bg.css("background-image", "url(https://pacatatu.files.wordpress.com/2011/08/light_breeze.jpg)");
          break;
        case 221:
          $bg.css("background-image", "url(https://pdmphotos.files.wordpress.com/2012/09/arizona-2012-195404.jpg)");
          break;
        case 800:
        case 951:
          $bg.css("background-image", "url(https://tcklusman.files.wordpress.com/2014/05/tumblr_static_dark-starry-night-sky-226736.jpg)");
          break;
        case 210:
          $bg.css("background-image", "url(http://emanbilisim.com/weather4/javascript-premium-weather-widget/bins/assets/bg-thunderstorm-day.jpg)");
          break;
      }
    }
  }
  
  $(".temp-div").click(function(){ // doesn't work
    var fah;
    var cel;
    if (celsius === true) {
      fah = tempKelvin - 273.15; 
      fah *= 1.8;
      fah += 32;
      fah = Math.round(fah);
      $(this).find('#temp').text(fah + "°");
      console.log(celsius);
      $(this).find('#cel').removeClass("active-temp");
      $(this).find('#far').addClass("active-temp");
      celsius = false;
    } else {
      cel =  Math.round(tempKelvin - 273.15) + "°"; 
      $(this).find('#temp').text(cel);
      $(this).find('#cel').addClass("active-temp");
      $(this).find('#far').removeClass("active-temp");
      celsius = true;
    }
  });
  
  function degToCompass(num) {
    val= Math.round((num/22.5)+.5);
    arr=["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return arr[(val % 16)];
  }

	function formatTime(date) {
		var hrs, minutes;
		hrs = date.getHours();
		minutes = date.getMinutes();
		return hrs + ":" + minutes;
	}

	function formatWeatherData (results) {
		var currentDate, currentTime;
    assignBackgroundImage(results.weatherID, results.iconID);
		tempKelvin = results.temp;	// store original temp as global for later conversion
		results.temp = Math.round(results.temp - 273.15) + "°"; // convert celcius
		results.iconID = "http://openweathermap.org/img/w/" + results.iconID + ".png";
		results.sunrise = formatTime(new Date(results.sunrise * 1000));
		results.sunset = formatTime(new Date(results.sunset * 1000));
		results.windSpeed = Math.round(results.windSpeed * 2.2369) + "mph";
		// direction [7] / calculate compass direction. FUNCTION NEEDED
    results.windDirection = degToCompass(results.windDirection)
		currentDate = new Date().toDateString();
		currentTime = new Date().toTimeString();
    currentTime = String(currentTime);
		currentTime = currentTime.substring(0, currentTime.length-24);
    
		// then pass to DOM /// (future refining: wrap in div and loop over?)
		$("#city").text(results.name);
		$("#date").text(currentDate + " " + currentTime);
		$("#description").text(results.description + " ");
		$("#temp").text(results.temp);
    
		$("<img class= response src=" + results.iconID + ">").appendTo($("#imgWrap"));
		$("#sunrise").text(results.sunrise);
		$("#sunset").text(results.sunset);
		$("#windSpeed").text(results.windSpeed);
    $("#windDirection").text(results.windDirection);
    $("#title").hide();
		$(".response").show();		// once data ready, show
	}



	function callWeatherAPI(latitude, longitude) {
		var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=44db6a862fba0b067b1930da0d769e98";
		console.log(url);
		$.getJSON(url, function (weatherResponse){
			var resultsForFormatting = {};
			resultsForFormatting.name = weatherResponse.name,
			resultsForFormatting.description = weatherResponse.weather[0]["description"],
			resultsForFormatting.temp = weatherResponse.main["temp"],
			resultsForFormatting.iconID = weatherResponse.weather[0]["icon"],
      resultsForFormatting.weatherID = weatherResponse.weather[0]["id"],
			resultsForFormatting.sunrise = weatherResponse.sys["sunrise"],
			resultsForFormatting.sunset = weatherResponse.sys["sunset"],
			resultsForFormatting.windSpeed = weatherResponse.wind["speed"],
			resultsForFormatting.windDirection = weatherResponse.wind["deg"]
			// pass to function for formatting
      console.log(resultsForFormatting);
			formatWeatherData(resultsForFormatting);
		});
	}

  	function success(position) {
    	var latitude  = position.coords.latitude;
    	var longitude = position.coords.longitude;
    	var accuracy = position.coords.accuracy;
    	console.log(accuracy)
    	console.log("Lat and long" + latitude + longitude);
    	output.innerHTML = '<p></p>';

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

  	var geo_options = {
  		enableHighAccuracy: true
  	}

  	navigator.geolocation.getCurrentPosition(success, error, geo_options);



});