'use strict';

//Input: String
//Ouput: String
//Input from each recursion call: String minus first character
//Output from each recursion call: Character plus whatever is left of string

let reverseString = (string) => {
  if(string.length <= 0){
    return '';
  }
  return string.slice(-1) + reverseString(string.slice(0,-1));
};

console.log(reverseString('string'));

let ReverseString = (string) => {
  let newString = [];
  for (let i = 0; i < string.length; i++){
    newString.push(string.charAt(i));
  }
  return newString.reverse().join('');
};

console.log(ReverseString('string'));
