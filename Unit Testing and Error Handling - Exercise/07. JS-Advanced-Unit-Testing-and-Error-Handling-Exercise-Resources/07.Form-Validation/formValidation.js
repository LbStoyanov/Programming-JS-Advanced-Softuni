function validate() {
    let inputFields = document.getElementsByTagName('input');

    let usernameInput = inputFields[0].textContent;
    let email = inputFields[1];
    let password = inputFields[2];
    let confirmPass = inputFields[3];
    let isCompanyCheckbox = inputFields[4];
    let companyNumber = inputFields[5];

    console.log(usernameInput);
    
}
