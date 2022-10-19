const flowerShop = require('./flowerShop');
const assert = require('chai').assert;

describe("Tests flowerShop", function() {
    describe("Tests calcPriceOfFlowers", function() {
        it("Should throw error with no parameters ", function() {
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers();
              }, 'Invalid input!');
        });

        it("Should throw error with less parameters ", function() {
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers(1,2);
              }, 'Invalid input!');
        });

        it("Should throw error with non string  as first param ", function() {
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers(1,1,2);
              }, 'Invalid input!');
        });

        it("Should throw error with non int  as second param ", function() {
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers(1,1.1,2);
              }, 'Invalid input!');
        });

        it("Should throw error with non int  as thirt param ", function() {
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers(1,1,2.1);
              }, 'Invalid input!');
        });

        it("Should throw return correct result ", function() {
            let actual = flowerShop.calcPriceOfFlowers('rose',2,2);
            let expected = `You need $4.00 to buy rose!`;
            assert.equal(actual,expected);
        });

        it("Should throw return correct result ", function() {
            let actual = flowerShop.calcPriceOfFlowers('rose',2,2);
            let expected = `You need $4.00 to buy rose!`;
            assert.equal(actual,expected);
        });
     });


     describe('Tests checkFlowersAvailable', () => {
        it('Should return flower available ', () => {
            let gardenArr = ['Rose','Some flower'];
            let actual = flowerShop.checkFlowersAvailable('Rose',gardenArr);
            let expected = `The Rose are available!`;
            assert.equal(actual,expected);
        });

        it('Should return flower available ', () => {
            let gardenArr = ['Rose2','Some flower'];
            let actual = flowerShop.checkFlowersAvailable('Rose',gardenArr);
            let expected = `The Rose are sold! You need to purchase more!`;
            assert.equal(actual,expected);
        });
     });

     describe('Tests sellFlowers', () => {
        it('Should throw error with no parameters', () => {
            assert.throws(() => {
                flowerShop.sellFlowers();
              }, 'Invalid input!');
        });

        it('Should throw error with less parameters', () => {
            assert.throws(() => {
                flowerShop.sellFlowers(5);
              }, 'Invalid input!');
        });

        it('Should throw error with non arr as first parameter', () => {
            assert.throws(() => {
                flowerShop.sellFlowers('a5',5);
              }, 'Invalid input!');
        });

        it('Should throw error with non int as second parameter', () => {
            assert.throws(() => {
                flowerShop.sellFlowers(['roses'],5.5);
              }, 'Invalid input!');
        });

        it('Should throw error with negative int as second parameter', () => {
            assert.throws(() => {
                flowerShop.sellFlowers(['roses'],-5);
              }, 'Invalid input!');
        });

        it('Should throw error with higher int as second parameter', () => {
            assert.throws(() => {
                flowerShop.sellFlowers(['roses'],5);
              }, 'Invalid input!');
        });

        it('Should return correct array', () => {
            let gardenArr = ['Rose','Some flower','Another'];
            let actual = flowerShop.sellFlowers(gardenArr,2);
            let expected = `Rose / Some flower`;
            assert.equal(actual,expected);
        });
     });
     
});
