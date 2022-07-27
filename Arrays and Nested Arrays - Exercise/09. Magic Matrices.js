function solve(inputNestedArr) {
  let sum = inputNestedArr[0].reduce((a, b) => a + b);

  for (let i = 0, len = inputNestedArr[0].length; i < len; i++) {
    let sumCol = 0;

    for (let j = 0, len = inputNestedArr.length; j < len; j++) {
      sumCol += inputNestedArr[j][i];
    }

    if (sumCol !== sum) {
      return false;
    }
  }

  return true;
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
