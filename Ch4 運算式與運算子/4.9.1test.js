var a = {};
var b = {};

console.log(a == b);
console.log(a === b);
console.log({} == {});
console.log({} === {});
console.log([] == []);
console.log([] === []);

console.log(1 === 1);
console.log(1 == "1");
console.log(a === a);

var c = null;
var d = null
var e = undefined;
var f = undefined;

console.log(c === d);
console.log(e === f);

console.log("check NaN:\n");

var n = undefined;
console.log(isNaN(n));
console.log(n !== n);
console.log(n === NaN);
console.log(n !== NaN);

console.log("type test");
console.log(typeof {"a": 1}.valueOf());
console.log(typeof {"a": 1}.toString());
console.log("type test");

console.log({"a" : 1, "b" : {"c": 2}}.valueOf());
console.log({"a" : 1, "b" : {"c": 2}}.toString());
console.log({"a" : 1, "b" : {"c": 2}} == "{ a: 1, b: { c: 2 } }");
console.log({"a" : 1, "b" : {"c": 2}} == "[object Object]");
console.log({"a" : 1, "b" : {"c": 2}} == {"a" : 1, "b" : {"c": 2}});


console.log("check Number vs boolean:\n");
console.log(1 == true);

console.log("check String vs boolean:\n");
console.log("1" == true);
console.log("2" == true);

console.log("check String vs Number:\n");
console.log("1" == 1);
console.log("2" == 2);