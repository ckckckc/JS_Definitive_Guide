var a = {
  "b":null,
  "c":undefined,
  "d":NaN
};

var e = [
  "f",
  null,
  undefined,
  NaN,
  {}
];

console.log("a" in a);
console.log("c" in a);
console.log(undefined in a);

console.log("\n");

console.log("c" in e);
console.log(1 in e);
console.log(null in e);
console.log(NaN in e);
console.log(4 in e);
console.log(5 in e);

console.log("\n");

console.log("valueOf" in a);
console.log("toString" in a);
console.log("valueOf" in e);
console.log("toString" in e);

console.log("\n");

console.log("toString" in "abc");