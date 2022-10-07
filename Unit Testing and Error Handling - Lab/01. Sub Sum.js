function solve(arr,startIndex,endIndex){

    if (!Array.isArray(arr)) {
        return NaN;
    }

   let start = Math.max(startIndex,0);
   let end = Math.min(endIndex,arr.length - 1);

    let subNums = arr.slice(start,end + 1);

    let sum = subNums.reduce((a,x) => a + Number(x),0);

    return sum;
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));