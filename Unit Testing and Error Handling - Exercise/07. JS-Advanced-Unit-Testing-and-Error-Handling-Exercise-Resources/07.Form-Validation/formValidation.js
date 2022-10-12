function validate() {
  let inputFields = document.getElementsByTagName("input");

  let usernameInput = inputFields[0];

  let emailInput = inputFields[1];

  let passwordInput = inputFields[2];
  let confirmPassInput = inputFields[3];

  let isCompanyCheckbox = inputFields[4];
  let companyNumber = inputFields[5];

  usernameInput.addEventListener("change", (e) => {
    let username = e.target.value;
    let regex = new RegExp("^[a-zA-Z0-9]{3,20}$");'[/8'

    if (!regex.test(username)) {
      usernameInput.style.borderColor = "red";
    } else {
      usernameInput.style.borderColor = "none";
    }
  });

  emailInput.addEventListener("change", (e) => {
    let email = e.target.value;
    let regex = new RegExp("w*[@].*?[.]{1,}w*");

    if (!regex.test(email)) {
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.borderColor = "none";
    }
  });

  let password;
  let confirmedPassword;

  passwordInput.addEventListener("change", (e) => {
    debugger;
    password = e.target.value;
    let pattern = new RegExp("^w{5,15}$");

    if (!pattern.test(password)) {
        console.log('Nema takava parola');
    }else{
        console.log('Vajish Baio');
    }
  });

  confirmPassInput.addEventListener("change", (e) => {
    confirmedPassword = e.target.value;

    if (password === confirmedPassword) {
      confirmPassInput.style.borderColor = "none";
    } else {
      confirmPassInput.style.borderColor = "red";
    }
  });
}
