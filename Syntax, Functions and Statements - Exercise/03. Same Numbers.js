function solve(num) {
  let initialNum = num;
  let flag = false;

  // Find the last digit
  let digit = num % 10;

  let digitSum = 0;

  while (num != 0) {
    // Find the current last digit
    var currentDigit = num % 10;

    // Update the value of num
    num = parseInt(num / 10);

    // If there exists any distinct
    // digit, then return False
    if (currentDigit != digit) {
      console.log("false");
      flag = true;
      break;
    }
  }

  if (!flag) {
    console.log("true");
  }

  const sum = initialNum
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  console.log(sum);

}

solve(1234);
