import  yearsAgo  from "../yearsAgo.js";
import assert from "assert";

describe('the yearsAgo test', function () {
    it('should return today year ', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

    });

});
console.log(yearsAgo(1976))