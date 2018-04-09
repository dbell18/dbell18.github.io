let mymap = L.map('mappicture').setView([39, -98], 4)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)//new name
//let stateDemographics = {Luke's coords or not (put it in another file by right clicking map folder, new file
//.js in the new file you can do the let = whatever and paste in the Geojson)}

//in the inndex script src = "stateDemographics.js"
let stateStyle = function (state){
  let age = state.properties.MED_AGE
  let stateColor= 'Olive'
  if (age < 38) {stateColor = 'green'}
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
