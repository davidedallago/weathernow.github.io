$(".search").on("change keyup paste", function() {
  let = SEARCH_TERM = $(".search").val();
  let UNITS = "metric" // TODO: Check what the user selected and pass it to the url
  const API_KEY = 'e24552fa091342f7f4e86823c3f8ddce'
  const SEARCH_URL = `https://api.openweathermap.org/data/2.5/weather?q=${SEARCH_TERM}&units=${UNITS}&appid=${API_KEY}`

  $.get(SEARCH_URL, function(res) {
    if (res) {
      document.getElementById("location_name").innerHTML = res['name'] + ", " + res['sys']['country'];
      document.getElementById("location_temp").innerHTML = res['main']['temp'];
      document.getElementById("location_temp_max").innerHTML = res['main']['temp_max'];
      document.getElementById("location_temp_min").innerHTML = res['main']['temp_min'];
    }
  });
});
