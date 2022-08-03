function solve(input) {
  let result = input.sort((a, b) => a.localeCompare(b));

  let currentArr = [];
  let currentChar = "";

  for (let index = 0; index < result.length; index++) {
    currentArr = result[index].split(" : ");

    if (result[index][0] !== currentChar) {
      console.log(result[index][0]);
    }

    console.log(`  ${currentArr[0]}: ${currentArr[1]}`);

    currentChar = result[index][0];
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

//     let uniqueChars = [...new Set(letters)].sort();

//    for (const iterator of uniqueChars) {

//         let arr = result.filter(x => x.productName[0] === iterator)
//         console.log(`${iterator} \n`);
//         for (const key in arr) {
//             let test = arr[key];
//            console.log(test);
//         }

//    }
