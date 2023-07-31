// <!-- JavaScript Logic -->

  //Adding items to list and populating table
  function update() {
    var titleVal = document.getElementById("title_id").value;
    var descVal = document.getElementById("description").value;
    console.log(titleVal);
    console.log(descVal);

    // Add items into the arr
    if (localStorage.getItem("itemsJson") == null) {
      console.log("updating list");
      let itemsJsonArr = [];
      itemsJsonArr.push([titleVal, descVal]);
      localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArr));
    } else {
      itemsJsonArrStr = localStorage.getItem("itemsJson");
      itemsJsonArr = JSON.parse(itemsJsonArrStr);
      itemsJsonArr.push([titleVal, descVal]);
      localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArr));
    }

    //diplay items in to do list
    //Get tablebody to modify its innerHTML
    var str = "";
    itemsJsonArr.forEach((element, index) => {
      str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="button_cls" onclick="deleteItem(${index})">Delete</button></td>
            </tr>`;
    });
    document.getElementById("tableBody_id").innerHTML = str;
  }
  var addButton = document.getElementsByClassName("button_cls2")[0];
  addButton.addEventListener("click", update);

  //Onload function is used to display existing items in list (table) when opened newly/ when browser is loaded
  function onLoad() {
    if (localStorage.getItem("itemsJson") == null) {
      console.log("updating list");
      let itemsJsonArr = [];
      localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArr));
    } else {
      itemsJsonArrStr = localStorage.getItem("itemsJson");
      itemsJsonArr = JSON.parse(itemsJsonArrStr);
      localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArr));
    }

    //diplay items in to do list
    //Get tablebody to modify its innerHTML
    var str = "";
    itemsJsonArr.forEach((element, index) => {
      console.log("element print");
      console.log(element[0]);
      str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="button_cls" onclick="deleteItem(${index})">Delete</button></td>
            </tr>`;
    });
    document.getElementById("tableBody_id").innerHTML = str;
  }
  onLoad();

  //Delete Items function
  function deleteItem(itemIndex) {
    console.log("deleted");
    itemsJsonArrStr = localStorage.getItem("itemsJson");
    itemsJsonArr = JSON.parse(itemsJsonArrStr);
    itemsJsonArr.splice(itemIndex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArr));
    onLoad();
  }

  //Reset Button
  document.getElementById("reset_id").addEventListener("click", resetList);
  //Reset list of items added
  function resetList() {
    if (confirm("Do you really want to delete all items from the list ?")) {
      console.log("reseted");
      localStorage.clear();
      onLoad();
      onLoad();
    }
  }
