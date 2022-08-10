function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    
    let secondNum = document.getElementById('secondNumber').value;
    let result = document.getElementById('result');
    let sum = firstNum - secondNum;
    
    result.textContent = sum;
    console.log(sum);
}