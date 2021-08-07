mapboxgl.accessToken = 'pk.eyJ1Ijoic2hha3Rpc2luZ2gyNyIsImEiOiJja3J5c21yanEwa3pnMm9vOWUwa3gxN21lIn0.9Ew3EURPGIB4JTywf0r1qw';

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//   enableHighAccuracy: true
// })

// function successLocation(position) {
//   setupMap([position.coords.longitude, position.coords.latitude])
// }

// function errorLocation() {
//   setupMap([-2.24, 53.48])
// }

// function setupMap(center) {
//   const map = new mapboxgl.Map({
//     container: "map",
//     //style: "mapbox://styles/mapbox/streets-v11",
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: center,
//     zoom: 15

//   })

//   const marker = new mapboxgl.Marker({
//     color: "#FFFFFF",
//     draggable: true
//   }).setLngLat([position.coords.longitude, position.coords.latitude])
//     .addTo(map);




//   const nav = new mapboxgl.NavigationControl()
//   map.addControl(nav)

//   var directions = new MapboxDirections({
//     accessToken: mapboxgl.accessToken
//   })

//   map.addControl(directions, "top-left")

//   /////////////////////////////////
//   const geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
//   });


//   map.addControl(geocoder, "top-right")


// }
let lon = "";
let lat = "";
const successLocation = (position) => {
  //   console.log(position);
  lon=position.coords.longitude;
  lat=position.coords.latitude;
  setupMap([lon,lat]);
  enableHighAccuracy: true;

};

const errorLocation = () => {
  setupMap([-2.24, 53.48]);
};

const setupMap = (center) => {
  const map = new mapboxgl.Map({
    container: "map",
    //style: "mapbox://styles/mapbox/navigation-night-v1",
    style: "mapbox://styles/mapbox/satellite-streets-v11",
    zoom: 8,
    center,
  });

  const marker = new mapboxgl.Marker({
    color: "red",
    draggable: true
  }).setLngLat([lon,lat])
    .addTo(map);

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "bottom-right");

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");

  map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
    );
    map.addControl(geocoder);
};

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});



