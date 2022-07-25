function solve(arr, rotations) {
  for (let i = 0, len = rotations; i < len; i++) {
    let currentElement = arr.pop();
    arr.unshift(currentElement);
  }

  console.log(arr.join(" "));
}
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
