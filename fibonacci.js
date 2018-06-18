'use strict';

//Input:Number
//Ouput:Array of sequenced numbers of the fibonacci sequence {Number} of places
//Input from each recursion call: Number
//Output from each recursion call: (array-1 + array-2) + fn()


let fibonacci = (number) => {
  if(number<=1){return [0];}
  if(number===2){return [ 0, 1];}

 
  let arrayToReturn = fibonacci(number - 1); 
  arrayToReturn.push(arrayToReturn[arrayToReturn.length - 1] + arrayToReturn[arrayToReturn.length - 2]);
  return arrayToReturn;
};
//console.log(fibonacci(7));

let Fibonacci = (number) => {

  if(number === 0 || number === 1) {return [0]; }
  if(number === 2) { return [0,1]; }
  let arrayToRet = [0,1];
  for(let i = 2; i < number; i++){
    arrayToRet.push(arrayToRet[i-2]+arrayToRet[i-1]);
  }
  return arrayToRet;
};
console.log(Fibonacci(2));
