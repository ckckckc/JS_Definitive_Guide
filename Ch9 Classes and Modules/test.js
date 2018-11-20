function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create)
    return Object.create(p);
  var t = typeof p;
  if (t !== 'object' && t !== 'function') throw TypeError();
  function f() {}
  f.prototype = p;
  return new f();
}

function range(from, to) {
  var r = inherit(range.methods);
  r.from = from;
  r.to = to;
  return r;
}

range.methods = {
  includes: function(x) { return this.from <= x && x <= this.to; },
  foreach: function(f) {
    for(var x = Math.ceil(this.from); x <= this.to; x++) f(x); 
  },
  toString: function(){ 
    return '(' + this.from + '...' + this.to + ')'; 
  }
};

function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  includes: function(x) { return this.from <= x && x <= this.to; },
  foreach: function(f) {
    for(var x = Math.ceil(this.from); x <= this.to; x++) f(x); 
  },
  toString: function(){ 
    return "(" + this.from + "..." + this.to + ")"; 
  }
};

var r = new Range(1, 3);
console.log(r.toString())
console.log(r.prototype)

var x = range(1, 5);
console.log('range.methods.isPrototypeOf(x)', range.methods.isPrototypeOf(x))

function MyConstructor() {

}

MyConstructor.prototype.member1 = 'aa';
MyConstructor.prototype.method1 = function() { console.log(this); };

MyConstructor.classMember = 'bb';
MyConstructor.classMethod = function() { console.log(this); };

var my = new MyConstructor();

console.log(my);
console.log(my.constructor);
console.log(my.constructor.prototype);

/**
 * This constructor function defines the instance fields r and i on every
 * instance it creates.
 * These fields hold the real and imaginary parts of the complex number: 
 * they are the state of the object.
 */
function Complex(real, imaginary) {
  if (isNaN(real) || isNaN(imaginary))
    throw new TypeError();

  this.r = real;
  this.i = imaginary;
}

/**
 * The instance methods of a class are defined as function-valued properties
 * of the prototype object. The methods defined here are inherited by all
 * instances and provide the shared behavior of the class. Note that JavaScript
 * instance methods must use the this keyword to access the instance fields.
 */

Complex.prototype.add = function(that) {
  return new Complex(this.r + that.r, this.i + that.i);
};

Complex.prototype.mul = function(that) {
  return new Complex(
    this.r * that.r - this.i * that.i, 
    this.r * that.i + this.i * that.r
  );
};

Complex.prototype.mag = function() {
  return Math.sqrt(this.r * this.r + this.i * this.i); 
};

Complex.prototype.neg = function() {
  return new Complex(-this.r, -this.i); 
};

Complex.prototype.toString = function() {
  return '{' + this.r + ',' + this.i + '}'; 
};

Complex.prototype.equals = function(that) {
  return that != null &&                          // must be defined and non-null
         that.constructor === Complex   &&        // and an instance of Complex 
         this.r === that.r && this.i === that.i;  // and have the same values.
};

/**
 * Class fields (such as constants) and class methods are defined as
 * properties of the constructor. Note that class methods do not
 * generally use the this keyword: they operate only on their arguments. 
 */

// Class fields (例如 常數) 還有 Class method 會定義在 Constructor 的 properties。
// Class methods 之中並不會使用 this keyword：他們著重作用在傳入的參數之上。
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

Complex.parse = function(s) {
  try {
    var m = Complex._format.exec(s);
    return new Complex(parseFloat(m[1]), parseFloat(m[2]));
  } catch (err) {
    throw new TypeError('Can\'t parse :' + s + ' as a complex number.');
  }
};

/**
 * 底線暗指他是內部使用的斯有變數，
 * 不應該作為該 class 的 public API
 */
Complex._format = /^\{([^,]+),([^}]+)\}$/;

var c = new Complex(2, 3);
// TypeError: c.newMethod is not a function
// c.newMethod();
Complex.prototype.newMethod = function() {
  console.log('new method added...');
};
c.newMethod();



// Augmenting Classes

var a = {};

a.kkk = 1234

for (var key in a) {
  console.log('key:', key);
}

console.log('---------');


