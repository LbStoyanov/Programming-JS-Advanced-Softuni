const rgbToHexColor = require('./06. RGB to Hex');
const expect = require('chai').expect;

describe('General tests', () => {
    describe('If red color is invalid', () => {
        it('Should return undefined', () => {
            expect(rgbToHexColor('red',3,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor('',3,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(undefined,3,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(true,3,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor({},3,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor([],3,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(-1,3,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(256,3,3)).to.equal(undefined);
        });
        
    });

    describe('If green color is invalid', () => {
        it('Should return undefined', () => {
            expect(rgbToHexColor(3,'green',3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,'',3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3, undefined,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,true,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,{},3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,[],3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,-1,3)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,256,3)).to.equal(undefined);
        });
        
    });

    describe('If blue color is invalid', () => {
        it('Should return undefined', () => {
            expect(rgbToHexColor(3,3,'blue')).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,3,'')).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,3,undefined)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,3,true)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,3,{})).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,3,[])).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,3,-1)).to.equal(undefined);
        });

        it('Should return undefined', () => {
            expect(rgbToHexColor(3,3,256)).to.equal(undefined);
        });
        
    });
    
    
    
});
