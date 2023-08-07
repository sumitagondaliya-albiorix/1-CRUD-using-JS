// // CRUD stands C-Create, R- Read/Retreive, U-Update/edit, D-Delete

// // var row = null; !row
// function Submit() {
//   var input = retrievedata();
//   var readData = fetchedData(input);

//   //  console.log(readData);

//   if (row == null) {
//     insert(readData);
//     msg.innerHTML = "Data Inserted";
//   } else {
//     update();
//     msg.innerHTML = "Data Inserted";
//   }
// }

// //C- Create
// // Retreiving Data from Form
// function retrievedata() {
//   var fname = document.getElementById("fname").value;
//   var lname = document.getElementById("lname").value;
//   var dob = document.getElementById("dob").value;

//   var arr = [fname, lname, dob];
//   return arr;
// }

// //Data in Local storage->Read
// function fetchedData(input) {
//   //Storing Data in Local storage
//   var filename = localStorage.setItem("Name", input[0]);
//   var lastname = localStorage.setItem("LastName", input[1]);
//   var dateofbirth = localStorage.setItem("DOB", input[2]);
//   //getting values from local storage to table
//   var n1 = localStorage.getItem("Name", filename);
//   var n2 = localStorage.getItem("LastName", lastname);
//   var d3 = localStorage.getItem("DOB", dateofbirth);
//   var arr = [n1, n2, d3];
//   return arr;
// }

// //Insert

// function insert(readData) {
//   var row = table.insertRow();
//   row.insertCell(0).innerHTML = readData[0];
//   row.insertCell(1).innerHTML = readData[1];
//   row.insertCell(2).innerHTML = readData[2];
//   // row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button>`;
//   //  `<button onclick = remove(this)>Delete</button>`;
//   row.insertCell(3).innerHTML = "hello";
// }
// //Edit Function

// function edit(td) {
//   var row = td.parentElement.parentElement;
//   document.getElementById("fname").value = row.cells[0].innerHTML;
//   document.getElementById("lname").value = row.cells[1].innerHTML;
//   document.getElementById("dob").value = row.cells[2].innerHTML;
// }

// //Update Function

// function update(td) {
//   row.cells[0].innerHTML = document.getElementById("fname").value;
//   row.cells[1].innerHTML = document.getElementById("lname").value;
//   row.cells[2].innerHTML = document.getElementById("dob").value;
//   row = null;
// }

function Submit() {
  Event.preventDefault();

  // Get form inputs
  const FName = document.getElementById("fname").value;
  const LName = document.getElementById("lname").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value;

  // Create a user object
  const user = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    address: address,
    // ... (other properties)
  };

  // Get existing data from local storage or initialize an empty array
  const existingData = JSON.parse(localStorage.getItem("userData")) || [];

  // Add the new user to the array
  existingData.push(user);

  // Save the updated data back to local storage
  localStorage.setItem("userData", JSON.stringify(existingData));

  // Clear the form fields
  document.getElementById("form").reset();

  // Update the table to reflect the new data
  updateTable();
}

function updateTable() {
  const table = document.getElementById("table");

  // Clear existing rows
  table.innerHTML = "<tr><td>First Name</td><td>Last Name</td>...</tr>";

  // Get data from local storage
  const userData = JSON.parse(localStorage.getItem("userData")) || [];

  // Iterate through the data and create table rows
  userData.forEach((user) => {
    const row = table.insertRow();
    row.insertCell().textContent = user.firstName;
    row.insertCell().textContent = user.lastName;
    // ... (insert other cells)
  });
}
window.onload = function () {
  updateTable();
};
