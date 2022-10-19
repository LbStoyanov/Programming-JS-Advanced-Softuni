window.addEventListener("load", solve);

function solve() {
  document
    .querySelector('button[type="submit"]')
    .addEventListener("click", sendForm);
  document
    .getElementsByClassName("clear-btn")[0]
    .addEventListener("click", clear);

  let productType = document.getElementById("type-product");
  let description = document.getElementById("description");
  let name = document.getElementById("client-name");
  let phone = document.getElementById("client-phone");
  let sectionReceivedOrders = document.getElementById("received-orders");
  let sectionCompletedOrders = document.getElementById("completed-orders");

  function sendForm(e) {
    e.preventDefault();
    if (!description.value || !name.value || !phone.value) {
      return;
    }

    let div = document.createElement("div");
    div.classList.add("container");

    let h2 = document.createElement("h2");
    h2.innerText = `Product type of repair: ${productType.value}`;

    let h3 = document.createElement("h3");
    h3.innerText = `Client information: ${name.value}, ${phone.value}`;

    let h4 = document.createElement("h4");
    h4.innerText = `Description of the problem: ${description.value}`;

    let startBtn = document.createElement("button");
    startBtn.classList.add("start-btn");
    startBtn.innerText = "Start repair";
    startBtn.addEventListener("click", repairDevice);

    let finishBtn = document.createElement("button");
    finishBtn.classList.add("finish-btn");
    finishBtn.innerText = "Finish repair";
    finishBtn.disabled = true;
    finishBtn.addEventListener("click", finishRepair);

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(startBtn);
    div.appendChild(finishBtn);
    sectionReceivedOrders.appendChild(div);

    clearInputFields();
  }
  function clear() {

    const elements = document.getElementsByClassName('container');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  function finishRepair() {
    let div = document.getElementsByClassName("container")[0];

    div.children[3].remove();
    div.children[3].remove();

    sectionCompletedOrders.appendChild(div);
  }

  function repairDevice() {
    let div = document.getElementsByClassName("container")[0];
    div.children[3].disabled = true;
    div.children[4].disabled = false;
  }

  function clearInputFields() {
    description.value = "";
    name.value = "";
    phone.value = "";
  }
}