Object.prototype.aaaaa = function() {};

var a = {};

a.kkk = 1234

for (var key in a) {
  console.log('key:', key);
}

Number.prototype.times = function(f, context) {
  var n = Number(this);
  for (var i = 0 ; i < n ; i++) {
    f.call(context, i);
  }
};

var n = 3;

n.times(function(n) {
  console.log(n + ' hello');
});


function typeAndValue(x) {
  if (x == null) return '';

  switch(x.constructor) {
    case Number: 
      return 'Number: ' + x;
    case String:
      return 'String: ' + x;
    case Date:
      return 'Date: ' + x;
    case RegExp:
      return 'Regexp: ' + x;
    case Complex:
      return 'Complex: ' + x;
  }
}

var d = new Complex(4, 5);
console.log('typeAndValue(d)', typeAndValue(d));
console.log('typeAndValue(new Number)', typeAndValue(new Number));

function type(o) {
  var t, c, n;  // object type, class attribute, constructor name

  // 特別例子 null:
  if (o === null) {
    return 'null';
  }

  // 另一個特別例子： NaN 是唯一不等於自己的值
  if (o !== o) {
    return 'nan';
  }

  // 使用 typeof 判斷 typeof 值 不為 'object' 的 primitive type
  // 且同時也判斷了 'functions'
  if ((t = typeof o) !== 'object') {
    return t;
  }

  // 篩選 class 不為 'Object' 的 object
  // 這將會把大多原生物件篩選出來
  if ((c = classOf(o)) !== 'Object') {
    return c;
  }

  // 如果有 constructor name 的話，回傳它
  if (o.constructor && typeof o.constructor === 'function' &&
    (n = o.constructor.getName())
  ) {
    return n;
  }

  // 沒辦法再篩選更明確，所以回傳 'Object'
  return 'Object';
}

function classOf(o){
  return Object.prototype.toString.call(o).slice(8, -1);
}

Function.prototype.getName = function() {
  if ('name' in this) {
    return this.name;
  }
  return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};


function quacks(o) {
  for (var i = 1, len = arguments.length; i < len ; i++) {
    var arg = arguments[i];

    switch (typeof arg) {
      case 'string':
        if (typeof o[arg] !== 'function') return false;
        continue;
      case 'function':
        arg = arg.prototype;
      case 'object':
        for (var m in arg) {
          if (typeof arg[m] !== 'function') continue;

          if (typeof o[m] !== 'function') return false;
        }
    }
  }

  return true;
}

console.log('quacks: ', quacks({}, Complex));
console.log('quacks: ', quacks(d, Complex));


function myQuacks(inputObject) {
  var isObjectHavingAllMethods = function(sourceObj, targetObject) {

    if (Object.getOwnPropertyNames) {
      var predictMethods = Object.getOwnPropertyNames(targetObject);

      for (var i = 0, len = predictMethods.length ; i < len ; i++) {
        var predictMethod = predictMethods[i];

        if (typeof targetObject[predictMethod] !== 'function') continue;

        if (typeof sourceObj[predictMethod] !== 'function') return false;
      }
    }
    else {
      for (var method in targetObject) {
        if (typeof targetObject[method] !== 'function') continue;

        if (typeof sourceObj[method] !== 'function') return false;
      }
    }

    return true;
  };

  for (var i = 1, len = arguments.length; i < len ; i++) {
    var argument = arguments[i];

    switch (typeof argument) {
      case 'string':
        if (typeof inputObject[argument] !== 'function') return false;
        continue;
      case 'function':
        if (isObjectHavingAllMethods(inputObject, argument.prototype)) {
          continue;
        }
        return false;
      case 'object':
        if (isObjectHavingAllMethods(inputObject, argument)) {
          continue;
        }
        return false;
    }
  }

  return true;
}

console.log('myQuacks: ', myQuacks({}, Complex));
console.log('myQuacks: ', myQuacks(d, Complex));

function myConstructor2(a) {
  this.a = a;
}

myConstructor2.prototype.toJSON = function() {
  return 123;
};

console.log(JSON.stringify(new myConstructor2(2)));

function myConstructor3(a) {
  this.a = a;
}

