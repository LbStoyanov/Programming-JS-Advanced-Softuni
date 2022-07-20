function solve(input) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0, len = input.length; row < len; row++) {
        let internalArr = input[row];
        for (let col = 0, len = internalArr.length; col < len; col++) {
            let currentNum = Number(input[row][col]);
            mainDiagonalSum += currentNum;
            row++;
        }
    }

    for (let row = 0, len = input.length; row < len; row++) {
        let internalArr = input[row];
        for (let col = internalArr.length - 1, len = 0 ; col >= len; col--) {
            let currentNum = Number(input[row][col]);
            secondaryDiagonalSum += currentNum;
            row++;
        }
    }

    const result = [mainDiagonalSum,secondaryDiagonalSum];

    return result.join(' ');
    
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );
