import countRegNumber from "../countRegNumber.js";
import assert from "assert";

describe('the countRegNumber test', function () {
    it('should return if the reg number is from which town', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
        
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);

    });

});
