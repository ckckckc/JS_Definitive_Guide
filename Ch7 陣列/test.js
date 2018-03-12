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

var sparseArr1 = [,'some value',,];
var sparseArr2 = new Array(3);
var denseArr3 = [undefined, undefined, undefined];

console.log('index 0 in sparseArr1:', 0 in sparseArr1)
console.log('length sparseArr1:', sparseArr1.length)
console.log('index 0 in sparseArr2:', 0 in sparseArr2)
console.log('length sparseArr2:', sparseArr2.length)
console.log('index 0 in denseArr3:', 0 in denseArr3)
console.log('length denseArr3:', denseArr3.length)
console.log('sparseArr1[0] === denseArr3[0]: ', sparseArr1[0] === denseArr3[0])

var sparseArr4 = [1, 2, 3, 4];
delete sparseArr4[0]
console.log('sparseArr4: ', sparseArr4);

var lengthTest = [1, 2, 3, 4, 5];
console.log('lengthTest: ', lengthTest);
lengthTest.length = 2;
console.log('lengthTest: ', lengthTest);
lengthTest.length = 5;
console.log('lengthTest: ', lengthTest);

Object.seal(lengthTest);
lengthTest[0] = 9;
lengthTest[10] = 888;
console.log('lengthTest seal: ', lengthTest);
lengthTest.length = 0;
console.log('lengthTest seal: ', lengthTest);   // 既有的 element 刪不掉
lengthTest.length = 7;
console.log('lengthTest seal: ', lengthTest);   // 可以變長

Object.freeze(lengthTest);
lengthTest[0] = 3;
lengthTest[10] = 888;
console.log('lengthTest freeze: ', lengthTest);
lengthTest.length = 1;
console.log('lengthTest freeze: ', lengthTest);
lengthTest.length = 10;
console.log('lengthTest freeze: ', lengthTest);

lengthTest2 = [1, 2, 3, 4];
lengthTest2.length = 0;
console.log('lengthTest2: ', lengthTest2);

var iteArray = [,undefined,,,];

Array.prototype.somePro = 'somePro';

for (var i = 0, len = iteArray.length ; i < len ; i++) {
  console.log('for loop: ', i)
  console.log(`for loop ${i} in iteArray: `, i in iteArray)
}

for (var index in iteArray) {
  console.log('for in loop: ', index)
  console.log(`for in loop ${index} in iteArray: `, index in iteArray)
}

iteArray.forEach((element) => {
  console.log('forEach element: ', element);
});

iteArray[Math.pow(2, 32)] = 111;

for (var i in iteArray) {
  // 如果 i 不是非負整數就跳過
  console.log(i)
  if (String(Math.floor(Math.abs(Number(i)))) !== i) continue;
  console.log('formated for in loop: ', i)
  console.log(`formated for in loop ${i} in iteArray: `, i in iteArray)
}

var array7 = [1, 3, 5, 7 , 9, 11, 13, 15, 17];

array7.forEach((value) => {
  // forEach 中使用 return 代替 for loop 中的 continue 
  if (value === 11) return;
  console.log(value);
});


var rowLength = 9;
var columnLength = 9;
var table = new Array(rowLength);

for (var i = 0 ; i < rowLength ; i++ ) {
  table[i] = new Array(columnLength);
  for (var j = 0 ; j < columnLength ; j ++) {
    table[i][j] = i * j;
  }
}

console.log(table)

  
  
var arrayJoin = ['some_value', null, 333, , function fun(){}];

console.log('arrayJoin: ', arrayJoin.join());

var arrayReverse = [1, 2, 3];
console.log('arrayReverse and join: ', arrayReverse.reverse().join());  // "3,2,1"
console.log('arrayReverse: ', arrayReverse)                    // [3, 2, 1]

// var arraySort = [3, 6, 3, 2,, 9, 1];
var arraySort = [3, 2, 1, 99, 0];
var count = 0;

arraySort.sort(function(a, b) {
  count++;
  console.log('\n')
  console.log(`comparing ${a} ${b}`)
  // return a > b ? -1 : 1;
  return b - a;
});

console.log(arraySort)
console.log('count: ', count);

var arraySort2 = ['banana', 3, 'cherry',,, 'apple'];
arraySort2.sort();
console.log(arraySort2.join(', '));  // '3, apple, banana, cherry, , '
console.log(arraySort2)                  // [3, 'apple', 'banana', 'cherry',,,]

var arraySort3 = [3, 2, 44, 5, 1111];
arraySort3.sort();
console.log(arraySort3);            // 字母順序
arraySort3.sort(function(a, b) {    // 數字順序 小至大
  return a - b;
});
console.log(arraySort3)
arraySort3.sort(function(a, b) {    // 數字順序 大至小
  return b - a;
});
console.log(arraySort3);

