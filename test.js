'use strict'

const test = require('tape');
const higherorderfunctions = require('./higherorderfunctions.js');

console.log(higherorderfunctions);

test('find should return 6', function (t) {
  t.equal(higherorderfunctions.find([4, 5, 6]), 6);
  t.end();
});
