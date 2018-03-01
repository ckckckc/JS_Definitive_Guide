var maxArrayLength = Math.pow(2, 32) - 1;
new Array(maxArrayLength)
// new Array(maxArrayLength + 1)   // rangeError

var arr1 = [1, 2, 3];
var arr2 = [1, 2, , 4];

console.log('arr1 length:', arr1.length)
console.log('arr2 length:', arr2.length)


var arr3 = [,,];
console.log('arr3 length:', arr3.length)

