
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script type="text/javascript">
var geocoder;

if (navigator.geolocation) {
    var location_timeout = setTimeout("geolocFail()", 10000);

    navigator.geolocation.getCurrentPosition(function(position) {
        clearTimeout(location_timeout);

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        geocodeLatLng(lat, lng);
    }, function(error) {
          alert("inside error ");
        clearTimeout(location_timeout);
        geolocFail();
    });
} else {
      alert("Turn on the location service to make the deposit");
    // Fallback for no geolocation
    geolocFail();
}

function geolocFail(){
 alert("Turn on the location service to make the deposit");
 document.write("Turn on the location service to make the deposit");
}

{/* if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}
//Get the latitude and the longitude;
function successFunction(position) {
var lat = position.coords.latitude;
var lng = position.coords.longitude;
codeLatLng(lat, lng)

}
function errorFunction(){
alert("Geocoder failed");
}  */}

function initialize() {
geocoder = new google.maps.Geocoder();

}
function geocodeLatLng(lat, lng) {
var latlng = new google.maps.LatLng(lat, lng);
geocoder.geocode({'latLng': latlng}, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
console.log(results)
if (results[1]) {
//formatted address
var add= results[0].formatted_address
alert(add);

//city data
//alert(city.short_name + " " + city.long_name)

} else {
alert("No results found");
}
} else {
alert("Geocoder failed due to: " + status);
}
});
}
