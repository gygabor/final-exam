// Create a function that takes an array and a number and shifts the values of the array by the given number like: [1, 2, 3, 4, 5] and 2 becomes [4, 5, 1, 2, 3]

'use strict';

const array = [1, 2, 3, 4, 5];

function shiftValues(array, number){
  var array2 = [];
  var pos;
  var i = 0;
  var j = 0;


  if (number >= array.length) {
    number = number - array.length;
    pos = array.length - number;
  } else {
    pos = array.length - number;
  }

  while(pos < array.length){
    array2[j] = array[pos];
    ++pos;
    ++j;
  }

  for (j; j < array.length; j++) {
    array2[j] = array[i]
    i++
  }

  return array2;
}

console.log(shiftValues(array, 2));
