// Get the objects we need to modify
let addPersonForm = document.getElementById('add-person-form');

// Modify the objects we need
addPersonForm.addEventListener("submit", function (e) {
    
    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputFirstName = document.getElementById("input-fname");
    let inputLastName = document.getElementById("input-lname");
    let inputHomeworld = document.getElementById("input-homeworld");
    let inputAge = document.getElementById("input-age");

    // Get the values from the form fields
    let firstNameValue = inputFirstName.value;
    let lastNameValue = inputLastName.value;
    let homeworldValue = inputHomeworld.value;
    let ageValue = inputAge.value;

    // Put our data we want to send in a javascript object
    let data = {
        fname: firstNameValue,
        lname: lastNameValue,
        homeworld: homeworldValue,
        age: ageValue
    }
    
    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-person", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            console.log("The entry was successfully added!")
        }
        else if (this.readyState == 4 && this.status != 200) {
            console.log("There was an error with the input.")
        }
    }
})