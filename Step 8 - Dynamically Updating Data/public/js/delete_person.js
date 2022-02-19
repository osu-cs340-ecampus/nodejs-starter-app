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
            deleteDropDownMenu(personID);
            break;
       }
    }
}


function deleteDropDownMenu(personID){
  let selectMenu = document.getElementById("mySelect");
  for (let i = 0; i < selectMenu.length; i++){
    if (Number(selectMenu.options[i].value) === Number(personID)){
      selectMenu[i].remove();
      break;
    } 

  }
}

