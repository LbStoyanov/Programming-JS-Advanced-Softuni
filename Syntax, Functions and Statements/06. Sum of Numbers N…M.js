function solve(numN,numM){
	let sum = 0;
	let n = Number(numN);
	let m = Number(numM);

	for (let i = n;  i <= m; i++) {
		sum +=i;
	}

	console.log(sum);
}

solve(1,5);