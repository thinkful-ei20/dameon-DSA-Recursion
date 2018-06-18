'use strict';

// Input:Number
// Ouput:Binary string representing the ${number}
// Input from each recursion call: Number dived by two
// Output from each recursion call: Binary string ${ 0 || 1}



let binaryRespresention = (number) => {
  let num = Math.floor(number/2);
  if (number === 1){return "1";}
  if (number === 0){return "0";}
  return binaryRespresention(num)+ number%2;

};

console.log(binaryRespresention(17));

let BinaryRespresention = (number) => {
  let numberToReturn = [];
  let numberToDivide = number;
  let index = Math.ceil(numberToDivide/2);
  while(index>=.5){
    numberToReturn.unshift(numberToDivide%2);
    numberToDivide = Math.floor(numberToDivide/2);
    index = numberToDivide/2;
  }
  return numberToReturn.join('');
};
console.log(BinaryRespresention(9));



