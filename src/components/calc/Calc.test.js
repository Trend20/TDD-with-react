const add = require('./Calc');

//write test
describe('calculator', () =>{
    it('adds two numbers', () => {
        expect(add(2,3).toEqual(5))
    });
})