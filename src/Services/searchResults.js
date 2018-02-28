export function getLocation(){
	let location = {latitude: 0 , longitude: 0}
	// Ask user for permission to use location services
	  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{

        location.latitude = position.coords.latitude
         location.longitude = position.coords.longitude
        console.log(location.latitude)
    	});
      } else {
 		alert('Sorry your browser doesn\'t support the Geolocation API');

      }
      return location;

}

export function fetchCurrentLocation(position){
	    console.log(position.coords)
        return position.coords
}



 /*getCity(pos.latitude, pos.longitude).then(function(city){
      currentCity = city;
      console.log("Current city: ", currentCity);
    }).catch(function(err) {
      console.log('Error retrieving the current city: ', err);
    });

    getWeather(pos.latitude, pos.longitude).then(function(weather){
      currentWeather = weather;
      console.log("Current weather: ", currentWeather, "°F");
    }).catch(function(err){
      console.log('Error retrieving the current weather: ', err);
    })  */


  /* The API works but has no result

  export function fetchLocation(){

	const google_api ='AIzaSyAR9_HMLChf4WdyDIX3ZuDF6pZYqi9aZDI'// process.env.GOOGLE_KEY;
	console.log("api " + google_api);
	let url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${google_api}`
	let location
	location = fetch(url).then((result) =>{
 		 result.json();
			}
	)
     console.log(location)
     return location
}*/

export function fetchResults(){

}