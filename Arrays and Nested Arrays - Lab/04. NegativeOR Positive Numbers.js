function solve(input){
    let result = [];

    for (let i = 0, len = input.length; i < len; i++) {
        if (input[i] >= 0) {
            result.push(input[i]);
        }else{
            result.unshift(input[i]);
        }
    }


    //consol.log(result.join('\n'));
    
    for (const num of result) {
        console.log(num);
    }
}

solve([3, -2, 0, -1]);