// CRUD stands C-Create, R- Read/Retreive, U-Update/edit, D-Delete

function Submit() {
  var input = retrievedata();
  var readData = fetchedData(input);
   insert(readData);
}

//C- Create
// Retreiving Data from Form
function retrievedata() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value;

  var arr = [fname, lname, dob];
  return arr;
}

//Data in Local storage
function fetchedData(input) {
  //Storing Data in Local storage

  var firstname = localStorage.setItem("Name", input[0]);
  var lastname = localStorage.setItem("LastName", input[1]);
  var dateofbirth = localStorage.setItem("DOB", input[2]);

  //getting values from local storage to table

  var n1 = localStorage.getItem("Name", firstname);
  var n2 = localStorage.getItem("LastName", lastname);
  var d3 = localStorage.getItem("DOB", dateofbirth);

  var arr = [n1, n2, d3];
  return arr;
}

//Insert 

function insert(readData){
    var row = details-table.insertRow();

}
