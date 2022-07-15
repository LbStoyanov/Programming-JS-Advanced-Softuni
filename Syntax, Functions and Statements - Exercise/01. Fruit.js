function solve(fruitType,weigthInGrams,priceForKg){

    let moneyNeeded = (weigthInGrams * priceForKg) / 1000;

    let weigthInKg = weigthInGrams / 1000;

    let result = `I need $${moneyNeeded.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruitType}.`;

    console.log(result);
}

solve('apple', 1563, 2.35);