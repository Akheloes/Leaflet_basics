let toulouseLocation = {lat: 43.604390, lon: 1.443379};
let map = L.map('mapid').setView(toulouseLocation, 19);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// show a marker on the map
L.marker(toulouseLocation).bindPopup('The center of the world').addTo(map);