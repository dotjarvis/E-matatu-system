///////////////// FIRST INTERACTION

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

// /////////////////SECOND INTERATION

// let x = navigator.geolocation;

// x.getCurrentPosition(success, failure);

// function success(position) {
//   const myLat = position.coords.latitude;
//   const myLong = position.coords.longitude;

//   const coords = new google.maps.LatLng(myLat, myLong);

//   const mapOptions = {
//     zoom: 10,
//     center: coords,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//   };
//   // The marker, positioned at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   const marker = new google.maps.Marker({
//     map: map,
//     position: coords,
//   });
// }

// function failure() {}

// ///////////////////////// THIRD INTERACTION

// // Initialize and add the map
// function initMap() {
//   // map option
//   const options = { center: { lat: -25.344, lng: 131.031 }, zoom: 10 };

//   // New Map
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10,
//     center: { lat: -25.344, lng: 131.031 },
//   });

//   // // Marker
//   // const marker = new google.maps.Marker({
//   //   position: { lat: -25.344, lng: 131.031 },
//   //   map: map,
//   //   icon: "location.svg",
//   // });

//   // // InfoWindow
//   // const detailWindow = new google.maps.InfoWindow({
//   //   content: "<h4> Location City City</h4>",
//   // });

//   // marker.addListener("click", () => {
//   //   detailWindow.open(map, marker);
//   // });

//   function addMarker(location) {
//     const marker = new google.maps.Marker({
//       position: location,
//       map: map,
//       icon: "location.svg",
//     });
//   }

//   addMarker({ lat: 37.99, lng: -1.1307 });
//   addMarker({ lat: 37.99, lng: -1.1307 });
// }

// window.initMap = initMap;

//
//
//
//
//
//
//
//
//
//

// ///// HIS CODES
// function initMap() {
//   // Map option

//   var options = {
//     center: { lat: 38.346, lng: -0.4907 },
//     zoom: 10,
//   };

//   //New Map
//   let map = new google.maps.Map(document.getElementById("map"), options);

//   //listen for click on map location

//   google.maps.event.addListener(map, "click", (event) => {
//     //add Marker
//     addMarker({ location: event.latLng });
//   });

//   //Add Markers to Array

//   let MarkerArray = [
//     {
//       location: { lat: 37.9922, lng: -1.1307 },
//       imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
//       content: `<h2>Murcia City</h2>`,
//     },

//     { location: { lat: 39.4699, lng: -0.3763 } },

//     {
//       location: { lat: 38.5411, lng: -0.1225 },
//       content: `<h2>Benidorm City</h2>`,
//     },
//   ];

//   // loop through marker
//   for (let i = 0; i < MarkerArray.length; i++) {
//     addMarker(MarkerArray[i]);
//   }

//   // Add Marker

//   function addMarker(property) {
//     const marker = new google.maps.Marker({
//       position: property.location,
//       map: map,
//       //icon: property.imageIcon
//     });

//     // Check for custom Icon

//     if (property.imageIcon) {
//       // set image icon
//       marker.setIcon(property.imageIcon);
//     }

//     if (property.content) {
//       const detailWindow = new google.maps.InfoWindow({
//         content: property.content,
//       });

//       marker.addListener("mouseover", () => {
//         detailWindow.open(map, marker);
//       });
//     }
//   }
// }

// window.initMap = initMap;

//
//
//
//
//
// CHECKNG IT OUT

// /////////////////LAST UNDERSTAND

// let x =
navigator.geolocation.getCurrentPosition(success, failure);

function success(position) {
  console.log(position);
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
