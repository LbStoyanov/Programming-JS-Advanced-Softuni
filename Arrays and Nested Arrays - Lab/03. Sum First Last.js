function solve(input){
    let firstNum = Number(input.shift());
    let secondNum = Number(input.pop());

    let result = firstNum + secondNum;

    return result;
}

console.log(solve(['20', '30', '40']));;