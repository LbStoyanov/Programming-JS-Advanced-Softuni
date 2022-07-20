function solve(input){
    
    let result = '';
    
    for (let i = 0, len = input.length; i < len; i++) {
        if (i % 2 == 0) {
            result += input[i] + ' ';
        }
    }

    console.log(result);
}

solve(['20', '30', '40', '50', '60']);