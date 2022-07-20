function solve(input){
    let result = [];
    input.sort((a,b)=>a-b);
    let middleIndex = Math.floor(input.length / 2);

    for (let i = 0, len = input.length; i < len; i++) {

        if (i >= middleIndex) {
            result.push(input[i]);
        }
    }

    return result;

}

console.log(solve([4, 7, 2, 5]));
