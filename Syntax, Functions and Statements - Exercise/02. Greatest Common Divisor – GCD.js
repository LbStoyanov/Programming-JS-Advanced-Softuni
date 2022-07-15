// function greatestCommonDivisor(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//     return false;
//   x = Math.abs(x);
//   y = Math.abs(y);
//   while(y) {
//     var t = y;
//     y = x % y;
//     x = t;
//   }
//   console.log(x);
// }

// greatestCommonDivisor(100, 40);

// Second Solution
function solve(a,b){
    let firstNum = Number(a);
    let secondNum = Number(b);

    while(firstNum !== secondNum){
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        }else{
            secondNum -= firstNum;
        }
    }

    console.log(firstNum);
}

solve(15,5)