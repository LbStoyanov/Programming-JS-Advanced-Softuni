const isOddOrEven = require("./02. Even Or Odd");
const expect = require("chai").expect;

describe("isEvenOrOdd function test", () => {
  it("Should return undefined when parameter is NOT a string", () => {
    expect(isOddOrEven(1)).to.equal(undefined);
    expect(isOddOrEven([])).to.equal(undefined);
    expect(isOddOrEven({})).to.equal(undefined);
    expect(isOddOrEven(2.5)).to.equal(undefined);
    expect(isOddOrEven()).to.equal(undefined);
  });

  it("Should return odd as string", () => {
    expect(isOddOrEven("a")).to.equal("odd");
  });

  it("Should return even as string", () => {
    expect(isOddOrEven("ab")).to.equal("even");
  });
});
