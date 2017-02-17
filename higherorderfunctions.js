'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array2 = array.filter(find);

function find(value) {
  return value > 5;
}

const array3 = array.map(function (x) {
  return x * 2;
});

console.log(array2);
console.log(array.indexOf(3));
console.log(array3);

module.exports = find;
