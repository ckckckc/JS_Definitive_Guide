require('./polyfill');

var lib = require('./lib');

var classOf = lib.classOf;
var inherit = lib.inherit;
var isFalsy = lib.isFalsy;
var foreach = lib.foreach;

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


foreach([2, 3, 4, 5], function(element) {
  if (element === 4) {
    throw foreach.break;
  }
  console.log(element);
});

var arr = [, NaN, , -0, 0, , '', , null, , undefined, 'foo', false];
var denseArr = arr.compact();

console.log(denseArr);


function showSum(y, z) {
  console.log(this.x + y + z);
}

var boundShowSum = showSum.bind({x: 1}, 2);

boundShowSum(3);
