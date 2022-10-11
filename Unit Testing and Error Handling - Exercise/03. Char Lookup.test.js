const lookupChar = require('./03. Char Lookup');
//const expect = require('chai'). expect;
const assert = require('chai').assert;

describe('lookupChar tests', () => {
    it('Should return undefined with no parameters', () => {
        assert.equal(lookupChar(),undefined);
    });

    it('Should return undefined with only one valid parameter', () => {
        assert.equal(lookupChar(5),undefined);
        assert.equal(lookupChar('ab'),undefined);
    });

    it('Should return undefined when first parameter is not a string', () => {
        assert.equal(lookupChar(1,5),undefined);
        assert.equal(lookupChar({},5),undefined);
        assert.equal(lookupChar([],5),undefined);
    });


    it('Should return undefined when second parameter is not an integer', () => {
        assert.equal(lookupChar('ab',5.5),undefined);
        assert.equal(lookupChar('ab',[]),undefined);
        assert.equal(lookupChar('ab',{}),undefined);
    });

    it('Should return Incorrect index when second parameter is less than 0', () => {
        assert.equal(lookupChar('ab',-1),'Incorrect index');
    });

    it('Should return Incorrect index If string length is less than or equal to the index', () => {
        assert.equal(lookupChar('ab',3),'Incorrect index');
        assert.equal(lookupChar('ab',2),'Incorrect index');
    });

    it('Should return the char at the input index', () => {
        assert.equal(lookupChar('ab',1),'b');
    });
    
});