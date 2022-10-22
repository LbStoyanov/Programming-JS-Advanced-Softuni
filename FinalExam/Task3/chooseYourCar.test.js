const chooseYourCar = require("./chooseYourCar");
const assert = require("chai").assert;

describe("Tests ", function () {
  describe("Test choosingType", function () {
    it("Should throw invalid year below 1900", function () {
        assert.throws(()=>{
            chooseYourCar.choosingType('sedan','blue',1899);
        },'Invalid Year!')
      });


      it("Should throw invalid year higher 2022", function () {
        assert.throws(()=>{
            chooseYourCar.choosingType('sedan','blue',2023);
        },'Invalid Year!')
      });

      it("Should throw invalid type !== sedan", function () {
        assert.throws(()=>{
            chooseYourCar.choosingType('combi','blue',2012);
        },'This type of car is not what you are looking for.')
      });

      it("Should return meet requirements", function () {
        let actual = chooseYourCar.choosingType('Sedan','blue',2011);
        let expected = "This blue Sedan meets the requirements, that you have.";
        assert.equal(actual,expected);
      });

      it("Should return meet requirements", function () {
        let actual = chooseYourCar.choosingType('Sedan','blue',2010);
        let expected = "This blue Sedan meets the requirements, that you have.";
        assert.equal(actual,expected);
      });

      it("Should return not meet requirements", function () {
        let actual = chooseYourCar.choosingType('Sedan','blue',2009);
        let expected = "This Sedan is too old for you, especially with that blue color.";
        assert.equal(actual,expected);
      });
  });

  describe('Tests brandName', () => {
    it('Should throw error if first param !== array', () => {
      assert.throw(()=>{
        chooseYourCar.brandName({},5)
      },'Invalid Information!')
    });

    it('Should throw error if first param !== array', () => {
      assert.throw(()=>{
        chooseYourCar.brandName(5)
      },'Invalid Information!')
    });

    it('Should throw error if first param !== array', () => {
      assert.throw(()=>{
        chooseYourCar.brandName()
      },'Invalid Information!')
    });

    it('Should throw error if second param !== integer || < 0 || > arr.length', () => {
      assert.throw(()=>{
        chooseYourCar.brandName(['BMW'],1);
      },'Invalid Information!')
    });

    it('Should throw error if second param !== integer || < 0 || > arr.length', () => {
      assert.throw(()=>{
        chooseYourCar.brandName(['BMW'],-1);
      },'Invalid Information!')
    });

    it('Should return correct result', () => {
      let actual = chooseYourCar.brandName(['BMW','Toyota','Audi'],1);
      let expected = "BMW, Audi";
      assert.equal(actual,expected);
    });
  });

  describe('Tests carFuelConsumption', () => {
    it('Should throw error with no params', () => {
      assert.throws(()=>{
        chooseYourCar.carFuelConsumption();
      },'Invalid Information!')
    });

    it('Should throw error with 1 param', () => {
      assert.throws(()=>{
        chooseYourCar.carFuelConsumption(5);
      },'Invalid Information!')
    });

    it('Should throw error with obj as first param', () => {
      assert.throws(()=>{
        chooseYourCar.carFuelConsumption({},6);
      },'Invalid Information!')
    });


    it('Should throw error with arr as second param', () => {
      assert.throws(()=>{
        chooseYourCar.carFuelConsumption(5,[]);
      },'Invalid Information!')
    });

    it('Should throw error with negative num as first param', () => {
      assert.throws(()=>{
        chooseYourCar.carFuelConsumption(-5,5);
      },'Invalid Information!')
    });


    it('Should throw error with no negavite num as second param', () => {
      assert.throws(()=>{
        chooseYourCar.carFuelConsumption(5,-5);
      },'Invalid Information!')
    });


    it('Should return efficient enougth', () => {
      let actual = chooseYourCar.carFuelConsumption(100,5);
      let expected = "The car is efficient enough, it burns 5.00 liters/100 km.";
      assert.equal(actual,expected);
    });


    it('Should return efficient enougth', () => {
      let actual = chooseYourCar.carFuelConsumption(100,7);
      let expected = "The car is efficient enough, it burns 7.00 liters/100 km.";
      assert.equal(actual,expected);
    });

    it('Should return NOT efficient enougth', () => {
      let actual = chooseYourCar.carFuelConsumption(100,8);
      let expected = "The car burns too much fuel - 8.00 liters!";
      assert.equal(actual,expected);
    });
  });
});
