var obj = {};

obj.fun1 = function () {
  console.log(1);
  var a;
  return a; 
}

function fun2() {
  console.log(2);
  return 2; 
}

function fun3() {
  console.log(3);
  return 3; 
}

function fun4() {
  console.log(4);
  return 4; 
}

// the order of evalution is from left side to right side
// the order in which operations are performed in a complex expression => * => + => =
obj = fun2() + fun3() * fun4();

console.log(obj);