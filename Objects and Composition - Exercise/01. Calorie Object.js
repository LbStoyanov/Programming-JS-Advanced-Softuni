function solve(input){
    let inputArr = input;
    let result = {};

    for (let i = 0, len = inputArr.length; i < len; i+=2) {
            let currentItem = inputArr[i];
            let currentCalories = Number(inputArr[i + 1]);
            result[currentItem] = currentCalories;
          
    }
    
    console.log(result);
    
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);