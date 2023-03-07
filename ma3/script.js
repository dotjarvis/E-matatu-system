// // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// window.initMap = initMap;

let x = navigator.geolocation;

x.getCurrentPosition(success, failure);

function success(position) {
  const myLat = position.coords.latitude;
  const myLong = position.coords.longitude;

  const coords = new google.maps.LatLng(myLat, myLong);

  const mapOptions = {
    zoom: 10,
    center: coords,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  // The marker, positioned at Uluru
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const marker = new google.maps.Marker({
    map: map,
    position: coords,
  });
}

function failure() {}
