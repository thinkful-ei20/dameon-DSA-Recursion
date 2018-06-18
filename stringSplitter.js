'use strict';

//Input:String,Seperator
//Ouput:Array of the strings separated by seperator
//Input from each recursion call: string without first element that was seperated && seperator
//Output from each recursion call: string && || fn(string, seperator)


let stringSplitter = (string,seperator) => {
  if(string.length === 0) {return [];}
  let newSeperator = string.indexOf(seperator);
  if (newSeperator === -1 ){return [string];}
  console.log(newSeperator);
  return [string.slice(0,newSeperator), ...stringSplitter(string.slice(newSeperator+1),seperator)];
};

//console.log(stringSplitter('string of strings',' '));

let StringSplitter = (string,seperator) => {
  let array = string.split(seperator);
  return array;
};

console.log(StringSplitter('string of strings',' '));
