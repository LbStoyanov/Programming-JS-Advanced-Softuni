function getFibonator(){
    let firstNum = 0;
    let secondNum = 1;

    return ()=>{
        let thirtNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirtNum;
        return firstNum;

    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());