function solve(input) {
  let biggestElement = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < input.length; i++) {
    var cube = input[i];
    for (var j = 0; j < cube.length; j++) {
      if (cube[j] > biggestElement) {
        biggestElement = cube[j];
      }
    }
  }

  return biggestElement;
}

console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ]));
