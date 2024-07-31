import regCheck from '../regCheck.js';
import assert from 'assert';

console.log(regCheck('DC 55 YU GP', 'GP'));
console.log(regCheck('5566 L', 'M')); 
var isGP = regCheck('DV 23 NB GP', 'GP');
console.log(isGP);
var isMP = regCheck('DV 23 LP GP', 'MP');
console.log(isMP);

describe('the regCheck test' , function (){
    it('should check regNo.' , function (){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
        
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

});