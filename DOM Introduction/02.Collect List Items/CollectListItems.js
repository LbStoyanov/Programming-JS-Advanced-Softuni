function extractText() {
    let ulItems = document.getElementById('items');

    let textArea = document.getElementById('result');
    textArea.textContent = ulItems.textContent;

    //console.log(listItems);
}