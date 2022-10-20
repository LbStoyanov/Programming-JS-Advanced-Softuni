const library = require('./library');
const assert = require('chai').assert;

describe("Tests library", function() {
    describe("Tests calcPriceBook", function() {
        it("Throw error with no parameters", function() {
            assert.throws(()=>{
                library.calcPriceOfBook();
            },'Invalid input')
        });

        it("Throw error with only first parameter", function() {
            assert.throws(()=>{
                library.calcPriceOfBook('Chuguneniq princ');
            },'Invalid input')
        });

        it("Throw error with only second parameter", function() {
            assert.throws(()=>{
                library.calcPriceOfBook(5);
            },'Invalid input')
        });

        it("Throw error with non string as first parameter", function() {
            assert.throws(()=>{
                library.calcPriceOfBook(6,5);
            },'Invalid input')
        });

        it("Throw error with non integer as second parameter", function() {
            assert.throws(()=>{
                library.calcPriceOfBook('Opa',5.5);
            },'Invalid input')
        });

        it("Throw error with non integer as second parameter", function() {
            assert.throws(()=>{
                library.calcPriceOfBook(5.5,'Opa');
            },'Invalid input')
        });

        it("Throw error with non integer as second parameter", function() {
            assert.throws(()=>{
                library.calcPriceOfBook(5,'Opa');
            },'Invalid input')
        });

        it("Should apply 50% discount on the price", function() {
          let actual = library.calcPriceOfBook('IT',1960);
          let expected = "Price of IT is 10.00";
          assert.equal(actual,expected);
        });

        it("Should NOT apply discount on the price", function() {
            let actual = library.calcPriceOfBook('IT',1981);
            let expected = "Price of IT is 20.00";
            assert.equal(actual,expected);
          });
     });

     describe('tESTS findBook', () => {
        it('Should throw error with empty array', () => {
            assert.throws(()=>{
                library.findBook([],'IT');
            },'No books currently available')
        });

        it('Should return book not found', () => {
           let actual = library.findBook(['IT','IT2','IT3'],'IT4');
           let expected = "The book you are looking for is not here!";
           assert.equal(actual,expected);
        });

        it('Should return book is found', () => {
            let actual = library.findBook(['IT','IT2','IT3'],'IT3');
            let expected = "We found the book you want.";
            assert.equal(actual,expected);
         });
     });

     describe('Test arrangeTheBooks', () => {
        it('Should throw error with no params', () => {
            assert.throws(()=>{
                library.arrangeTheBooks();
            },'Invalid input');
        });

        it('Should throw error with not integer param', () => {
            assert.throws(()=>{
                library.arrangeTheBooks([]);
            },'Invalid input');
        });

        it('Test with non integer', () => {
            assert.throws(()=>{
                library.arrangeTheBooks(5.5);
            },'Invalid input');
        });

        it('Test with non integer', () => {
            assert.throws(()=>{
                library.arrangeTheBooks(-5);
            },'Invalid input');
        });
        


        it('Should return library ordered', () => {
         let actual = library.arrangeTheBooks(30);
         let expected = "Great job, the books are arranged.";
         assert.equal(actual,expected);
        });

        it('Should return no space', () => {
            let actual = library.arrangeTheBooks(50);
            let expected = "Insufficient space, more shelves need to be purchased.";
            assert.equal(actual,expected);
           });
     });
     
});
