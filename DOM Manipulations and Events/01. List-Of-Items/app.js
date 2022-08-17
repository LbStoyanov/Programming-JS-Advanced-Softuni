function addItem() {
  
  let itemsList = document.getElementById("items");

  let newItem = document.createElement("li");
  itemsList.appendChild(newItem);
//   newItem.textContent = 'opa';
//   console.log(itemsList);

  let itemText = document.getElementById("newItemText").value;
  newItem.textContent = itemText;
  //itemText.value = ' ';
  

  //newItem.textContent = itemText.textContent;
}
