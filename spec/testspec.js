'use strict'
const main = require('../main/main.js');
describe('squaresSum', ()=> {
    let numbers = [];
    beforeEach(()=> {
        numbers = [1, 2, 3, 4, 5];
    })
    
    it('printSquaresSum', ()=> {
        spyOn(console, 'log');
        main.printSquaresSum(numbers);
        const squaresSum = 35;
        expect(console.log).toHaveBeenCalledWith(squaresSum);
    })
})