function solve(num, o1, o2, o3, o4, o5) {
  let inputNum = Number(num);
  let commandsArr = [o1, o2, o3, o4, o5];

  let chop = function () {
    return inputNum / 2;
  };

  let dice = function () {
    return Math.sqrt(inputNum);
  };

  let spice = function () {
    return inputNum+1;
  };

  let bake = function () {
    return inputNum * 3;
  };

  let fillet = function () {
    return  inputNum * 0.80;
    //inputNum -= inputNum * 0.20;
           
  };

  for (let i = 0; i < commandsArr.length; i++) {
    
    let currentCommand = commandsArr[i];

    if (currentCommand == 'chop') {
        inputNum = chop(inputNum);
        console.log(inputNum);
    }else if (currentCommand == 'dice') {
        inputNum = dice(inputNum);
        console.log(inputNum);
    }else if (currentCommand == 'spice') {
        inputNum = spice(inputNum);
        console.log(inputNum);
    }else if (currentCommand == 'bake') {
        inputNum = bake(inputNum);
        console.log(inputNum);
    }else if (currentCommand == 'fillet') {
        inputNum = fillet(inputNum);
        console.log(inputNum);
    }
  }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
