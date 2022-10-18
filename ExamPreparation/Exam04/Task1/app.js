function solve() {
    document.getElementById('add-worker').addEventListener('click',hireWorker);


    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let budgetMessage = document.getElementById('sum');
    let sum = 0;

    function hireWorker(e){
        e.preventDefault();

        let fnValue = firstName.value;
        let lnValue = lastName.value;
        let emailValue = email.value;
        let birthValue = birth.value;
        let positionValue = position.value;
        let salaryValue = salary.value;

        sum += Number(salaryValue);

        let values = [fnValue, lnValue, emailValue,birthValue,positionValue, salaryValue];

        if (!fnValue || !lnValue || !emailValue || !birthValue || !positionValue || !salaryValue) {
            return;
        }

        let tr = document.createElement('tr');
        let tbody = document.getElementById('tbody');

        
        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.innerText = 'Fired';
        firedBtn.addEventListener('click',fired);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click',edit);

        for(let value of values){
            let td = document.createElement('td');
            td.innerText = value;
            tr.appendChild(td);
        }


        let td7 = document.createElement('td');
        td7.appendChild(firedBtn);
        td7.appendChild(editBtn);
        tr.appendChild(td7);

        tbody.appendChild(tr);


        budgetMessage.innerText = sum.toFixed(2);
       
        clearInputFields();
    }

    function fired(){
        let trForForDeletion = document.getElementById('tbody').children[0];

        firstName.value = trForForDeletion.children[0].textContent;
        lastName.value = trForForDeletion.children[1].textContent;
        email.value = trForForDeletion.children[2].textContent;
        birth.value = trForForDeletion.children[3].textContent;
        position.value = trForForDeletion.children[4].textContent;
        salary.value = trForForDeletion.children[5].textContent;
        sum -= salary.value;
        budgetMessage.innerText = sum.toFixed(2);

        trForForDeletion.remove();
    }

    function edit(){
        let trForForDeletion = document.getElementById('tbody').children[0];

        firstName.value = trForForDeletion.children[0].textContent;
        lastName.value = trForForDeletion.children[1].textContent;
        email.value = trForForDeletion.children[2].textContent;
        birth.value = trForForDeletion.children[3].textContent;
        position.value = trForForDeletion.children[4].textContent;
        salary.value = trForForDeletion.children[5].textContent;
        sum -= salary.value;
        budgetMessage.innerText = sum.toFixed(2);

        //trForForDeletion.remove();
    }


    function clearInputFields(){
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';
    }
}
solve()