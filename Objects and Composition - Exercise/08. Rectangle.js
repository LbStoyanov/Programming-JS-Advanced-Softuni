function rectangle(width,height,color){
    let colorWithCapital = color.charAt(0).toUpperCase() + color.slice(1);
    let result = {
        width: Number(width),
        height: Number(height),
        color: colorWithCapital,
        calcArea: function () {
            return this.width * this.height;
        }
    }

    return result;

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
