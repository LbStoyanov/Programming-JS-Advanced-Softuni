const carService = require("./03. Car Service_Resources");
const assert = require("chai").assert;

describe("Tests carService", function () {
  describe("Tests isItExpensive", function () {
    it("Should return firstMessage", function () {
      let expexcted = `The issue with the car is more severe and it will cost more money`;
      let actual = carService.isItExpensive("Engine");
      assert.equal(expexcted, actual);
    });

    it("Should return firstMessage", function () {
      let expexcted = `The issue with the car is more severe and it will cost more money`;
      let actual = carService.isItExpensive("Transmission");
      assert.equal(expexcted, actual);
    });
    it("Should return secondMessage", function () {
      let expexcted = `The overall price will be a bit cheaper`;
      let actual = carService.isItExpensive("Test");
      assert.equal(expexcted, actual);
    });
  });

  describe("Tests discount ", () => {
    it("Should return the 15% discount", () => {
      let expexted = `Discount applied! You saved ${15}$`;
      let actual = carService.discount(3, 100);
      assert.equal(expexted, actual);
    });

    it("Should return the no discount", () => {
      let expexted = "You cannot apply a discount";
      let actual = carService.discount(2, 100);
      assert.equal(expexted, actual);
    });

    it("Should return the 30% discount", () => {
      let expexted = `Discount applied! You saved ${30}$`;
      let actual = carService.discount(8, 100);
      assert.equal(expexted, actual);
    });

    it("Should throw error with invalid number of parts", () => {
      assert.throws(() => carService.discount("", 100), "Invalid input");
    });

    it("Should throw error with invalid total price", () => {
      assert.throws(() => carService.discount(3, {}), "Invalid input");
    });
  });

  describe("Tests partsToBye", () => {
    it("Should throw error with invalid part catalog", () => {
      assert.throws(() => carService.partsToBuy(3, []), "Invalid input");
    });

    it("Should throw error with invalid needed Parts", () => {
      assert.throws(() => carService.partsToBuy([], 3), "Invalid input");
    });

    it("should", () => {
        assert.equal(
          carService.partsToBuy(
            [
              { part: "blowoff valve", price: 145 },
              { part: "coil springs", price: 230 },
            ],
            ["blowoff valve", "injectors"]
          ),
          145
        );
        assert.equal(
          carService.partsToBuy([], ["blowoff valve", "injectors"]),
          0
        );
      });

  });
});
