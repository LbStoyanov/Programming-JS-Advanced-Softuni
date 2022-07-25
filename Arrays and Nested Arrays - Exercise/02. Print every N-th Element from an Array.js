function solve(inputArr, numN) {
  let result = [];
  let counter = 0;
  result.push(inputArr[0]);

  for (let i = 0, len = inputArr.length; i < len; i++) {
    if (counter === numN) {
      result.push(inputArr[i]);
      counter = 0;
    }

    counter++;
  }

  return result.join('\n');

//   for (let element of result) {
//     console.log(element);
//   }
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
