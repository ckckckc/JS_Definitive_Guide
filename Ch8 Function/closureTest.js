var scope = 'global';

function checkscope() {
  var scope = 'local';
  function f() { return scope; }
  return f;
}

console.log(checkscope()())


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

