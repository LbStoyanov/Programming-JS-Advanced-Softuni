function solve(input){
    let circleArea;
    let wrongTypeMessage;
    let inputType = typeof(input);

    if (inputType === 'number') {
        circleArea =  Math.pow(input,2) * Math.PI;
        console.log(circleArea.toFixed(2));
    }else{
        wrongTypeMessage = `We can not calculate the circle area, because we receive a ${inputType}.`;
        console.log(wrongTypeMessage);
    }
}

solve('da');