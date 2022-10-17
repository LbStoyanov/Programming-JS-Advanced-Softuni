window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById("make");
  let modelInput = document.getElementById("model");
  let yearInput = document.getElementById("year");
  let fuelInput = document.getElementById("fuel");
  let originalPriceInput = document.getElementById("original-cost");
  let sellingPriceInput = document.getElementById("selling-price");

  let tableEl = document.getElementById("table-body");
  const soldCarsEl = document.getElementById("cars-list");
  const totalProfit = document.getElementById("profit");
  let profitMade = 0;

  let publishBtn = document
    .getElementById("publish")
    .addEventListener("click", (e) => {
      e.preventDefault();

      if (
        makeInput.value !== "" &&
        modelInput.value !== "" &&
        yearInput.value !== "" &&
        fuelInput.value !== "" &&
        originalPriceInput.value !== "" &&
        sellingPriceInput.value !== ""
      ) {
        addPost(
          e,
          makeInput.value,
          modelInput.value,
          yearInput.value,
          fuelInput.value,
          originalPriceInput.value,
          sellingPriceInput.value
        );
        clearInputFileds();
      }
    });

  function addPost(e,
    makeInput,
    modelInput,
    yearInput,
    fuelInput,
    originalPriceInput,
    sellingPriceInput) {
      const tr = elGenerator("tr");
    tr.setAttribute("class", "row");
    elGenerator("td", `${makeInput}`, tr);
    elGenerator("td", `${modelInput}`, tr);
    elGenerator("td", `${yearInput}`, tr);
    elGenerator("td", `${fuelInput}`, tr);
    elGenerator("td", `${originalPriceInput}`, tr);
    elGenerator("td", `${sellingPriceInput}`, tr);
    const actionCell = elGenerator("td");
    tr.appendChild(actionCell);

    const editBtn = elGenerator("button", "Edit", actionCell);
    editBtn.setAttribute("class", "action-btn");
    editBtn.setAttribute("id", "edit");
    const sellBtn = elGenerator("button", "Sell", actionCell);
    sellBtn.setAttribute("class", "action-btn");
    sellBtn.setAttribute("id", "sell");

    tableEl.appendChild(tr);

    sellBtn.addEventListener("click", (ev) =>
      sellCar(
        ev,
        makeInput,
        modelInput,
        yearInput,
        originalPriceInput,
        sellingPriceInput
      )
    );
    editBtn.addEventListener("click", (ev) =>
      editPost(
        ev,
        makeInput,
        modelInput,
        yearInput,
        fuelInput,
        firstPriceInput,
        sellingPriceInput
      )
    );
  }

  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }

  function clearInputFileds() {
    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalPriceInput.value = "";
    sellingPriceInput.value = "";
  }

  function editPost(
    ev,
    _makeInputEl,
    _modelInputEl,
    _yearInputEl,
    _fuelInputEl,
    _firstPriceInputEl,
    _sellingPriceInputEl
  ) {
    ev.target.parentNode.parentNode.remove();

    makeInput.value = _makeInputEl;
    modelInput.value = _modelInputEl;
    yearInput.value = _yearInputEl;
    fuelInput.value = _fuelInputEl;
    firstPriceInput.value = _firstPriceInputEl;
    sellingPriceInput.value = _sellingPriceInputEl;
  }

  function sellCar(
    ev,
    _makeInputEl,
    _modelInputEl,
    _yearInputEl,
    _firstPriceInputEl,
    _sellingPriceInputEl
  ) {
    ev.target.parentNode.parentNode.remove();

    let profitForCurrentCar = _sellingPriceInput - _firstPriceInput;

    const soldLiEl = document.createElement("li");
    soldLiEl.className = "each-list";
    const carName = document.createElement("span");
    carName.textContent = _makeInputEl + " " + _modelInputEl;
    const carYear = document.createElement("span");
    carYear.textContent = _yearInputEl;
    const carProfit = document.createElement("span");
    carProfit.textContent = profitForCurrentCar;

    soldLiEl.appendChild(carName);
    soldLiEl.appendChild(carYear);
    soldLiEl.appendChild(carProfit);

    soldCarsEl.appendChild(soldLiEl);

    profitMade += profitForCurrentCar;

    totalProfit.textContent = profitMade;
  }
}