var arraySort4 = ['bb', 'AA', 'CC', 'aa', 'BB'];
console.log(arraySort4.sort());      // [ 'AA', 'BB', 'CC', 'aa', 'bb' ]
arraySort4.sort(function(a, b) {
  var lowerA = a.toLowerCase();
  var lowerB = b.toLowerCase();
  if (lowerA > lowerB) return 1;
  if (lowerA < lowerB) return -1;
  return 0;
});
console.log(arraySort4);            // [ 'AA', 'aa', 'BB', 'bb', 'CC' ]

var arrayConcat = [1, 2, 3];
console.log(arrayConcat.concat(4, 5));            // [ 1, 2, 3, 4, 5 ]
console.log(arrayConcat.concat([4, 5]));          // [ 1, 2, 3, 4, 5 ]
console.log(arrayConcat.concat([4, 5], [6, 7]));  // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arrayConcat.concat(4, [5, [6, 7]]));  // [ 1, 2, 3, 4, 5, [6, 7 ] ]
console.log(arrayConcat);                         // [ 1, 2, 3 ]


var arraySlice = [1, 2, 3, 4, 5];
console.log(arraySlice.slice(0, 3));    // [ 1, 2, 3]
console.log(arraySlice.slice(3));       // [ 4, 5 ]
console.log(arraySlice.slice(1, -1));   // [ 2, 3, 4 ]
console.log(arraySlice.slice(-3, -2));  // [ 3 ]
console.log(arraySlice.slice(2, 0));    // [ ]
console.log(arraySlice);                // [ 1, 2, 3, 4, 5 ]


var arraySplice1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arraySplice1.splice(4));
console.log('arraySplice1:', arraySplice1);
console.log(arraySplice1.splice(2, 1));
console.log('arraySplice1:', arraySplice1);

var arraySplice2 = [1, 2, 3, 4, 5, 6, 7, 8];
// [1, 2, 3, 4, 5, 6, 7, 8]
console.log('arraySplice2:', arraySplice2);

// splice(2, 0, "a", "b")):  []
console.log('splice(2, 0, "a", "b")): ', arraySplice2.splice(2, 0, 'a', 'b'));

// arraySplice2: [ 1, 2, 'a', 'b', 3, 4, 5, 6, 7, 8 ]
console.log('arraySplice2:', arraySplice2);

// splice(2, 2, [1, 2], 3):  [ 'a', 'b' ]
console.log('splice(2, 2, [1, 2], 3): ', arraySplice2.splice(2, 2, [1, 2], 3));

// arraySplice2: [ 1, 2, [ 1, 2 ], 3, 3, 4, 5, 6, 7, 8 ]
console.log('arraySplice2:', arraySplice2);


var stack1 = [];
console.log('stack1: ', stack1)                             // []
console.log('stack1.push(1, 2): ', stack1.push(1, 2));      // 2
console.log('stack1: ', stack1)                             // [ 1, 2 ]
console.log('stack1.pop(): ', stack1.pop());                // 2
console.log('stack1: ', stack1)                             // [ 1 ]
console.log('stack1.push([4, 5]): ', stack1.push([4, 5]));  // 2
console.log('stack1: ', stack1);                            // [ 1, [4, 5] ]
console.log('stack1.pop(): ', stack1.pop());                // [4, 5]
console.log('stack1: ', stack1);                            // [ 1 ]
console.log('stack1.pop(): ', stack1.pop());                // 1
console.log('stack1: ', stack1);                            // []
console.log('stack1.pop(): ', stack1.pop());                // undefined
console.log('stack1: ', stack1);                            // []

var stack2 = [];
console.log('stack2: ', stack2);
console.log('stack2.unshift(1): ', stack2.unshift(1));
console.log('stack2: ', stack2);
console.log('stack2.unshift(22): ', stack2.unshift(22));
console.log('stack2: ', stack2);
console.log('stack2.shift(): ', stack2.shift());
console.log('stack2: ', stack2);
console.log('stack2.unshift(3, [4, 5]): ', stack2.unshift(3, [4, 5]));
console.log('stack2: ', stack2);
console.log('stack2.shift(): ', stack2.shift());
console.log('stack2: ', stack2);
console.log('stack2.shift(): ', stack2.shift());
console.log('stack2: ', stack2);
console.log('stack2.shift(): ', stack2.shift());
console.log('stack2: ', stack2);
console.log('stack2.shift(): ', stack2.shift());
console.log('stack2: ', stack2);

console.log('[1, 2, 3].toString(): ', [1, 2, 3].toString()); //1,2,3
console.log('["a", "b", "c"].toString()', ['a', 'b', 'c'].toString()); // a,b,c
console.log('["a", [2, "c"]].toString()', [1, [2, "c"]].toString());   // 1,2,c