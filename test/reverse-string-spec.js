const chai = require("chai");
const expect = chai.expect;

const reverseString  = require("../problems/reverse-string");

describe("reverseString", function () {
    it('should return the reversed output', function () {
        const versedString = reverseString("fun");
        expect(versedString).to.equal("nuf");
    });
});
