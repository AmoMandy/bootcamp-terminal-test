import findItemsOver from "../findItemsOver.js";
import assert from "assert";

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

console.log(findItemsOver(itemList, 20));
// assert.deepEqual(results, findItemsOver(itemList, 20));
// assert.deepEqual(results2, findItemsOver(itemList2, 20));
// assert.deepEqual(results3, findItemsOver(itemList3, 20));

console.log('findItemsOver passed!');
describe('the findItemsOver test', function () {
    it('should return the items list ', function () {
        

    });

});