const cinema = require("./cinema");
const assert = require("chai").assert;

describe("Tests cinema", function () {
  describe("Test showMovies", function () {
    it("Should return no movie", function () {
      let actual = cinema.showMovies([]);
      let expected = "There are currently no movies to show.";
      assert.equal(actual, expected);
    });

    it("Should return the movies in the array", function () {
        let actual = cinema.showMovies(['It','It2','It3']);
        let expected = "It, It2, It3";
        assert.equal(actual, expected);
      });
  });
  

  describe('Tests ticketPrice', () => {
    it('Should return the price for Premiere', () => {
        let actual = cinema.ticketPrice('Premiere');
        let expected = 12;
        assert.equal(actual, expected);
    });
    it('Should return the price for Normal', () => {
        let actual = cinema.ticketPrice('Normal');
        let expected = 7.50;
        assert.equal(actual, expected);
    });

    it('Should return the price for Discount', () => {
        let actual = cinema.ticketPrice('Discount');
        let expected = 5.50;
        assert.equal(actual, expected);
    });

    it('Should throw error with invalid projection type', () => {
        assert.throws(()=>{
            cinema.ticketPrice('Ko RECHE');
        },'Invalid projection type.')
    });
  });

  describe('Tests swapSeatsInHall', () => {
    it('SHould return Unsuccessful with non integer first param', () => {
        let actual = cinema.swapSeatsInHall(1.5,5);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('SHould return Unsuccessful with non integer second param', () => {
        let actual = cinema.swapSeatsInHall(1,5.5);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('SHould return Unsuccessful with negative integer first param', () => {
        let actual = cinema.swapSeatsInHall(-1,5);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('SHould return Unsuccessful with negative integer second param', () => {
        let actual = cinema.swapSeatsInHall(1,-5);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('SHould return Unsuccessful with  first param > 20', () => {
        let actual = cinema.swapSeatsInHall(21,1);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('SHould return Unsuccessful with  second param > 20', () => {
        let actual = cinema.swapSeatsInHall(1,21);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('SHould return Unsuccessful with  first param = 0', () => {
        let actual = cinema.swapSeatsInHall(0,10);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('SHould return Unsuccessful with  second param = 0', () => {
        let actual = cinema.swapSeatsInHall(1,0);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('SHould return Unsuccessful with  equal params', () => {
        let actual = cinema.swapSeatsInHall(1,1);
        let expected = "Unsuccessful change of seats in the hall.";
        assert.equal(actual, expected);
    });

    it('Sould return successful ', () => {
        let actual = cinema.swapSeatsInHall(1,2);
        let expected = "Successful change of seats in the hall.";
        assert.equal(actual, expected);
    });
  });
});
