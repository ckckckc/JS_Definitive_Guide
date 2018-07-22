const { performance } = require('perf_hooks');

var map = function(arr, callback, thisArg) {
  var currentArray = arr,
    resultArray = [];
  for (var i = 0, len = currentArray.length; i < len ; i++) {
    if (i in currentArray) {
      resultArray.push(callback.call(thisArg, currentArray[i], i, currentArray));
    }
  }

  return resultArray;
};

console.log(map([1, 4, 9], Math.sqrt));

function not(func) {
  return function() {
    return !func.apply(this, arguments);
  };
}

function even(x) {
  return x % 2 === 0;
}

var odd = not(even);

console.log('every odd', [1, 3, 5].every(odd));

function mapper(func) {
  return function(arr) {
    return arr.map(func);
  }
}

// function increment(x) {
//   return x + 1;
// }

// var incrementer = mapper(increment);

// console.log('incrementer([3, 4, 5]): ', incrementer([3, 4, 5]));

function compose(f, g) {
  return function() {
    return f.call(this, g.apply(this, arguments));
  };
}

var square = function(x) { return x*x; };
var sum = function(a, b) { return a + b; };
var squareofsum = compose(square, sum);
console.log('squareofsum(3, 7)', squareofsum(3, 7));


function array(a, n) {
  return Array.prototype.slice.call(a, n || 0);
}

function partialLeft(f) {
  var args = arguments;
  return function() {
    var arr = array(args, 1);
    arr = arr.concat(array(arguments));
    return f.apply(this, arr);
  };
}

function partialRight(f) {
  var args = arguments;
  return function() {
    var arr = array(arguments);
    arr = arr.concat(array(args, 1));
    return f.apply(this, arr);
  };
}

function partial(f) {
  var args = arguments;
  return function() {
    var arr = array(args, 1);
    var i = 0, j = 0;

    for(; i < arr.length ; i++) {
      if (arr[i] === undefined) {
        arr[i] = arguments[j++];
      }
    }

    arr = arr.concat(array(arguments, j));
    return f.apply(this, arr);
  };
}

var increment = partialLeft(sum, 1);
console.log(increment(5));
var cuberoot = partialRight(Math.pow, 1/3);
console.log(cuberoot(27));
String.prototype.first = partial(String.prototype.charAt, 0);
var str = 'abc';
console.log(str.first()); // a
String.prototype.last = partial(String.prototype.substr, -1, 1);
console.log(str.last());  // c

// not even odd 重新包裝：
var not = partialLeft(compose /* 上節的 compose */, function(x) { return !x; });
var even = function(x) { return x % 2 === 0; };
var odd = not(even);
var isNumber = not(isNaN);

function memoize(func) {
  var cache  = {};

  return function() {
    var key = arguments.length + Array.prototype.join.call(arguments, ',');

    if (key in cache) {
      console.log(cache)
      return cache[key];
    }
    else{
      return cache[key] = func.apply(this, arguments);
    }
  };
}

function gcd(a,b) {
  var t;
  if (a < b) t=b, b=a, a=t;
  while(b != 0) t=b, b = a%b, a=t;
  return a;
}

var gcdmemo = memoize(gcd);
var t1 = performance.now();
var result1 = gcdmemo(85, 187);
gcdmemo(85, 187);
var t2 = performance.now();


var t3 = performance.now();
var result2 = gcd(85, 187);
var t4 = performance.now();

// 第一次因為要記錄 cache 所以比較久
console.log(t2 - t1, result1);
console.log(t4 - t3, result2);

var factorial = memoize(function(n) {
  return (n <= 1) ? 1 : n * factorial(n-1);
});

console.log(factorial(5));
console.log(factorial(8));