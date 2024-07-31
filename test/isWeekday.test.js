import isWeekday from '../isWeekday.js';
import assert from 'assert';

describe('the isWeekday test', function () {
    it('should return true or false', function () {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });

});

// assert.equal(isWeekday('Saturday'), false);
// assert.equal(isWeekday('Sunday'), false);
// assert.equal(isWeekday('Monday'), true);
// assert.equal(isWeekday('Tuesday'), true);
// assert.equal(isWeekday('Wednesday'), true);
// assert.equal(isWeekday('Thursday'), true);
// assert.equal(isWeekday('Friday'), true);
// console.log(isWeekday('Sunday'));
// console.log(isWeekday('Monday'));
// console.log(isWeekday('Tuesday'));