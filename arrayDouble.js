'use strict';


//Input: array of numbers
//Ouput: array of numbers
//Input from each recursion call: array minus first element
//Output from each recursion call:  doubled number + fn();


let arrayDouble = (array) => {
  if (array.length <= 0) { return []; }
  return [(array[0]*2),...arrayDouble(array.slice(1)) ];
};

console.log(arrayDouble([1,2,3]));


let ArrayDouble = (array) => {
  return array.map(x => x*2);
};
console.log(ArrayDouble([1,2,3]));