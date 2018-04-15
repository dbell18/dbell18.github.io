function mappicture () {
let mymap = L.map('mappicture').setView([39, -98], 3)
mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(mymap)//new name
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
  function myPopup (feature, layer) {
    let name = feature.properties.STATE_NAME
    let pop = feature.properties.POPULATION
    let male = feature.properties.MALES
    let female = feature.properties.FEMALES
    layer.bindPopup('Population of ' + name + ':' + pop + '<br>National Median of Population: 6174910' + '<br>Number of males in ' + name + ':' + male + '<br>Number of females in ' + name + ':' + female)

  }
  let myOptions = {
    style: pageDecor,
    onEachFeature: myPopup
  }
  L.geoJSON(coordinates, myOptions).addTo(mymap)
}
mappicture()



//in the index script src = "stateDemographics.js"
