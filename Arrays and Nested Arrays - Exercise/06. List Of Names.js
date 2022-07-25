function solve(arr){
    
    arr.sort();
    let counter = 1;

    for (let name of arr) {
        console.log(`${counter}.${name}`);
        counter++;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);