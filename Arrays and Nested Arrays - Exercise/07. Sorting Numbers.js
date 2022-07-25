function solve(input){
    input.sort();

    let result = [];

    let rightCounter = input.length - 1;


    for (let i = 0, len = input.length / 2; i < len; i++) {
        if (rightCounter == input.length / 2 - 1) {
            break;
        }
        result.push(input[i]);
        result.push(input[rightCounter]);
        rightCounter--;

    }

    console.log(result.join('\n'));
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]