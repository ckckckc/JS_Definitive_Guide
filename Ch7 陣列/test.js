var maxArrayLength = Math.pow(2, 32) - 1;
new Array(maxArrayLength)
// new Array(maxArrayLength + 1)   // rangeError

var arr1 = [1, 2, 3];
var arr2 = [1, 2, , 4];

console.log('arr1 length:', arr1.length)
console.log('arr2 length:', arr2.length)


var arr3 = [,,];
console.log('arr3 length:', arr3.length)

var arr4 = [];

arr4[0] = 2;
arr4[1.000] = 3;
// arr4[-1] = 5;
// arr4['2'] = 4;
// arr4['4.000'] = 4;

arr4.pro1 = 'str1';
console.log(arr4)
console.log('arr4 length:',arr4.length)

var obj = {};
obj[1] = "one";
console.log('obj: ',obj)
console.log('obj.length: ', obj.length)

var arr5 = [];
console.log('arr5.length:', arr5.length);
arr5[maxArrayLength] = 'test';
console.log('arr5[maxArrayLength + 1]:', arr5[maxArrayLength]); // convert to property
console.log('arr5.length:', arr5.length);

var arr6 = [];
arr6[-1] = 'test1';
arr6['2'] = 'test2';
arr6[3.00] = 'test3';
console.log('arr6:', arr6)
console.log('arr6.length:', arr6.length)