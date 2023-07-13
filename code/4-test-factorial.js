// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  // 5!= 5* 4* 3* 2* 1= 120


  let factorial= prompt('Give me a number to factorial')
  let count= factorial


  while (count> 1){
    total= total*count
    count=count-1
  }
  alert('The factorial of'+factorial+'is'+total)
}

