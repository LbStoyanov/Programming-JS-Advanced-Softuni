function solve(input) {
  let result = [];

  for (let i = 0, len = input.length; i < len; i++) {
    if (i % 2 == 1) {
      result.push(input[i] * 2);
    }
  }

  result.reverse();
  return result.join(" ");
}
console.log(solve([10, 15, 20, 25]));
