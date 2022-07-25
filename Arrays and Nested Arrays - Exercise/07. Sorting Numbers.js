function solve(input){
    
    input.sort(function(a, b) {
        return a - b;
      });
    

    let result = [];

    let rightCounter = input.length - 1;

    for (let i = 0, len = input.length / 2 ; i <= len; i++) {
        if (rightCounter == input.length / 2) {
            break;
        }
        result.push(input[i]);
        result.push(input[rightCounter]);
        rightCounter--;
    }

    
   return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,10]));
