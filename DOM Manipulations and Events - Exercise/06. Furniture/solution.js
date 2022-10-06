function solve() {
  let buttons = document.getElementsByTagName("button");
  let generateButton = buttons[0];
  let buyButton = buttons[1];

  generateButton.addEventListener("click", generate);

  buyButton.addEventListener("click", buy);

  function generate(e) {
    let currentItems = JSON.parse(
      document.querySelectorAll("textarea")[0].value
    );

    let tableBody = document.getElementsByTagName("tbody")[0];

    for(let item of currentItems){
      let rowToAdd = document.createElement("tr");
      rowToAdd.innerHTML = `<td><img src=${item.img}></td>` +
                            `<td><p>${item.name}</p></td>` +
                            `<td><p>${item.price}</p></td>`+
                            `<td><p>${item.decFactor}</p>` +
                            `</td><td><input type="checkbox">`;

      tableBody.appendChild(rowToAdd);
    }
   
  }

  function buy(e) {
    let resultArea =document.querySelectorAll("textarea")[1];
    let table = Array.from(document.querySelectorAll("tbody tr"));
    let result = [];
    for(let el of table){
      if(el.querySelector("input[type=checkbox]:checked")){
        
      }
    }
  }
}
