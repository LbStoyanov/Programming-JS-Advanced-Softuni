function solve(input,order){
    let result = [];
    if (order === 'asc') {
        result = input.sort(function(a, b) {
                     return a - b;
                   })
    }else {
        result = input.sort(function(a, b) {
            return b - a;
          }) 
    }
    return result 
}

solve([14, 7, 17, 6, 8], 'desc');