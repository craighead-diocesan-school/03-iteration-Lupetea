// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {

  alert('Give me a maximum number that this program will count to from 0')
  let answer= prompt()
  let count = answer
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}