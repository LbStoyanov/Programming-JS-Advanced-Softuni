function validate() {

    let inputField = document.getElementById('email');

    let reg = /^[a-z][a-z]+@[a-z]+.[a-z]+$/;

    inputField.addEventListener('change', checkEmail);

    function checkEmail(event){

        if(reg.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }

        event.target.className = 'error';
    }
}