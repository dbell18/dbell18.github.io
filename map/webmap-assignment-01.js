//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('mappicture').setView([51.505, -0.09], 13)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
let marker = L.marker([51.5, -0.09]).addTo(mymap)
let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap)

marker.bindPopup('London Bridge Station')
polygon.bindPopup('St. Katharine\'s and Wapping')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)

var latlngs = [
  [51.499233, -0.087204],
  [51.508529, -.081539]
];
var polyline = L.polyline (latlngs, {color: 'red'}).addTo(mymap);
map.fitBounds(polyline.getBounds());
