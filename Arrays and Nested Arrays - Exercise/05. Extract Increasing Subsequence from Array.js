function solve(arr) {
  let result = [];
  let currentBiggestElement = arr[0];
  result.push(currentBiggestElement);

  for (let i = 1, len = arr.length; i <= len; i++) {
    let currentElement = arr[i];
    if (currentElement > currentBiggestElement) {
      result.push(currentElement);
      currentBiggestElement = currentElement;
    }
  }

  console.log(result.join("\n"));
}
solve([20, 3, 2, 15, 6, 1]);
