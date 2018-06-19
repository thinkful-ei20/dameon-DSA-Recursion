'use strict';

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {

  let node = {};
  
  animalHierarchy
    .filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}
//console.log(JSON.stringify(traverse(animalHierarchy, null)));

/*
 The animalHeirachy array is passed into the traverse function with a second value of null.
 A empty node object is created;
 AnimalHierachy then has a filter function called on it, finding out if each element in the array has a 
  key value equal to the parent argument that was passed in.
 If there is an element that does match then for each element that matches that parent key value, it 
  then uses that elements ID key and creates a new key on the empty node object which then gets its 
  properties from the recursive call which passes in the animalHeirachy array and the items id as a 
  second argument(parent) to the traverse function.
 This is done until there is no more child elements left.
    

*/ 

let itterateAnimals = (array,parent) => {
  let node = {};
  
};


console.log(JSON.stringify(itterateAnimals(animalHierarchy, null)));
