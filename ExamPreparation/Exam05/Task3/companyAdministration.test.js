const companyAdministration = require('./companyAdministration');
const assert = require('chai').assert;

describe("Tests ompanyAdministartion", function() {
    describe("Tests hiringEmployee", function() {
        it("Should throw error  if position !== programer", function() {
            
            assert.throw(() =>{
                companyAdministration.hiringEmployee('Peshi','bachkator',2);
            },'We are not looking for workers for this position.')
        });

        it("Should return the message for 3+ years experiance", function() {
          let actual = companyAdministration.hiringEmployee('Peshi','Programmer',3);
          let expected = `Peshi was successfully hired for the position Programmer.`;

          assert.equal(actual,expected);
        });

        it("Should return the message for les than 3 years years experiance", function() {
            let actual = companyAdministration.hiringEmployee('Peshi','Programmer',1);
            let expected = `Peshi is not approved for this position.`;
  
            assert.equal(actual,expected);
          });
     });
     
     describe('Tests calculateSalary', () => {
        it('Should throw error with negative hours', () => {
            assert.throw(() =>{
                companyAdministration.calculateSalary(-2);
            },'Invalid hours');
        });

        it('Should throw error when hours is not integer', () => {
            assert.throw(() =>{
                companyAdministration.calculateSalary([]);
            },'Invalid hours');
        });

        it('Should return 15 as result', () => {
            let actual = companyAdministration.calculateSalary(1);
            let expected = 15;
            assert.equal(actual,expected);
        });

        it('Should return 3550 as result', () => {
            let actual = companyAdministration.calculateSalary(170);
            let expected = 3550;
            assert.equal(actual,expected);
        });
     });

     describe('Tests firedEmployee', () => {
        it('Should throw error if employees is NOT an array', () => {
            assert.throw(() =>{
                companyAdministration.firedEmployee('a',1);
            },'Invalid input');
        });

        it('Should throw error if index is not a number', () => {
            assert.throw(() =>{
                companyAdministration.firedEmployee(['Penko'],{});
            },'Invalid input');
        });

        it('Should throw error if index is negative', () => {
            assert.throw(() =>{
                companyAdministration.firedEmployee(['Penko'],-1);
            },'Invalid input');
        });

        it('Should throw error if no params', () => {
            assert.throw(() =>{
                companyAdministration.firedEmployee();
            },'Invalid input');
        });

        it('Should throw error if no params', () => {
          let actual = companyAdministration.firedEmployee(['Penko','Franko','Spiridon'],2);
          let expected = 'Penko, Franko';

          assert.equal(actual,expected);
        });
     });
});
