'use strict';

//filter
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(name => name.length < 5);


//map
let answers = ['IvAn', 'anNa', 'ALEX'];
answers = answers.map(item => item.toLowerCase());//same variable


//every and some
const some = [4, 5, 6];

console.log(some.every(item => typeof(item) === 'number'));
console.log(some.some(item => typeof(item) === 'string'));


//reduce
const arr = [10, 51];

const resArr = arr.reduce((sum, cur) => sum + cur, 3);
console.log(resArr);


const fruits = ['apple', 'orange', 'banana'];

const resFruits = fruits.reduce((sum, cur) => `${sum},${cur}`);
console.log(resFruits);

//example(with entries)
const obj = {
  ivan: 'person',
  ann: 'person',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
              .filter(item => item[1] === 'person')
              .map(item => item[0]);

console.log(newArr);