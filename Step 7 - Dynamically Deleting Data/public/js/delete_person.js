function deletePerson(personID) {
  let link = '/delete-person/';
  link += personID;
  $.ajax({
    url: link,
    type: 'DELETE',
    success: function(result) {
      deleteRow(personID);
    }
  })
}

function deleteRow(personID){

    let table = document.getElementById("people-table");
    for (let i = 0, row; row = table.rows[i]; i++) {
       //iterate through rows
       //rows would be accessed using the "row" variable assigned in the for loop
       if (table.rows[i].getAttribute("data-value") == personID) {
            table.deleteRow(i);
            break;
       }
    }
}
