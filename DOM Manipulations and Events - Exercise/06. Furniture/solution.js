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
      rowToAdd.innerHTML = `<td>
                              <img src=${item.img}>
                            </td>
                            <td>
                              <p>${item.name}</p>
                            </td>
                            <td>
                              <p>${item.price}</p>
                            </td>
                            <td>
                              <p>${item.decFactor}</p>
                            </td>
                            <td>
                              <input type="checkbox">
                            </td>
                            `;
                            
      //let td = document.createElement("td");
      //let img = document.createElement("img");
      // img.setAttribute("src", item.img);
      // td.appendChild(img);
      // rowToAdd.appendChild(td);
      // let townTd = document.createElement("td");
      // let townName = document.createElement("p");
      // townName.innerText = item.name;
      // townTd.appendChild(townName);
      // rowToAdd.appendChild(townTd);
      tableBody.appendChild(rowToAdd);
    }
   
  }

  function buy(e) {}
}
