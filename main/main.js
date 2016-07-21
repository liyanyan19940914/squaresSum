'use strict'
function printSquaresSum(numbers) {
    const oddNumbers = getOddNumbers(numbers);
    const oddSquaresNumbers = buildOddSquaresNumbers(oddNumbers);
    const squaresSum = buildSquaresSum(oddSquaresNumbers);
    console.log(squaresSum);
}
function getOddNumbers(numbers) {
    return numbers.filter(number=>number%2!=0)
}
function buildOddSquaresNumbers(oddNumbers) {
    return oddNumbers=oddNumbers.map(oddNumber=>oddNumber*oddNumber)
}
function buildSquaresSum(oddSquaresNumbers) {

    return oddSquaresNumbers.reduce((prv,next)=> {
        return prv + next;
    })
}
module.exports = {
    printSquaresSum: printSquaresSum,
    getOddNumbers: getOddNumbers,
    buildOddSquaresNumbers: buildOddSquaresNumbers,
    buildSquaresSum: buildSquaresSum

};