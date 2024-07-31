import totalPhoneBill from '../totalPhoneBill.js';
import assert from 'assert';

// const callCost = callCount * 2.75;
// const smsCost = smsCount * 0.65;
// const totalBill = callCost + smsCost;

// Return the total bill rounded to two decimal places
// return 'R' + totalBill.toFixed(2);
describe('the totalPhoneBill test', function () {
    it('should return the total bill', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});
