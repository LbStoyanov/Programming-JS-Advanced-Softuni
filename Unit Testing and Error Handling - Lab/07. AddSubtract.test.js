const createCalculator = require('./07. AddSubtract');
const expect = require('chai').expect;

describe('Main tests', () => {

    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    describe('Should return correct values',()=>{
        
        it("should return 0 for get;", function () {
            let value = calc.get();
            expect(value).to.be.equal(0);
        });

        it("should return 5 for get;", function () {
            calc.add(5);
            let value = calc.get();
            expect(value).to.be.equal(5);
        });

        it("should return 4 for get;", function () {
            calc.add(5);
            calc.subtract(1);
            let value = calc.get();
            expect(value).to.be.equal(4);
        });

        it("should return -1 for get;", function () {
            calc.subtract(5);
            let value = calc.get();
            expect(value).to.be.equal(-5);
        });

        it("should return NaN for add(string)", function () {
            calc.add('hello');
            let value = calc.get();
            expect(value).to.be.NaN;
        });

        it("should return NaN for subtarct(string)", function () {
            calc.subtract('hello');
            let value = calc.get();
            expect(value).to.be.NaN;
        });
        
    })
});
