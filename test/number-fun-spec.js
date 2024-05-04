const chai = require("chai");
const expect = chai.expect;

const { returnsThree } = require("../problems/number-fun");
const { reciprocal } = require("../problems/number-fun");

describe("returnsThree", () => {
    it("should return the number 3", () => {
        const ans = returnsThree()
        expect(ans).to.equal(3);
    });
});

describe("reciprocal", () => {
    it("should return the reciprocal", () => {
        const recipVal = reciprocal(2);
        expect(recipVal).to.equal(.5);
    });
    it("")
});
