function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create)
    return Object.create(p);
  var t = typeof p;
  if (t !== 'object' && t !== 'function') throw TypeError();
  function f() {};
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
    return "(" + this.from + "..." + this.to + ")"; 
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
  console.log('this', this);
  var n = Number(this);
  for (var i = 0 ; i < n ; i++) {
    f.call(context, i);
  }
};

var n = 3;

n.times(function(n) {
  console.log(n + ' hello');
});
