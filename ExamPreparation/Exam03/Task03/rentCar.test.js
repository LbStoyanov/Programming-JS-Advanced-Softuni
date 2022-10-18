const rentCar = require('./rentCar');
const assert = require('chai').assert;

describe("Tests rentCar", function() {
    describe("Tests searchCar", function() {
        it("Should throw error with no array as first param", function() {
            assert.throws(() => {
                rentCar.searchCar('','test');
              }, 'Invalid input!');
        });

        it("Should throw error with no string as second param", function() {
            assert.throws(() => {
                rentCar.searchCar([],1);
              }, 'Invalid input!');
        });

        it("Should throw error with no params", function() {
            assert.throws(() => {
                rentCar.searchCar([]);
              }, 'Invalid input!');
        });

        it("Should throw error with no matchig elements", function() {
            assert.throws(() => {
                rentCar.searchCar(['AUDI','MERGEL'],'BMW');
              }, 'There are no such models in the catalog!');
        });


        it("Should return correct result", function() {
            let actual = rentCar.searchCar(['BMW','AUDI'],'AUDI');
            let expected = `There is 1 car of model AUDI in the catalog!`

            assert.equal(actual,expected);
        });
     });


     describe('Tests calculatePriceOfCar', () => {
        it('Should throw error with invalid model', () => {
            assert.throws(() => {
                rentCar.calculatePriceOfCar([],1);
              }, 'Invalid input!');
        });

        it('Should throw error with invalid days', () => {
            assert.throws(() => {
                rentCar.calculatePriceOfCar('audi',[]);
              }, 'Invalid input!');
        });

        it('Should throw error with missing or no input', () => {
            assert.throws(() => {
                rentCar.calculatePriceOfCar('audi');
              }, 'Invalid input!');
        });

        it('Should return Audi for 36$', () => {
            let actual = rentCar.calculatePriceOfCar('Audi',1);
            let expected = `You choose Audi and it will cost $36!`;
            assert.equal(actual,expected);
        });

        it('Should throw error No such car in catalog', () => {
            assert.throws(() => {
                rentCar.calculatePriceOfCar('audi',1);
              }, 'No such model in the catalog!');
        });
        
     });    
     

     describe('Tests checkBudget', () => {
        it('Should throw if first param is NOT integer', () => {
            assert.throws(() => {
                rentCar.checkBudget('audi',1,1);
              }, 'Invalid input!');
        });

        it('Should throw if second param is NOT integer', () => {
            assert.throws(() => {
                rentCar.checkBudget(1,'1',1);
              }, 'Invalid input!');
        });

        it('Should throw if thirt param is NOT integer', () => {
            assert.throws(() => {
                rentCar.checkBudget(1,1,'1');
              }, 'Invalid input!');
        });


        it('Should throw if missing param ', () => {
            assert.throws(() => {
                rentCar.checkBudget(1,1);
              }, 'Invalid input!');
        });
        

        it('Should return rent a car', () => {
            let actual = rentCar.checkBudget(1,1,1);
            let expected = `You rent a car!`;

            assert.equal(actual,expected);
        });

        it('Should return more budget needed', () => {
            let actual = rentCar.checkBudget(2,2,1);
            let expected = 'You need a bigger budget!';

            assert.equal(actual,expected);
        });
        
     });
     
});
