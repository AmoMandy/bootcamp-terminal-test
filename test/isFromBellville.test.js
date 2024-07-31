import isFromBellville from '../isFromBellville.js';
import assert from 'assert';

// console.log(isFromBellville)
console.log(isFromBellville('CY 123'));
console.log(isFromBellville('CA 123'));
console.log(isFromBellville('CY 123'));
// assert.equal(isFromBellville('CY 123'), true);
// assert.equal(isFromBellville('CJ 123'), false);
describe('the isFromBellvelle test' , function (){
    it('should be true and false' , function (){
        assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);
    });

});