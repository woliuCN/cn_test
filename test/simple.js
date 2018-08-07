const {add,mul}=require('../src/math');
const chai=require('chai');
var  expect=chai.expect;
describe('math',()=>{
    describe('add',()=>{
        it('should return 5 when the  value is 2 and 3',()=>{
            expect(add(2,3)).to.equal(5);
        })
        it('should return 8 when the  value is 5 and 3',()=>{
            expect(add(5,3)).to.equal(8);
        })
    });
    describe('mul',()=>{
        it('should return 6 when the  value is 2 and 3',()=>{
            expect(mul(2,3)).to.equal(6);
        })
    });
})