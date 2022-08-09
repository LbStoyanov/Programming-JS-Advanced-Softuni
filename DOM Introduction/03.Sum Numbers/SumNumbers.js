function calc() {
    // TODO: sum = num1 + num2

    let firsNumElement = document.getElementById('num1');
    let secondNumElement = document.getElementById('num2');
    let result = document.getElementById('sum');
    let firstNum = Number(firsNumElement.value);
    let secondNum = Number(secondNumElement.value);

    let sum = firstNum + secondNum;

    result.value = sum;

    //console.log(firstNum + secondNum);
}
