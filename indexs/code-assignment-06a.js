let projectNumber = 1
let projectName = 'Book Assignment 1'
let projectURL = "http://www.arcgis.com/apps/MapTour/index.html?appid=12d4305fdc6b40d59961031c40a93394"
let projectInfo ='An interactive map to learn about the Baton Rouge area, along with other projects'
let projectThumb = false

console.log(projecNumber)
console.log(projectName)
console.log(projectURL)
console.log(porjectInfo)
console.log(projectThumb)

console.log('Number: ' projectNumber)
console.log( 'Name: ' + projectName)
console.log('URL: ' + projectURL)
console.log('Information: ' + projectInfo)
console.log('Has thumbnail? ' + projectThumb)


let projectArray = [
  projectNumber,
  projectName,
  projectURL,
  projectInfo
]

let projectObject = {
  number: projectNumber
  name: projectName,
  url: projectURL,
  info: projectInfo}

console.log(projectArray[2])
console.log(projectObject.name)
console.log(projectObject['name'])

let projectData = []

let project1 =
{ number: 1
title: Book Assignment 1
hasThumbnail: true}
let project2 = {
  number: 2
  title: Book Assignment 2
  hasThumbnail: true
}
let project3=
{ number:3
title: Book Assignment 3
hasThumbnail: true}

let projects = [
  project1,
  project2,
  project3
]

for (let i = 0; i < projects.length; i++){
  console.log('Index position' + i + 'name' + projectData[i].name)
  if (projectData[i].thumb ===true) {
    console.log('images'+ projectData[i].number + '.png')
  }else{
    console.log('No images available')
  }
}

function describeProject (project) {
  let description = project 'is an assignment.'
  return description
}

let myFavoriteProject = '2'
let description = describeProject(myFavoriteProject)
console.log(description)
