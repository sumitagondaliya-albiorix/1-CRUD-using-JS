let id = "";
// localStorage.clear();
selectData();
function manageData() {
  const names = localStorage.getItem("names");

  let name = document.getElementById("name").value;
  let lname = document.getElementById("lname").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  const user = {
    fname: name,
    lname: lname,
    gender: gender,
    address: address,
    dob: dob,
  };
  const users = [];
  users.push(user);

  if (!names) {
    localStorage.setItem("names", JSON.stringify(users));
  } else {
    const tempData = JSON.parse(localStorage.getItem("names"));

    tempData.push(user);
    localStorage.setItem("names", JSON.stringify(tempData));
  }
}

//   document.getElementById("msg").innerHTML = "";
//   let name = document.getElementById("name").value;
//   if (name == "") {
//     document.getElementById("msg").innerHTML = "Enter Your First name";
//   } else {
//     if (id == "") {
//       let array = JSON.parse(localStorage.getItem("Name"));
//       if (array == null) {
//         // let data = [name];
//         localStorage.setItem("Name", JSON.stringify(name));
//       }
//     } else {
//       array.push(name);
//       localStorage.setItem("Name", JSON.stringify(array));
//     }
//   }
// }
selectData();
function selectData() {
  let array = JSON.parse(localStorage.getItem("names"));
  if (array != null) {
    let table = "";
    let sno = 1;
    for (let key in array) {
      table =
        table +
        `<tr><td>${array[sno]}</td><td>${array[key]}</td><td><a href="javascript:void(0)" onclick="deleteData(${key})">Delete</a></td>
        <td>${array[key]}</td><td><a href="javascript:void(0)" onclick="editData(${key})">Edit</a></td></tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = table;
  }
}

function editData(id) {
  let array = fetchData();
  debugger;
  document.getElementById("name").values = array[id];
}

function deleteData(id) {
  let array = fetchData();
  array.splice(id, 1);
  selectData();
}
function fetchData() {
  return JSON.parse(localStorage.getItem("user"));
}
