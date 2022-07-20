function solve(pieArrInput, target1, target2) {

  const startTarget = pieArrInput.indexOf(target1);
  const endTarget = pieArrInput.indexOf(target2) + 1;

  let result = pieArrInput.slice(startTarget, endTarget);

  return result;
}

solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
