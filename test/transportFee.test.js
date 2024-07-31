import  transportFee  from "../transportFee.js";
import assert from "assert";

describe('the transportFee test', function () {
    it('should return the night shift free', function () {
        assert.equal(transportFee('morning'), 'R20');

        assert.equal(transportFee('afternoon'), 'R10');
        
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

});

