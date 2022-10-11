const mathEnforcer = require('./04. Math Enforcer');
const assert = require('chai').assert;

describe('mathEnforcer', () => {
    describe('addFive function tests', () => {
        
        it('Should return undefined when parameter IS  NOT a number', () => {
            assert.equal(mathEnforcer.addFive(),undefined);
            assert.equal(mathEnforcer.addFive('12'),undefined);
            assert.equal(mathEnforcer.addFive([]),undefined);
            assert.equal(mathEnforcer.addFive({}),undefined);
            assert.equal(mathEnforcer.addFive(undefined),undefined);
            assert.equal(mathEnforcer.addFive(null),undefined);
        });

        it('Positive integer + 5', () => {
            assert.equal(mathEnforcer.addFive(5),10);
        });

        it('Positive floating point + 5', () => {
            assert.equal(mathEnforcer.addFive(5.5),10.5);
        });

        it('Negativ integer + 5', () => {
            assert.equal(mathEnforcer.addFive(-5),0);
        });

        it('Negativ floating point + 5', () => {
            assert.equal(mathEnforcer.addFive(-5.5),-0.5);
        });

    });

    describe('substractTen function tests', () => {

        it('Should return undefined when parameter IS  NOT a number', () => {
            assert.equal(mathEnforcer.subtractTen(),undefined);
            assert.equal(mathEnforcer.subtractTen('12'),undefined);
            assert.equal(mathEnforcer.subtractTen([]),undefined);
            assert.equal(mathEnforcer.subtractTen({}),undefined);
            assert.equal(mathEnforcer.subtractTen(undefined),undefined);
            assert.equal(mathEnforcer.subtractTen(null),undefined);
        });

        it('Positive integer - 10', () => {
            assert.equal(mathEnforcer.subtractTen(15),5);
        });

        it('Negative integer - 10', () => {
            assert.equal(mathEnforcer.subtractTen(-15),-25);
        });

        it('Positive decimal - 10', () => {
            assert.equal(mathEnforcer.subtractTen(15.5),5.5);
        });

        it('Negative decimal - 10', () => {
            assert.equal(mathEnforcer.subtractTen(-15.5),-25.5);
        });

       
    });

    describe('sum function tests', () => {
       
        it('Should return undefined with only one parameter', () => {
            assert.equal(mathEnforcer.sum(),undefined);
            assert.equal(mathEnforcer.sum(1),undefined);
            assert.equal(mathEnforcer.sum('1'),undefined);
            assert.equal(mathEnforcer.sum([]),undefined);
            assert.equal(mathEnforcer.sum({}),undefined);
            assert.equal(mathEnforcer.sum(undefined),undefined);
            assert.equal(mathEnforcer.sum(null),undefined);
        });

        it('Should return undefined when first param IS NOT a number', () => {
            assert.equal(mathEnforcer.sum('1',1),undefined);
            assert.equal(mathEnforcer.sum([],1),undefined);
            assert.equal(mathEnforcer.sum({},1),undefined);
            assert.equal(mathEnforcer.sum(undefined,1),undefined);
            assert.equal(mathEnforcer.sum(null,1),undefined);
        });

        it('Should return undefined when second param IS NOT a number', () => {
            assert.equal(mathEnforcer.sum(1,'1'),undefined);
            assert.equal(mathEnforcer.sum(1,[]),undefined);
            assert.equal(mathEnforcer.sum(1,{}),undefined);
            assert.equal(mathEnforcer.sum(1,undefined),undefined);
            assert.equal(mathEnforcer.sum(1,null),undefined);
            
        });

        it('Two positive integers', () => {
            assert.equal(mathEnforcer.sum(10,10),20);
        });

        it('Two negative integers', () => {
            assert.equal(mathEnforcer.sum(-10,-10),-20);
        });

        it('One positive integer,one negative integer', () => {
            assert.equal(mathEnforcer.sum(10,-10),0);
        });

        it('Two positive decimal', () => {
            assert.equal(mathEnforcer.sum(10.5,10.5),21);
        });

        it('Two negative decimal', () => {
            assert.equal(mathEnforcer.sum(-10.5,-10.5),-21);
        });

        it('One positive decimal,one negative decimal', () => {
            assert.equal(mathEnforcer.sum(10.5,-10.5),0);
        });

       
    });
});