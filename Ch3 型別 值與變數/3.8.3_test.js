var array = [1, 2, 3];
console.log("array");
console.log(array.toString());
console.log(array.valueOf());
console.log("\n");

var string = "string";
console.log("string");
console.log(string.toString());
console.log(string.valueOf());
console.log("\n");

var number = 1234;
console.log(1234);
console.log(number.toString());
console.log(number.valueOf());
console.log("\n");

var date = new Date();
console.log("date");
console.log(date.toString());
console.log(date.valueOf());
console.log("\n");

var object = {"key" : "value", "array" : [1, 2, 3]};
console.log("object");
console.log(object.toString());
console.log(object.valueOf());
console.log("\n");

console.log([].toString());
console.log([].valueOf());

console.log("\n");

console.log([2].toString());
console.log([2].valueOf());

console.log("\n");

console.log([0].toString());
console.log([0].valueOf());