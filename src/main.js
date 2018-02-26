require('./polyfill');

var classOf = require('./lib').classOf;
var inherit = require('./lib').inherit;
var isFalsy = require('./lib').isFalsy;

console.log(classOf(1234))

var obj1 = { x: 1, y: 2};
var obj2 = inherit(obj1);
obj2.z = 3;

for (var key in obj2) {
  console.log(obj2[key])
}

console.log(isFalsy(0))
console.log(isFalsy(-0))
console.log(isFalsy(NaN))
console.log(isFalsy(undefined))
console.log(isFalsy(''))
console.log(isFalsy(null))
console.log(isFalsy('1234'))
console.log(isFalsy({}))
console.log(isFalsy(Object))
console.log(isFalsy(Date))
