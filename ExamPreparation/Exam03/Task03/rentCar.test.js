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

        it("Should throw error with no mathig elements", function() {
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
     
});
