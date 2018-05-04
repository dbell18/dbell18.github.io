let projectName = 'Book Assignment'
let projectURL = "http://www.arcgis.com/apps/MapTour/index.html?appid=12d4305fdc6b40d59961031c40a93394"
let projectInfo ='An interactive map to learn about the Baton Rouge area, along with other projects'
let projectThumb = false

let project1 =
{ number: 1,
  title: 'Book Assignment 1',
  hasThumbnail: true}
let project2 = {
  number: 2,
  title: 'Book Assignment 2',
  hasThumbnail: true
}
let project3=
{ number:3,
title: 'Book Assignment 3',
hasThumbnail: true}

let projects = [
  project1,
  project2,
  project3
]

for (let i = 0; i < projects.length; i++){
  console.log('Index position' + i + 'name' + projects[i].title)
  if (projects[i].hasThumbnail ===true) {
    console.log('BookAssignment'+ projects[i].number + '.png')
  }else{
    console.log('No images available')
  }
}
