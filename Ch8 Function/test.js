var someFun = function f() {
  // console.log(f())
  console.log(3)
};

someFun();

var someObj = {
  fun: function () {
    // console.log(this);
  }
};

someObj.fun();

function someFun() {
  console.log(1)
}

function someFun() {
  console.log(2)
}

// someFun();
someFun()

function someFun2() {
  console.log('someFun2')
  // someFun2();
}

console.log(someFun2())

console.log('someFun3', someFun3)

var someFun3 = function() {};

console.log('someFun3', someFun3)


function calculateCircleWaterBuoyancy(radius) {
  const WATER_DENSITY = 1000,
        GRAVITY_ACCELERATION = 9.81;
  const waterWeight = calculateWaterWeight(calculateCircleValumn(radius));

  function calculateCircleValumn(r) { 
    return 4/3*Math.PI*Math.pow(r, 3); 
  } 

  function calculateWaterWeight(valumn) { 
    return valumn * WATER_DENSITY * GRAVITY_ACCELERATION;
  }

  return waterWeight;
}


console.log(calculateCircleWaterBuoyancy(1));


function hypotenuse(a, b) {
  function square(x) { 
    // b = 2; 他改得到接著要執行的 b 
    return x*x; 
  } 
  return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(1, 1));

// (function() {
//   'use strict';
//   console.log(this);
// })();

// (function() {
//   console.log(this);
// })();


var thisTestObj = {
  method: function() {
    // 'use strict';
    console.log('this === global: ', this === global);
    console.log('this === thisTestObj: ', this === thisTestObj);

    // function invocation
    nestedFun();

    function nestedFun() {
      console.log('this === global: ', this === global);
      console.log('this === thisTestObj: ', this === thisTestObj);
    }
  }
};

// method oinvocation
thisTestObj.method();


var calculator = {
  operand1: 1,
  operand2: 2,
  add: function() {
    this.result = this.operand1 + this.operand2;
  }
};

calculator.add();
console.log('calculator result:', calculator.result);

var nestedTest1 = {
  outer: function() {
    console.log('nestedTest1 this', this);

    var innerObj = {
      inner: function() {
        console.log('nestedTest1 this', this);
      }
    };

    innerObj.inner();
  }
};
nestedTest1.outer();

var nestedTest2 = {
  outer: function() {
    var self = this;
    console.log('nestedTest2 this', this);

    var innerObj = {
      inner: function() {
        console.log('nestedTest2 self', self);
        console.log('nestedTest2 this', this);
      }
    };

    innerObj.inner();
  }
};
nestedTest2.outer();

var nestedTest3 = {
  outer:function() {
    console.log('nestedTest3 this', this);

    innerFun();

    function innerFun() {
      console.log('nestedTest3 innerFun this === global', this === global);
    }
  }
};

nestedTest3.outer();

var arrFun = [
  1,
  function () {
    console.log(this);
  }
];

arrFun[1]();


function Constructor1() {
  this.x = 1;
  // If a constructor does return an object value, that value becomes the value of the object creation expression and the newly created object is discarded.
  return {};    // constructor does not return value, 
}

var obj = new Constructor1();
console.log(obj);


function Constructor2(arg){
  this.arg = arg;
}

var c21 = new Constructor2;
var c22 = new Constructor2();
var c23 = new Constructor2(1);
console.log(c21);
console.log(c22);
console.log(c23);

function Constructor3() {
  console.log('Constructor3 this:', this);
  // return 1;
  // return {a: 1};
  // return function test() {};
  // return undefined;
}

console.log('new Constructor3', new Constructor3);

function Constructor4() {
  return this;
}
console.log('new Constructor4', new Constructor4);
console.log('Constructor4.prototype: ', Constructor4.prototype)

var someObj2 = {
  methodOfConstructor: function innerConstructor(arg) {
    console.log('methodOfConstructor this:', this);
    this.arg = arg;
    // return this;
  },
  otherProperty: null
};

console.log('new someObj2.methodOfConstructor(1):', new someObj2.methodOfConstructor(1));
console.log('someObj2.methodOfConstructor(1): ', someObj2.methodOfConstructor(1));


(function (a){
  console.log('argument undefined test:', a === undefined);
})();

function argTest1(a, b, c) {
  console.log('arguments.a', arguments.a);
  console.log('arguments[0]', arguments[0]);
  console.log('arguments[4]', arguments[4]);
  console.log('arguments', arguments);

  console.log('b:', b);
  arguments[1] = null;
  console.log('b:', b);
  arguments = 1234;
  console.log(arguments);
}

argTest1(1, 2, 3, 4, 5);

function argTest2(a, b, c) {
  'use strict';
  console.log('--use strict argTest--');
  console.log('arguments.a', arguments.a);
  console.log('arguments[0]', arguments[0]);
  console.log('arguments[4]', arguments[4]);
  console.log('arguments', arguments);

  console.log('b:', b);
  arguments[1] = null;
  console.log('b:', b);

  // SyntaxError: Unexpected eval or arguments in strict mode
  // arguments = 1234;
}

argTest2(1, 2, 3, 4, 5);


function argTest3(x, y) {
  console.log('argTest3:', x);
  arguments[0] = null;
  console.log('argTest3:', x);

  console.log('argTest3:', arguments[1]);
  y = null;
  console.log('argTest3:', arguments[1]);
}

argTest3(2, 3);

// arguments 不能當作參數名稱
// SyntaxError: Unexpected eval or arguments in strict mode
function argTest4(x, y) {
  'use strict';
  // SyntaxError: Unexpected eval or arguments in strict mode
  // var arguments = 1234; 
  console.log('argTest4:', x);
  arguments[0] = null;
  console.log('argTest4:', x);
  console.log('argTest4 arguments[0]:', arguments[0]);

  console.log('argTest4:', arguments[1]);
  y = null;
  console.log('argTest4:', arguments[1]);
  console.log('argTest4 y:', y);
}

argTest4(1, 2);

var operator = {
  add: function(x, y) { return x + y; },
  pow: Math.pow,
};

console.log(operator.pow(3, operator.add(1, 1)));

autoIncrement.id = 0;

function autoIncrement() {
  return ++autoIncrement.id;
}

console.log('autoIncrement: ', autoIncrement());
console.log('autoIncrement: ', autoIncrement());
console.log('autoIncrement: ', autoIncrement());

function factorial(n) {
  if (!isFinite(n) || n <= 0 || n !== Math.floor(n)) {
    return NaN;
  }

  if (!(n in factorial))
    factorial[n] = n * factorial(n - 1);    // 計算 factorial[n] 的值，並將之 catch 作為 factorial 的 property
  return factorial[n];
}

factorial[1] = 1;   // 初始化 factorial[1]

console.log('factorial(2)', factorial(2))
console.log('factorial(3)', factorial(3))
console.log('factorial(10)', factorial(10));
