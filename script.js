let toulouseLocation = {lat: 43.604390, lon: 1.443379};
let map = L.map('map').setView(toulouseLocation, 19);
// let map = L.map('map');

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// show a marker on the map
L.marker(toulouseLocation).bindPopup('Tolosa is the number one').addTo(map);

/**
 * Find current location
 */

// callback function on locationFound event
// function onLocationFound(e) {
//     var radius = e.accuracy;
//     L.marker(e.latlng).addTo(map)
//         .bindPopup("You are within " + radius + " meters from this point").openPopup();
//     L.circle(e.latlng, radius).addTo(map);
// }

// map.on('locationfound', onLocationFound);