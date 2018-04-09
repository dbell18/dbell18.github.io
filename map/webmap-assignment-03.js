let map3 = L.map('mappicture').setView([30.4583, -91.1403], 9)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(map3)


let myInterestPoint = L.icon({
  iconUrl: 'redpin.png',//next two lines, find your own pics,
  iconSize: [38, 38], // size of the icon // size of the shadow
  iconAnchor: [20, 31], // point of the icon which will correspond to marker's location// the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
//step 5
//alternative step 5 let markerCoords = [coordinates]
//let markerOptions = {icon: myGreenIcon}
let mypoint = L.marker([30.4117, -91.18425], {icon: myInterestPoint}).addTo(map3)
//whatever you named your icon})
//step 6

let polygonCoords = [
  [30.34227222, -91.22166667],
    [30.32926944, -91.02805556],
    [30.70777222, -90.8591667],
    [30.69195556, -91.26277778]]

    let objectStyle = {
      color: 'purple',
      fillColor: 'yellow',
      weight: 6,
      opacity: .5
    }

let myPolygon = L.polygon(polygonCoords, objectStyle).addTo(map3)


    //let polygonCoords = [ blah blah blah]
    //let myStyle= { blah blah blah}
    //let polygon = L.polygon(,).addTo(mymap)
