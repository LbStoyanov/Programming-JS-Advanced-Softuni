function solve() {
    document.getElementById('add').addEventListener('click',addToTheList);
    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');

    function addToTheList(){
        let ul = document.getElementById('list');

        let li = document.createElement('li');

        let firsth4 = document.createElement('h4');
        firsth4.textContent = `Title: ${title.value}`;
        
        let secondh4 = document.createElement('h4');
        secondh4.textContent = `Recipient Name: ${recipientName.value}`;


    }
}
solve()