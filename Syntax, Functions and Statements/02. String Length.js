function solve(firstInput,secondInput,thirthInput){
    let firstLength = firstInput.length;
    let secondLength = secondInput.length;
    let thirthLength = thirthInput.length;

    let sum = firstLength + secondLength + thirthLength;
    let result = Math.floor(sum / 3);
    console.log(sum);
    console.log(result);
}

solve('chocolate', 'ice cream', 'cake');
 