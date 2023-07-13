// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  //5= 1,4,9,16,25
  let maxSquare= prompt('What number do you want the square series for?')
  let count=1
  let series=''

  while(count <= maxSquare){
  series=series+count*count+','
  count=count+1
  }
  alert('Series for'+maxSquare+'is:'+series)

}
