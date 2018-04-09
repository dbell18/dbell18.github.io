let mymap = L.map('mappicture').setView([39, -98], 4)
let topography = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)
let night = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}')
let nature = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

let myBasemaps = {
  'Day map': topography,
  'Night map': night,
  'Nature map': nature
}

>.control.layers(myBasemaps).addTo(mymap)
//in the inndex script src = "stateDemographics.js"
let stateStyle = function (state){
  let age = state.properties.MED_AGE
  let stateColor= 'Olive'
  if (age < 38) {color = 'green'}
let formatting = {
color: 'orange',
weight: 10
}
return formatting
}
let creataePopup = function (state, layer) {
  let name = feature.properties.STATE_NAME
 let age = feature.properties.MED_AGE
 layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}
let StateOptions = {
  style: stateStyle,
  onEachFeature
}
L.geoJson(stateCoordinates, stateOptions).addTo(mymap)//new name
