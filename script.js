let toulouseLocation = {lat: 43.604390, lon: 1.443379};
let map = L.map('map');
map.setView(toulouseLocation, 19);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// Create marker group, making it an overlay
greenMarkerGroup = new L.LayerGroup();
redMarkerGroup = new L.LayerGroup();
map.addLayer(greenMarkerGroup);
map.addLayer(redMarkerGroup);

let greenOverlay = {'Green markers': greenMarkerGroup};
let redOverlay = {'Red markers' : redMarkerGroup};

L.control.layers(null, greenOverlay).addTo(map);
L.control.layers(null, redOverlay).addTo(map);

let selectedOverlay = '';
map.on('overlayadd', (e) => {
  selectedOverlay = e.name;
});

//add markers on click, all markers belong to a group (above)
map.on('click', (e) => {
  console.log(selectedOverlay);
  switch(selectedOverlay) {
    case 'Green markers': {
      addGreenMarker(e);
      break;
    };
    case 'Red markers': {
      addRedMarker(e);
      break;
    };
  }
});

function addGreenMarker(e){
  // Add marker to map at click location; add popup window
  var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  let newMarker = new L.marker(e.latlng, {icon: greenIcon}).addTo(map);
  greenMarkerGroup.addLayer(newMarker);
}

function addRedMarker(e){
  // Add marker to map at click location; add popup window
  var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  let newMarker = new L.marker(e.latlng, {icon: redIcon}).addTo(map);
  redMarkerGroup.addLayer(newMarker);
}

// show a marker on the map
// L.marker(toulouseLocation).bindPopup('Tolosa is the number one').addTo(map);

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

// map.on('LocationEvent', onLocationFound); // are locationfound and locationEvent depricated or strictly functional on a mobile device ?