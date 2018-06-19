'use strict';

let orginization = [
  {name:'Zuckerberg',parent:null},
  {name:'Schroepfer', parent:'Zuckerberg'},
  {name:'Bosworth', parent:'Schroepfer'},
  {name:'Steve', parent:'Bosworth'},
  {name:'Kyle', parent:'Bosworth'},
  {name:'Andra', parent:'Bosworth'},
  {name:'Zhao', parent:'Schroepfer'},
  {name:'Richie', parent:'Zhao'},
  {name:'Sofia', parent:'Zhao'},
  {name:'Jen' , parent: 'Zhao'},
  {name:'Schrage' , parent:'Zuckerberg'},
  {name:'VanDyck', parent:'Schrage'},
  {name:'Sabrina',parent:'VanDyck'},
  {name:'Michelle',parent:'VanDyck'},
  {name:'Josh', parent:'VanDyck'},
  {name:'Swain',parent:'Schrage'},
  {name:'Blanch',parent:'Swain'},
  {name:'Tom', parent:'Swain'},
  {name:'Joe', parent:'Swain'},
  {name:'Sandberg' ,parent:'Zuckerberg'},
  {name:'Goler',parent:'Sandberg'},
  {name:'Eddie', parent:'Goler'},
  {name:'Julie', parent:'Goler'},
  {name:'Annie', parent:'Goler'},
  {name:'Hernandez',parent:'Sandberg'},
  {name:'Rowi', parent:'Hernandez'},
  {name:'Inga', parent:'Hernandez'},
  {name:'Morgan', parent:'Hernandez'},
  {name:'Moissinac', parent:'Sandberg'},
  {name:'Amy',parent:'Moissinac'},
  {name:'Chuck', parent:'Moissinac'},
  {name:'Vinni', parent:'Moissinac'},
  {name:'Kelley', parent:'Zuckerberg'},
  {name:'Eric', parent:'Kelley'},
  {name:'Ana', parent:'Kelley'},
  {name:'Wes', parent:'Kelley'}];


function traverse(orginization, parent) {

  let node = {};
    
  orginization
    .filter(item => item.parent === parent)
    .forEach(item => node[item.name] = traverse(orginization, item.name));
  return node;  
}
console.log(JSON.stringify(traverse(orginization,null)));