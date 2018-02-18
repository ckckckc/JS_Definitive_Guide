// "use strict";

var a = 1, 
    b = "HaHaHa";
try{
  b((function(){
    a = a + 1;
  })());           
} catch(error) {
  console.log(error); // [TypeError: b is not a function]
  console.log(a);     // 2
}

var arr = [function(){console.log(this); return this;}, "array2"];
var obj = {
  "method": function(){console.log(this); return this;},
  "member": 1234,
  "methods": [function(){console.log(this); return this;}, 1234]
};

function thisTest(){console.log(this);}
thisTest();

var re = arr[0]()[1];
console.log(arr[1]);
console.log(re);


console.log(obj.method().methods[0]);
console.log(obj.methods[0]()[1]);

