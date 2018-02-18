var obj = {
  "a": 1,
  "b": 2,
  "c": 3
}
var a = [], i = 0;

function getObj(){
  console.log("get obj...");
  return obj;
}


for (a[i++] in getObj()) {
  console.log(i);
}

console.log("\n");

var obj2 = {
  "e": 1,
  "f": 2,
  "g": 3
}

for (var i in obj2) {
  delete obj2.g;
  console.log(i);
  console.log(obj2);
}

console.log("\n");

var obj3 = {"a" : 1};

for (var i in obj3) {
  obj3.b = 2;
  console.log(obj3);
}