'use strict'
const main = require('../main/main.js');
describe('squaresSum', ()=> {
    let numbers = [];
    beforeEach(()=> {
        numbers = [1, 2, 3, 4, 5];
    })
    it('getOddNumbers', ()=> {
        let oddNumbers = main.getOddNumbers(numbers);
        let expectOddNumbers = [1, 3, 5];
        expect(oddNumbers).toEqual(expectOddNumbers);
    })
    it('buildSquaresNumbers', ()=> {
        let oddNumbers = main.getOddNumbers(numbers);
        let oddSquresNumbers = main.buildOddSquaresNumbers(oddNumbers);
        let exceptOddSquresNumbers = [1, 9, 25];
        expect(oddSquresNumbers).toEqual(exceptOddSquresNumbers);
    })
    it('buildSquaresSum', ()=> {
        let oddNumbers = main.getOddNumbers(numbers);
        let oddSquaresNumbers = main.buildOddSquaresNumbers(oddNumbers);
        let squaresSum = main.buildSquaresSum(oddSquaresNumbers);
        let exceptSquaresSum = 35;
        expect(squaresSum).toEqual(exceptSquaresSum);
    })
    it('printSquaresSum', ()=> {
        spyOn(console, 'log');
        main.printSquaresSum(numbers);
        const squaresSum = 35;
        expect(console.log).toHaveBeenCalledWith(squaresSum);
    })
})