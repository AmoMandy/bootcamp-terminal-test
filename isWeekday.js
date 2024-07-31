export default function isWeekday(day) {
    const weekendDays = ['Saturday', 'Sunday'];
    return !weekendDays.includes(day);
  }

//   describe('the isWeeday test' , function (){
//     it('should return true or false' , function (){
//         assert.equal(isWeekday('Saturday'), false);
// assert.equal(isWeekday('Sunday'), false);
// assert.equal(isWeekday('Monday'), true);
// assert.equal(isWeekday('Tuesday'), true);
// assert.equal(isWeekday('Wednesday'), true);
// assert.equal(isWeekday('Thursday'), true);
// assert.equal(isWeekday('Friday'), true);
//     });

// });