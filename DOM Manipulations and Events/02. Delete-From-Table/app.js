function deleteByEmail() {

    let emailInput = document.querySelector('input[name="email"]').value;
    

    let tableBodyElements = document.querySelectorAll('tr td:nth-of-type(2)');//Select every second td in a tr
                                                                             //document.querySelectorAll('tbody tr td'); select all td

    let emailArrayElements = Array.from(tableBodyElements);
    let targetEmail = emailArrayElements.find(x => x.textContent == emailInput);
    let result = document.getElementById('result');

    if (targetEmail == null) {
        result.textContent = 'Not found.';
    }else{
        targetEmail.parentNode.remove();
        result.textContent = "Deleted."
    }

}