function solve(input) {
    let innerCollection = [];
     return function proccessCollection(){
        for(let text of input){

            let currentInfo = text.split(" ");
            let currentCommand = currentInfo[0];
            let currentText = currentInfo[1];

            if (currentCommand === 'add') {
                innerCollection.push(currentText);
            }else if (currentCommand === 'remove') {
                innerCollection = innerCollection.filter(x => x !== currentText);
            }else{
                console.log(innerCollection.join(","));
            }
        }

        return innerCollection.join(",");
    }
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
console.log(solve(["add hello", "add again", "remove hello", "add again", "print"]));
