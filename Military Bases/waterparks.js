//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('mappicture').setView([37.092, -95.7129], 4)
let topography = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
let night = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
});
let nature = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

let diffMaps = {
  'Day map': topography,
  'Night map': night,
  'Nature map': nature
}
L.control.layers(diffMaps).addTo(mymap)
new L.GeoJSON(mapping).addTo(mymap);

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mymap.on('click', logCurrentCoordinates)


var planes = [
  ["Schlitterbahn",29.713,-98.1249],
  ["Ocean Oasis",38.9887,-74.8013],
  ["Shipwreck Island",30.1932,-85.8271],
  ["Ravine Waterpark",35.6459,-120.6434],
  ["NRH2O",32.8502,-97.1947],
  ["Waldameer Park",42.1077,-80.1561],
  ["Enchanted Forest Water Safari",43.7172,-74.9666],
  ["Slidewaters",47.8342,-120.0364],
  ["Lost Island",42.4432,-92.3129],
  ["Wilderness Territory",43.5869,-89.7818],
  ["Dollywood's Splash Country Water Adventure Park",35.8069,-83.5344],
  ["Splash Lagoon",42.048295,-80.077922],
  ["Kahuna Laguna",44.041,-71.1214],
  ["Water Country USA",37.2627,-76.6369],
  ["Morey's Piers and Beachfront Water Parks",38.9857,-74.8094],
  ["Noah's Ark Water Park",43.6036,-89.7863],
  ["Splashin'Safari",38.1209,-86.9128],
  ["Aquatica",28.4156,-81.456],
  ["Blizzard Beach",28.3516,-81.5752],
  ["Typhoon Lagoon",28.3658,-81.5296]
  ]
var drop = L.icon({
  iconUrl: 'https://www.colourbox.com/preview/19212473-water-rain-drop-flat-pin-map-icon-weather.jpg',
  iconSize:[25,25]
});
  for (var i = 0; i < planes.length; i++) {
    marker = new L.marker([planes[i][1],planes[i][2]],{icon: drop}).addTo(mymap)
      .bindPopup(planes[i][0])
      .addTo(mymap);}
