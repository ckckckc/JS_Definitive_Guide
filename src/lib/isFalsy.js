var isNaN = require('./isNaN.js');

var falsyList = [null, undefined, 0, -0, NaN, ""];

function isFalsy(primitive) {
  return isNaN(primitive) || falsyList.indexOf(primitive) !== -1;
}

module.exports = isFalsy;