let thismap = L.map('mappicture').setView([39, -98], 4)
let topography = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(thismap)
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

L.control.layers(diffMaps).addTo(thismap)
//in the inndex script src = "stateDemographics.js"
function mappicture () {
thismap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
//new name
//let stateDemographics = {Luke's coords or not (put it in another file by right clicking map folder, new file
//.js in the new file you can do the let = whatever and paste in the Geojson)}
function pageDecor (feature) {
  let male = feature.properties.MALES
  let female = feature.properties.FEMALES
  let color = '#89cff0'
  if (male < female) {
    color = '#F4C2C2'
  }
  let pageDecor = {
    color: color,
    opacity: 1.3,
    fillOpacity: .4,
    weight: 1.5,
    stroke: true
  }
  return pageDecor
  }
  function bubble (feature, layer) {
    let name = feature.properties.STATE_NAME
    let pop = feature.properties.POPULATION
    let male = feature.properties.MALES
    let female = feature.properties.FEMALES
    layer.bindPopup('Population of ' + name + ':' + pop + '<br>National Median of Population: 6174910' + '<br>Number of males in ' + name + ':' + male + '<br>Number of females in ' + name + ':' + female)

  }
  let choices = {
    style: pageDecor,
    onEachFeature: bubble
  }
  L.geoJSON(coordinates, choices).addTo(thismap)
}
mappicture()
