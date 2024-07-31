import  countAllPaarl  from "../countAllPaarl.js";
import assert from "assert";

describe('the countAllPaarl test', function () {
    it('should return if the reg number is from paarl', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));

    });

});
