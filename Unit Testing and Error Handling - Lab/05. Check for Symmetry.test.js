let isSymmetric = require('./05. Check for Symmetry');
let expect = require('chai').expect;

describe ('General tests', () => {
    describe ('Is the input in correct type', () =>{
        it('Should return false', () => {
            expect(isSymmetric({})).to.equal(false);
        });

        it('Should return false', () => {
            expect(isSymmetric()).to.equal(false);
        });

        it('Should return false', () => {
            expect(isSymmetric([])).to.equal(true);
        });

        it('Should return false', () => {
            expect(isSymmetric('op')).to.equal(false);
        });

        it('Should return false', () => {
            expect(isSymmetric(5)).to.equal(false);
        });

        it('Should return false', () => {
            expect(isSymmetric(false)).to.equal(false);
        });

        it('Should return true', () => {

            expect(isSymmetric([1,2,3,2,1])).to.equal(true);
        });
        
        it('Should return false', () => {

            expect(isSymmetric([1,2,3,1,1])).to.equal(false);
        });

        it('should return true on isSymmetric([[1,2], [2], [1,2]])', () => {
            expect(isSymmetric([[1,2], [2], [1,2]])).to.be.true;
        });


    })
})