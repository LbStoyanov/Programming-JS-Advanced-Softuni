function addItem() {
    let inputElement = document.getElementById('newItemText').value;
    let itemElementsList = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement;
    itemElementsList.appendChild(liElement);

    let deleteButtonElement = document.createElement('a');
    deleteButtonElement.href = '#';
    deleteButtonElement.textContent = '[Delete]';
    deleteButtonElement.addEventListener('click',  (e) => {
        e.currentTarget.parentElement.remove();
    });

    liElement.appendChild(deleteButtonElement);
    
}