// function inherit(p) {
//   if (p == null) throw TypeError();
//   if (Object.create)
//     return Object.create(p);
//   var t = typeof p;
//   if (t !== 'object' && t !== 'function') throw TypeError();
//   function f() {};
//   f.prototype = p;
//   return new f();
// }

// var o1 = { r: 1 };
// var o2 = Object.create(o1);
// o2.x = 2;
// for (var key in o2) {
//   console.log('key in o2:', key)
// }

// o2.r = 3;
// console.log('o1.r', o1.r)
// console.log('o2.r', o2.r)

// // var o = {};
// // o.x = 1;
// // var  p = inherit(o);
// // p.y = 2;
// // var q = inherit(p);
// // q.z = 3;
// // q.x = 4;
// // var s = q.toString()
// // var unitcircle = { r:1 };     // An object to inherit from
// // var c = inherit(unitcircle);  // c inherits the property r
// // c.x = 1; c.y = 1;             // c defines two properties of its own
// // c.r = 2;                      // c overrides its inherited property
// // console.log(unitcircle.r);                 // => 1: the prototype object is not affected
// // console.log(c.r);                 // => 1: the prototype object is not affected
// // // console.log(x && x.y && x.y.length)
// // console.log(Object.prototype)
// // Object.prototype = 1234;
// // console.log(Object.prototype)


// // var o = { x: 1};
// // console.log(delete o.x);
// // console.log(delete o.x);
// // console.log(delete o.toString);
// // console.log(o)
// // console.log(o.toString());

// // console.log(delete Object.prototype)
// // console.log(Object.prototype)

// // // this.x = 1;
// // // delete x;
// // console.log(this)

// Object.prototype.test = "hahaha";
// var kkk = '';
// var ggg = 12;
// var ccc = { a: 1}
// console.log(kkk.test)
// console.log(ggg.test)
// console.log(Array.test)

// // var o = { x: 1, y: 2};
// // console.log(o.propertyIsEnumerable("x"));
// // console.log(o.propertyIsEnumerable("toString"));
// // console.log(o.propertyIsEnumerable("aaa"));

// function keys(o) {
//   if (typeof o !== 'object') throw TypeError();
//   var props = [];
//   for (var prop in o) {
//     if (o.hasOwnProperty(prop)) props.push(prop);
//   }
//   return props;
// }

// var oo = {a: 1, b:2, c:3};

// // console.log(Object.getOwnPropertyNames(Object))
// console.log('------------');
// var ddd = Object.create(ccc);
// ddd.b = 2;
// for (var key in ddd) {
//   console.log(key)
// }

// console.log('------------');
//   console.log(Object.keys(ddd))
// console.log('------------');

// var obj = {
//   a: 1,
//   b: console.log('is global:', this === global), // this = window object
//   c: function() {
//     console.log(this)   // this = obj
//   }
// };

// var Obj = function Obj() {
//   this.x = 1;
//   this.y = console.log(this === Obj);
//   this.z = function() {
//     console.log(this);
//     return this;
//   }
// }
// var oo = new Obj();
// oo.z()

// obj.b
// obj.c()

// var Point = {
//   x: 1,
//   y: 1,
//   // radius is a read-write accessor property with getter and setter.
//   get radius() {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   },
//   set radius(radius) {
//     console.log(this);
//     var oldRadius = Math.sqrt(this.x * this.x + this.y * this.y);
//     var ratio = radius / oldRadius;
//     // console.log(ratio);
//     this.x *= ratio;
//     this.y *= ratio;
//     console.log(this);
//   },
//   // theta is a read-only accessor property with getter only.
//   get theta() {
//     return Math.atan2(this.y, this.x);
//   },
// };

// console.log(obj.x)
// obj.radius = 2;
// console.log(obj.x)

// console.log(obj.theta)
// obj.theta = 2;
// console.log(obj.theta)

// inherits getters and setters
// var Point2 = Object.create(Point);
// Point.radius = 3;
// Point2.radius = 2;

// // This object generates strictly increasing serial numbers
// var serialnum = {
//   // This data property holds the next serial number.
//   // The $ in the property name hints that it is a private property.
//   $n: 0,
//   get next() {
//     return this.$n ++;
//   },
//   // Set a new value of n, but only if it is larger than current set next(n)
//   set next(n) {
//     if (n >= this.$n) this.$n = n;
//     else throw 'serial number can only be set to a larger value';
//   }
// };

// console.log(obj.$n)
// console.log(obj.next)
// console.log(obj.$n)



// var random = {
//   // 0 ~ 16^2 不帶正負號的 8 位元整數 ( 2^8 = 2^4^2 = 16^2 )
//   get octet() { return Math.floor(Math.random() * 256); },
//   // 0 ~ 256^2 不帶正負號的 16 位元整數 ( 2^16 = 2^4^2^2 = 16^2^2 = 256^2 )
//   get unit16() { return Math.floor(Math.random() * 65536); },
//   // 16 位元帶正負號的整數
//   get int16() { return Math.floor(Math.random() * 65536) - 32768; },
// };


Object.defineProperty(Object.prototype, "extend", {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function(inputObject) {
    var inputProperties = Object.getOwnPropertyNames(inputObject);

    for (var i = 0, len = inputProperties.length; i < len ; i++){
      var property = inputProperties[i], descriptor;
      if (property in this) continue;
      descriptor = Object.getOwnPropertyDescriptor(inputObject, property);
      Object.defineProperty(this, property, descriptor);
    }
  }
});


var o = {};

Object.defineProperty(o, "x", {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true
});

console.log(Object.keys(o)) // []
console.log(o.x)            // 1

Object.defineProperty(o, "x", {
  writable: false
});

o.x = 2;                    // Fails silently or throws TypeError in strict mode
console.log(o.x)            // still 1

// The property is still configurable, so we can change its value like this
Object.defineProperty(o, "x", {
  value: 2
});

console.log(o.x)            // 2

// Now change x from a data property to an accessor property
Object.defineProperty(o, "x", {
  get: function() { return 0; }
});

console.log(o.x)            // 0

// Legacy API
console.log(o.__lookupGetter__('x'))