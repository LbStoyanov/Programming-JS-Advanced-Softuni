function toggle() {
    let button = document.querySelector('.button');
    let loremContext = document.querySelector('#extra');

    if (button.textContent === 'Less') {
        button.textContent = 'More';
        loremContext.style.display = 'none';
    }else{
        button.textContent = 'Less'
        loremContext.style.display = 'block';
    }
}