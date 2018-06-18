'use strict';

//Input:String,Seperator
//Ouput:Array of the strings separated by seperator
//Input from each recursion call: string without first element that was seperated && seperator
//Output from each recursion call: string && || fn(string, seperator)


let stringSplitter = (string,seperator) => {
  if(string.length === 0) {return [];}
  let newSeperator = string.indexOf(seperator);
  if (newSeperator === -1 ){return [string];}  
  return [string.slice(0,newSeperator), ...stringSplitter(string.slice(newSeperator+1),seperator)];
};

console.log(stringSplitter('string of strings',' '));

let StringSplitter = (string,seperator) => {
  return string.split(seperator);  
};

console.log(StringSplitter('string of strings',' '));



let splitter = (string,seperator) => {
  let array = [];
  let index = 0;
  

  for(let i = 0; i < string.length; i++){
    if (string.charAt(i)===seperator){
      array.push(string.slice(index,i));
      index = i+1;
    }
  }
  array.push(string.slice(index));
  return array;
};
console.log(splitter('string of strings'," "));



