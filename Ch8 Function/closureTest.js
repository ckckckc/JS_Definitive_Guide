function outer(v, s) {
  console.log('v', v);
  function inner(w) {
    return new Promise(r => {
      setTimeout(function() {
        r(w + v);
      }, 1000);
    });
  }

  return new Promise((resolve) => {
    setTimeout(function() {
      console.log('v in p1', v);
      resolve(inner);
    }, s);
  });
}

outer(5, 500).then(inner => inner(10)).then(console.log);
outer(1, 2000).then(inner => inner(2)).then(console.log);

function outer2(d) {
  return function inner2(c) {
    console.log('d', d);
    d = c;
    console.log('c', c);
    console.log('d', d);
  };
}

var getInner = outer2(1);
var getInner2 = outer2(1);
getInner(2);
getInner(3);
getInner2(4);

// var count = 100;
// function outer() {
//   var count = 0;
//   console.log(count);
//   return function inner() {
//     // 98j;zoiyv98py;ojer
//     setTimeout(() => {
//       console.log(++count);
//     }, 2000);
//   };
// }

// outer()();

// setTimeout(() => {
//   outer()();
// }, 1000);

// var uniqueInteger = (function() {
//   var counter = 0;
//   return function() { return counter++; };
// })();

// console.log(uniqueInteger())
// console.log(uniqueInteger())
// console.log(uniqueInteger())
// console.log(uniqueInteger())

// function unique2() {
//   var counter  = 0;
//   return counter++;
// }

// console.log(unique2())
// console.log(unique2())
// console.log(unique2())
// console.log(unique2())

// function Counter() {
//   this.n = 0;

//   this.count = function() {
//     this.n++;
//   };

//   this.reset = function() {
//     this.n = 0;
//   };
// }

// var counter1 = new Counter()
// console.log(counter1.n)
// console.log(counter1.count())
// console.log(counter1.n)
// console.log(counter1.reset())
// console.log(counter1.n)

// function createCounter() {
//   var n = 0;
//   return {
//     count: function() { return n++; },
//     reset: function() { n = 0; }
//   };
// }

// var counter1 = createCounter();
// var counter2 = createCounter();
// console.log(counter1.count());               // 0
// console.log(counter2.count());               // 0
// console.log(counter1.reset());               // 
// console.log(counter1.count());               // 0
// console.log(counter2.count());               // 1

// function createCounter(n) {
//   return {
//     get count() { return n++; },
//     set count(m) {
//       if (m >= n) n = m;
//       else throw Error('count can only be set to a larger value');
//     }
//   };
// }

// var counter = createCounter(1000);
// console.log(counter.count);         // 1000
// console.log(counter.count);         // 1001
// counter.count = 2000;  //
// console.log(counter.count);         // 2000
// // counter.count = 2000;  // Error


// function addPrivateProperty(targetObj, propertyName, setterPredicate) {
//   var privateValue;

//   targetObj['get' + propertyName] = function() { return privateValue; };

//   targetObj['set' + propertyName] = function(newPrivateValue) {
//     if (setterPredicate && !setterPredicate(newPrivateValue)) {
//       throw Error('set' + propertyName + ': invalid value ' + newPrivateValue);
//     }
//     else {
//       privateValue = newPrivateValue;
//     }
//   };
// }

// var someObj = {};

// addPrivateProperty(someObj, 'Name', function(x) { return typeof x === 'string'; });

// console.log(someObj.getName());

// someObj.setName('Leo');

// console.log(someObj.getName());

// // someObj.setName(null);

// function constFunc(v) {
//   return function() {
//     return v;
//   };
// }

// var funcs = [];

// for (var i = 0; i < 10 ; i++) {
//   funcs[i] = constFunc(i);
// }

// console.log(funcs[5]());  // 5

// function constFuncs() {
//   var funcs = [];

//   for (var i = 0 ; i < 10 ; i++) {
//     // funcs[i] = function() { return i; };
//     funcs[i] = (function(i) { 
//       return function() { return i; }; 
//     })(i);
//   }

//   return funcs;
// }

// var funcs2 = constFuncs();

// console.log(funcs2[5]());
