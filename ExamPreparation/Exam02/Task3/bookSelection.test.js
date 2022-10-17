const bookSelection = require('./bookSelection');
const assert = require('chai').assert;

describe("Tests bookSelection", function() {
    describe("Test isGenreSuitable", function() {

        it("Should not suitable Thriller", function() {
            let actual = bookSelection.isGenreSuitable('Thriller',12);
            let expected = "Books with Thriller genre are not suitable for kids at 12 age";
            assert.equal(actual,expected);
        });

        it("Should not suitable Horror", function() {
            let actual = bookSelection.isGenreSuitable('Horror',12);
            let expected = "Books with Horror genre are not suitable for kids at 12 age";
            assert.equal(actual,expected);
        });

        it("Should  suitable Horror ", function() {
            let actual = bookSelection.isGenreSuitable('Horror',13);
            let expected = "Those books are suitable";
            assert.equal(actual,expected);
        });


        it("Should  suitable Thriller ", function() {
            let actual = bookSelection.isGenreSuitable('Thriller',13);
            let expected = "Those books are suitable";
            assert.equal(actual,expected);
        });
     });

     describe('Tests isItAffordable', () => {
        it("Should  throw error when price not a number ", function() {
            //let actual = bookSelection.isItAffordable('15',13);
            let expected = "Invalid input";
            assert.throws(() => {
                bookSelection.isItAffordable('1',1);
              }, expected);
        });

        it("Should  throw error when budget not a number ", function() {
            //let actual = bookSelection.isItAffordable('15',13);
            let expected = "Invalid input";
            assert.throws(() => {
                bookSelection.isItAffordable(1,'1');
              }, expected);
        });


        it("Should  return no money ", function() {
            let actual = bookSelection.isItAffordable(10,3);
            let expected = "You don't have enough money";
            assert.equal(actual,expected);
        });

        it("Should  return book bought ", function() {
            let actual = bookSelection.isItAffordable(10,33);
            let expected = `Book bought. You have ${23}$ left`;
            assert.equal(actual,expected);
        });
     });


     describe('Tests suitableTitles', () => {
        it("Should  throw error with no array ", function() {
            let expected = "Invalid input";
            assert.throws(() => {
                bookSelection.suitableTitles('','');
              }, expected);
        });
     });

});
