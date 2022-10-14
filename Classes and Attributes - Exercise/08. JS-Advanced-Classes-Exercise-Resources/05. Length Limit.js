class Stringer {
    #initialString;
    constructor(stringElement,length) {
        this.innerString = stringElement;
        this.innerLength = length;
        this.#initialString = stringElement;
    }


    increase(length) {
        this.innerLength += length;
        return;
    }

    decrease(length){
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
            return;
        }

        this.innerLength -= length;
        return;
    }


    toString(){
        if (this.#initialString.length <= this.innerLength) {
            return this.#initialString;
        }

        let myTruncatedString = this.#initialString.substring(0,this.innerLength);

        if(myTruncatedString.length === 0){
            return '...';
        }

        return myTruncatedString + '...';
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
