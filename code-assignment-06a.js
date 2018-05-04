let bookAssignment = []

bookAssignment[0] = {
  number: 1,
  title: 'Book Assignment One',
  desc: 'An interactive map showing some features around the greater Baton Rouge area. Those included are Louisiana State University, the USS Kid, and the previous state capitol.',
  thumb: true
}

bookAssignment[1] = {
  number: 2,
  title: 'Book Assignment Two',
  desc: 'A Web Map comparing population growth in the 50 top cities in the US through recent years.',
  thumb: true
}
function createDescription (bookAssignment){
  let Description = 'Assignment ' + bookassignment.number + '-' + project.desc
  return Description
}

for (let i = 0; i < bookAssignment.length; i++){
  console.log('Index position' + i + 'name' + bookAssignment[i].title)
  if (bookAssignment[i].hasThumbnail ===true) {
    console.log('BookAssignment'+ projects[i].number + '.png')
  }else{
    console.log('No images available')
  }
}
