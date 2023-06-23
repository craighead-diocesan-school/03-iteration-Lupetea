// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = 5
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    alert('Who are the 5 attendees, list them below.')
    let attendee = prompt()
    attendeeList = attendeeList + attendee
    attendeeList = attendeeList + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  
  
  
}