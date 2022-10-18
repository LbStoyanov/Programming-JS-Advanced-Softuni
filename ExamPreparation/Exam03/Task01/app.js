function solve() {
    document.getElementById('add').addEventListener('click',addToTheList);
    document.getElementById('reset').addEventListener('click',cleareInputFields);
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');

    let recipientValue;
    let titleValue;

    function addToTheList(e){
        recipientValue = recipientName.value;
        titleValue = title.value;
        e.preventDefault();

        if (!recipientName.value || !title.value || !message.value) {
            return;
        }

        let ul = document.getElementById('list');

        let li = document.createElement('li');

        let firsth4 = document.createElement('h4');
        firsth4.textContent = `Title: ${title.value}`;

        let secondh4 = document.createElement('h4');
        secondh4.textContent = `Recipient Name: ${recipientName.value}`;

        let span = document.createElement('span');
        span.textContent = message.value;

        let div = document.createElement('div');
        div.setAttribute('id','list-action');

        let sendBtn = document.createElement('button');
        sendBtn.innerText = 'Send';
        sendBtn.setAttribute('id', 'send');
        sendBtn.addEventListener('click',send);

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.setAttribute('id','delete');
        deleteBtn.addEventListener('click',deleteEmail);

        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        li.appendChild(firsth4);
        li.appendChild(secondh4);
        li.appendChild(span);
        li.appendChild(div);

        ul.appendChild(li);

        cleareInputFields();


    }

    function deleteEmail(){

        let ul = document.getElementsByClassName('delete-list')[0];
        let li = document.createElement('li');

        let span1 = document.createElement('span');
        span1.textContent = `To: ${recipientValue}`;

        let span2 = document.createElement('span');
        span2.textContent = `Title: ${titleValue}`;

        li.appendChild(span1);
        li.appendChild(span2);

        ul.appendChild(li);

      
        let listOfMails = document.getElementById('list');;
        listOfMails.remove(); 
    }

    function send(){
      
        let ul = document.getElementsByClassName('sent-list')[0];

        let span1 = document.createElement('span');
        span1.textContent = `To: ${recipientValue}`;

        let span2 = document.createElement('span');
        span2.textContent = `Title: ${titleValue}`;


        let div = document.createElement('div');
        div.classList.add('btn');

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';
        
        deleteBtn.addEventListener('click',deleteEmailTest);

        div.appendChild(deleteBtn);

        let li = document.createElement('li');

        li.appendChild(span1);
        li.appendChild(span2);
        li.appendChild(div);

        ul.appendChild(li);

       

        let listOfMails = document.getElementById('list');
        listOfMails.remove();

    }

    function deleteEmailTest(){
        
        let ul = document.getElementsByClassName('delete-list')[0];

        let li = document.createElement('li');

        let span1 = document.createElement('span');
        span1.textContent = `To: ${recipientValue}`;

        let span2 = document.createElement('span');
        span2.textContent = `Title: ${titleValue}`;

        li.appendChild(span1);
        li.appendChild(span2);
        ul.appendChild(li);

        document.getElementsByClassName('sent-list')[0].remove();
        
    }

    

    function cleareInputFields(){
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }
}
solve()