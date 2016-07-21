'use strict'
function printSquaresSum(numbers){
    const oddsSum=numbers.filter(number=>number%2!=0)
        .map(odd=>odd*odd)
        .reduce((prv,next)=>{
            return prv+next;
        })
    console.log(oddsSum);
}
module.exports={
    printSquaresSum:printSquaresSum
}