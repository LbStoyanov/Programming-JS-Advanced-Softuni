function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove',gradientMouseoverHandler);
    gradientElement.addEventListener('mouseout', gradientOut);
    
    function gradientMouseoverHandler(event) {
        let percentageBar = event.offsetX / (event.target.clientWidth - 1);

        percentageBar = Math.trunc(percentageBar * 100);
        resultElement.textContent = percentage + "%";
    };
 
    
    function gradientOut(event) {
        resultElement.textContent = '';
    }
}
