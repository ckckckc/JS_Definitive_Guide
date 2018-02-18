var lt = "abc";
var lf = null;

var rt = {};
var rf = -0;

console.log(lf && rt);  // null
console.log(lf && rf);  // null

console.log(lt && rt);  // {}
console.log(lt && rf);  // -0

var o = { x : 1 };
var p = null;
console.log(o && o.x);
console.log(p && p.x);
console.log(p.x);