'use strict';

//Input:Number
//Ouput:Number that is a collective multiplying that number by each number between itself and one
//Input from each recursion call: number
//Output from each recursion call: number && || fn(number-1);

let factorialNumber = (number) => {
  if(number <= 1) {return 1;}
  return number * factorialNumber(number-1);
};


console.log(factorialNumber(4));

let FactorialNumber = (number) => {
  let numberToReturn = 1;
  for (let i = 1; i < number+1; i++){
    numberToReturn *= i;
  }
  return numberToReturn;
};
console.log(FactorialNumber(4));