console.log(JSON.stringify(new myConstructor3(2)));

function extend(o, p) {
  for (var prop in p) {
    o[prop] = p[prop];
  }
  return o;
}

extend(Set.prototype, {
  toString: function() {
    var s = '{', i = 0;
    this.foreach(function(value){
      s += ((i++ > 0) ? ', ' : '') + value;
    });
    return s + '}';
  },
  // Like toString, but call toLocaleString on all values
  toLocaleString: function() {
    var s = '{', i = 0;

    this.foreach(function(value){
      if (i++ > 0) {
        s += ', ';
      }
      // null & undefined
      if (value == null) {
        s += value;
      }
      // all others
      else {
        s += value.toLocaleString();
      }
    });
    return s + '}';
  },
  toArray: function() {
    var array = [];
    this.foreach(function(value) {
      array.push(value);
    });
    return array;
  }
});

Set.prototype.toJSON = Set.prototype.toArray;

Range.prototype.constructor = Range;

Range.prototype.equals = function(that) {
  if (that == null) return false;
  if (that.constructor !== Range) return false;

  return this.from == that.from && this.to == that.to;
};


var t, k;
(function() {
  function Test(a) {
    this.a = a;
  }

  Test.prototype.equals = function(that) {
    if (that.constructor !== this.constructor) return false;
    return this.a === that.a;
  };

  t = new Test(1);
  k = new Test(1);
})();

(function() {
  
})();

console.log(t.equals(k));

var AbstractSet = require('./AbstractSet.js');
var ArraySet = require('./ArraySet.js');
var AbstractWritableSet = require('./AbstractWritableSet.js');

var arraySet = new ArraySet(1, 2, 3);
console.log('arraySet instanceof ArraySet', arraySet instanceof ArraySet);
console.log('arraySet instanceof AbstractWritableSet', arraySet instanceof AbstractWritableSet);
console.log('arraySet instanceof AbstractSet', arraySet instanceof AbstractSet);

(function() {
  var idprop = '|**objectId**|';
  var nextid = 1;

  function idGetter() {
    if (!(idprop in this)) {
      if (!Object.isExtensible(this)) {
        throw new Error('Can\'t define id for nonextensible objects');
      }

      Object.defineProperty(this, idprop, {
        value: nextid++,
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
    return this[idprop];
  }

  Object.defineProperty(Object.prototype, 'objectId', {
    get: idGetter,
    enumerable: false,
    configurable: false
  });
})();

var obj = {};
var obj2 = {};
var obj3 = function() {};
console.log(obj)
console.log(obj.objectId)
console.log(obj2.objectId)
console.log(obj3.objectId)
console.log(obj.objectId)

function Test() {
  console.log('this', this)
  console.log('this.method()', this.method())
  console.log('this.constructor', this.constructor)
  console.log('this.constructor === Test', this.constructor === Test)
  console.log('this instanceof Test: ', this instanceof Test);
}

Test.prototype.method = function() {
  console.log('method invoked');
};

var t = new Test();

for (var property in t) {
  console.log('property:', property)
}

console.log('t.constructor:', t.constructor)

function FrozenRange(from, to) {
  var props = {
    from: {
      value: from,
      enumerable: true,
      writable: false,
      configurable: false
    },
    to: {
      value: to,
      enumerable: true,
      writable: false,
      configurable: false
    },
  };

  if (this instanceof FrozenRange) {
    Object.defineProperties(this, props);
  }
  else {
    return Object.create(FrozenRange.prototype, props);
  }
}

Object.defineProperties(FrozenRange.prototype, {
  includes: {
    value: function(x) { return this.from <= x && x <= this.to; }
  },
  foreach:  {
    value: function(f) {
      for (var x = Math.cell(this.from); x <= this.to; x++)
        f(x);
    }
  },
  toString: {
    value: function() {
      return '(' + this.from + '...' + this.to + ')';
    }
  }
});

var fr = new FrozenRange(1, 10);
fr.from = 2;
console.log('fr.from:', fr.from)
for (var property in fr) {
  console.log('properties in FrozenRange instance:', property);
}

console.log('FrozenRange method includes', fr.includes);

