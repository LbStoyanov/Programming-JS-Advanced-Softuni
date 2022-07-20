function solve(numArr){
    let result = [];
    numArr.sort((a,b)=>a-b);
    result.push(numArr[0]);
    result.push(numArr[1]);

    console.log(result.join(' '));
    
}

solve([3, 0, 10, 4, 7, 3]);