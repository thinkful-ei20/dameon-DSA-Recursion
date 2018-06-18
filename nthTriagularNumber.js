'use strict';

//Input: A {number} for calls
//Ouput: A sum of all numbers between Input number and (1 or 0)
//Input from each recursion call: A {number} 
//Output from each recursion call: {number} && || {fn(number-1)}


let nthTriangularNumber = (number) => {
  if (number <= 0){ return 0;}
  return number + nthTriangularNumber(number-1);
};
console.log(nthTriangularNumber(10));


let NthTriagularNumber = (number) => {
  let numberToReturn = 0;
  for (let i = 0; i <= number; i++){
    numberToReturn += i;
  }
  return numberToReturn;
};

console.log(NthTriagularNumber(10));