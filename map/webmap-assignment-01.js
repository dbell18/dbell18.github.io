//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('mappicture').setView([30.4583, -91.1403], 9)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
let marker = L.marker([30.4117, -91.18425]).addTo(mymap)
let polygon = L.polygon([
  [30.34227222, -91.22166667],
  [30.32926944, -91.02805556],
  [30.70777222, -90.8591667],
  [30.69195556, -91.26277778]
]).addTo(mymap)

marker.bindPopup('Louisiana State University Tiger Stadium')
polygon.bindPopup('East Baton Rouge Parish')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)

var latlngs = [
  [30.4117, -91.18425],
  [30.3892, -91.0879]
];
var polyline = L.polyline (latlngs, {color: 'purple'}).addTo(mymap);
map.fitBounds(polyline.getBounds());
