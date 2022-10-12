function validate() {
  document.querySelector("#submit").type = "button";
  document.querySelector("#company").addEventListener("change", (e) => {
    console.log(e.target);
    if (document.querySelector("#company").checked) {
      document.querySelector("#companyInfo").style.display = "block";
    } else {
      document.querySelector("#companyInfo").style.display = "none";
    }
  });

  document.querySelector("#submit").addEventListener("click", (e) => {
    let validOut = [];
    let userName = document.querySelector("#username");
    let email = document.querySelector("#email");
    let passWord = document.querySelector("#password");
    let confirmPass = document.querySelector("#confirm-password");
    let checkBox = document.querySelector("#company");
    let userTest = /^[A-Za-z0-9]{3,20}$/;
    let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
    let passTest = /^[\w]{5,15}$/;


    if (userTest.exec(userName.value) === null) {
      userName.style.borderColor = "red";
      validOut.push(false);
    } else {
      userName.style.borderColor = "";
      validOut.push(true);
    }

    if (emailTest.exec(email.value) === null) {
      email.style.borderColor = "red";
      validOut.push(false);
    } else {
      email.style.borderColor = "";
      validOut.push(true);
    }

    if (
      passWord.value === confirmPass.value &&
      passTest.exec(confirmPass.value) != null &&
      passTest.exec(passWord.value) != null
    ) {
      confirmPass.style.borderColor = "";
      passWord.style.borderColor = "";
      validOut.push(true);
    } else {
      confirmPass.style.borderColor = "red";
      passWord.style.borderColor = "red";
      validOut.push(false);
    }

    if (checkBox.checked) {
      let company = document.querySelector("#companyNumber");
      if (company.value < 1000 || company.value > 9999) {
        company.style.borderColor = "red";
        validOut.push(false);
      } else {
        company.style.borderColor = "";
        validOut.push(true);
      }
    }

    if (!validOut.includes(false)) {
      document.querySelector("#valid").style.display = "block";
    } else {
      document.querySelector("#valid").style.display = "none";
    }
  });
}




/* function validate() {
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
 */