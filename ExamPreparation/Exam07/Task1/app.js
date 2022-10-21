window.addEventListener('load', solve);

function solve() {
    document.getElementById('add').addEventListener('click',addFurniture);
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let yearPriceValue = [];
    let totalFurniturePrice = 0;
    

    function addFurniture(e){
        
        e.preventDefault();
        if (!model.value || year.value < 0 || !description.value || price.value < 0) {
            return;
        }
        yearPriceValue[0] = year.value;
        yearPriceValue[1] = description.value;
        yearPriceValue[2] = price.value;

        let tbody = document.getElementById('furniture-list');
        
        let tr = document.createElement('tr');
        tr.classList.add('info');

        let td1 = document.createElement('td');
        td1.innerText = model.value;

        let td2 = document.createElement('td');
        td2.innerText = Number(price.value).toFixed(2);

        let td3 = document.createElement('td');
        
        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.innerText = 'More Info';
        moreInfoBtn.addEventListener('click',showInfo);
        
        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.innerText = 'Buy it';
        buyBtn.addEventListener('click',buyProduct);

        td3.appendChild(moreInfoBtn);
        td3.appendChild(buyBtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbody.appendChild(tr);
        clearInputFields();
    }

    function buyProduct(){
        debugger;
        let tbody = document.getElementById('furniture-list').children;
        let currPrice = Number(yearPriceValue[2]);
        debugger
        totalFurniturePrice += currPrice;
        let total = document.getElementsByClassName('total-price')[0];
        total.innerText = `${totalFurniturePrice.toFixed(2)}`;

        tbody[0].remove();
    }

    function showInfo(){
        let tbody = document.getElementById('furniture-list');
        let showBtn = document.getElementsByClassName('moreBtn')[0];
        showBtn.innerText = 'Less info';

        let tr = document.createElement('tr');
        tr.classList.add('hide');
        tr.style.display = 'contents';
       
        let td1 = document.createElement('td');
      
        td1.innerText = `Year: ${yearPriceValue[0]}`;
        let td2 = document.createElement('td');
        td2.colSpan = 3;
        td2.innerText = `Description: ${yearPriceValue[1]}`;
        tr.appendChild(td1);
        tr.appendChild(td2);

        tbody.appendChild(tr);

     

    }

    function clearInputFields(){
        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }
}
