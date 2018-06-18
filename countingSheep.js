'use strict';

//Input:Number
//Ouput:series of string templates that include ${number}
//Input from each recursion call: Number -1
//Output from each recursion call:string template ${}



function countSheep(number){
  if ( number <=0 ) { return ''};
  return `${number} - Another sheep jump over the fence\n` + countSheep(number-1);

}
console.log(countSheep(3));

function CountSheep(number){
  for (let i = number; i > 0; i--){
    console.log(`${i} - Another sheep jump over the fence`);
  }
}
CountSheep(3);